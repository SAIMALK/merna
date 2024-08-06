import React from "react";
import { ScrollView, View, Button, StyleSheet,Text } from "react-native";
import Header from "../Components/Header";
import Offers from "../Components/Offers";
import ExpertAdvice from "../Components/ExpertAdvice";
import PlantationGrid from "../Components/PlantationGrid";
import Icons from "../Components/Icons";
import Cards from "../Components/Cards"

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <ScrollView style={styles.scrollContainer}>
        <Offers />
        <Icons />
        <View>
        <View style={styles.hr} />
        <Text style={styles.text}>Recommended Plans</Text>
        </View>
        <Cards/>
        <View style={styles.buttonContainer}>
          <Button
            title="View All"
            onPress={() => navigation.navigate("AllCrops")}
            color="#009900" // Optional: You can set a custom color
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flex: 1,
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  buttonContainer: {
    margin: 10,
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    borderStyle: 'dotted',  // Add dotted style
    marginVertical: 10,
    marginHorizontal: 20, 
  },
});

export default HomeScreen;
