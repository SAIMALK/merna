import React, { useEffect, useState } from "react";
import { View, StyleSheet,Text } from 'react-native';
import CropItem from './CropItem';

const PlantationGrid = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
   () => {
       fetchingstories()
   }
  , [])

  const fetchingstories = async () => {
    try {
      const response = await fetch('http://192.168.1.7:5000/api/crops');
      const responseData = await response.json();
      setData(responseData.crops);
       // Access 'crops' property
    } catch (error) {
      console.error("Error fetching story data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <View style={styles.loading}><Text>Loading...</Text></View>;
  }
  // const goToStoryScreen = (storyId) => {
  //   navigation.navigate("Story", { storyId });
  // };
  // const { data } = useGetStorysQuery();
  //  console.log(data);


//   const crops = [
//     { imageUrl: 'https://images.unsplash.com/photo-1715944476655-20a7d99ae687?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGF0ZSUyMHBhbG1zfGVufDB8fDB8fHww', title: 'Date Palm' },
//     { imageUrl: 'https://images.unsplash.com/photo-1509817775895-79efefb813d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29jb251dHxlbnwwfHwwfHx8MA%3D%3D', title: 'Coconut' },
//     { imageUrl: 'https://images.unsplash.com/photo-1602943543714-cf535b048440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhJTIwbGVhdmVzfGVufDB8fDB8fHww', title: 'Tea' },
//     { imageUrl: 'https://plus.unsplash.com/premium_photo-1669205342640-aef28ff08cd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxtb25kJTIwdHJlZXxlbnwwfHwwfHx8MA%3D%3D', title: 'Almond' },
//     { imageUrl: 'https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdoZWF0fGVufDB8fDB8fHww', title: 'Wheat' },
//     { imageUrl: 'https://images.unsplash.com/photo-1511817354854-e361703ac368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29ybnxlbnwwfHwwfHx8MA%3D%3D', title: 'Corn' },
//     { imageUrl: 'https://plus.unsplash.com/premium_photo-1675237625862-d982e7f44696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D', title: 'Coffee' },
//     { imageUrl: 'https://images.unsplash.com/photo-1715944476655-20a7d99ae687?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGF0ZSUyMHBhbG1zfGVufDB8fDB8fHww', title: 'Date Palm' },
//     { imageUrl: 'https://images.unsplash.com/photo-1509817775895-79efefb813d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29jb251dHxlbnwwfHwwfHx8MA%3D%3D', title: 'Coconut' },
//     { imageUrl: 'https://images.unsplash.com/photo-1602943543714-cf535b048440?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhJTIwbGVhdmVzfGVufDB8fDB8fHww', title: 'Tea' },
//     { imageUrl: 'https://plus.unsplash.com/premium_photo-1669205342640-aef28ff08cd8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxtb25kJTIwdHJlZXxlbnwwfHwwfHx8MA%3D%3D', title: 'Almond' },
//     { imageUrl: 'https://images.unsplash.com/photo-1501430654243-c934cec2e1c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdoZWF0fGVufDB8fDB8fHww', title: 'Wheat' },
//     { imageUrl: 'https://images.unsplash.com/photo-1511817354854-e361703ac368?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29ybnxlbnwwfHwwfHx8MA%3D%3D', title: 'Corn' },
//     { imageUrl: 'https://plus.unsplash.com/premium_photo-1675237625862-d982e7f44696?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvZmZlZXxlbnwwfHwwfHx8MA%3D%3D', title: 'Coffee' },

// ];

  return (
    <View style={styles.gridContainer}>
    {data.length > 0 ? (
      data.map((crop) => (
        <CropItem key={crop._id} img={crop.img} name={crop.name} />
      ))
    ) : (
      <View style={styles.empty}>
        <Text>No crops available</Text>
      </View>
    )}
  </View>
);
};

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PlantationGrid;
