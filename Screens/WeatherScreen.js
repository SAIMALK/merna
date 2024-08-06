import React, { useState, useEffect } from "react";
import { View, Text, TextInput, FlatList, StyleSheet, ActivityIndicator } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';

function getWeatherIcon(wmoCode) {
  const icons = new Map([
    [[0], "☀️"],
    [[1], "🌤"],
    [[2], "⛅️"],
    [[3], "☁️"],
    [[45, 48], "🌫"],
    [[51, 56, 61, 66, 80], "🌦"],
    [[53, 55, 63, 65, 57, 67, 81, 82], "🌧"],
    [[71, 73, 75, 77, 85, 86], "🌨"],
    [[95], "🌩"],
    [[96, 99], "⛈"],
  ]);
  const arr = [...icons.keys()].find((key) => key.includes(wmoCode));
  if (!arr) return "error";
  return icons.get(arr);
}

function convertToFlag(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function formatDay(dateStr) {
  return new Intl.DateTimeFormat("en", {
    weekday: "short",
  }).format(new Date(dateStr));
}

const WeatherScreen = () => {
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [displayLocation, setDisplayLocation] = useState("");
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const loadLocation = async () => {
      try {
        const storedLocation = await AsyncStorage.getItem("location");
        if (storedLocation) setLocation(storedLocation);
      } catch (error) {
        console.error("Failed to load location", error);
      }
    };
    loadLocation();
  }, []);

  useEffect(() => {
    const saveLocation = async () => {
      try {
        if (location) {
          await AsyncStorage.setItem("location", location);
          fetchWeather();
        }
      } catch (error) {
        console.error("Failed to save location", error);
      }
    };
    saveLocation();
  }, [location]);

  const fetchWeather = async () => {
    if (location.length < 2) return setWeather({});

    try {
      setIsLoading(true);

      // 1) Getting location (geocoding)
      const geoRes = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${location}`
      );
      const geoData = await geoRes.json();

      if (!geoData.results) throw new Error("Location not found");

      const { latitude, longitude, timezone, name, country_code } =
        geoData.results.at(0);

      setDisplayLocation(`${name} ${convertToFlag(country_code)}`);

      // 2) Getting actual weather
      const weatherRes = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&timezone=${timezone}&daily=weathercode,temperature_2m_max,temperature_2m_min`
      );
      const weatherData = await weatherRes.json();
      setWeather(weatherData.daily);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.app}>
      <Text style={styles.title}>Weather</Text>
      <Input location={location} onChangeLocation={setLocation} />

      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}

      {weather.weathercode && (
        <Weather weather={weather} location={displayLocation} />
      )}
    </View>
  );
};

const Input = ({ location, onChangeLocation }) => {
  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Search for location..."
        value={location}
        onChangeText={onChangeLocation}
      />
    </View>
  );
};

const Weather = ({ weather, location }) => {
  const { temperature_2m_max: max, temperature_2m_min: min, time: dates, weathercode: codes } = weather;

  return (
    <View>
      <Text style={styles.subtitle}>Weather {location}</Text>
      <FlatList
        data={dates}
        renderItem={({ item, index }) => (
          <Day
            date={item}
            max={max[index]}
            min={min[index]}
            code={codes[index]}
            isToday={index === 0}
          />
        )}
        keyExtractor={(item) => item}
        contentContainerStyle={styles.weather}
      />
    </View>
  );
};

const Day = ({ date, max, min, code, isToday }) => {
  return (
    <View style={styles.day}>
      <Text style={styles.icon}>{getWeatherIcon(code)}</Text>
      <Text>{isToday ? "Today" : formatDay(date)}</Text>
      <Text>
        {Math.floor(min)}&deg; &mdash; <Text style={styles.bold}>{Math.ceil(max)}&deg;</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderColor: "f",
    borderWidth: 1,
    padding: 10,
    width: 200,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  weather: {
    alignItems: "center",
  },
  day: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 300,
    padding: 10,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
  },
  bold: {
    fontWeight: "bold",
  },
});

export default WeatherScreen;
