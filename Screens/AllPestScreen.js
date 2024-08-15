import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet,Text, Image,TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ADDRESS } from '../constants';

const AllPestScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
        fetchingPests()
    }
   , [])

   const fetchingPests = async () => {
     try {
       const response = await fetch(`${ADDRESS}/api/pests`);
       const responseData = await response.json();
       setData(responseData.pests);
     } catch (error) {
       console.error("Error fetching Pests data:", error);
     } finally {
       setIsLoading(false);
     }
   };
   const goToPestDetails = (pestId) => {
    navigation.navigate("PestDetails", { pestId });
  };
   if (isLoading) {
     return <View style={styles.loading}><Text>Loading...</Text></View>;
   }


  return (
    <ScrollView style={styles.container}>
       <View style={styles.gridContainer}>
       {data.length > 0 ? (
        data.map((pest) => (
          <PestItem key={pest._id} imageUrl={pest.img} title={pest.name} pestId={pest._id} onPress={() => goToPestDetails(pest._id)} />
        ))
      ) : (
        <View style={styles.empty}>
          <Text>No Pests available</Text>
        </View>
      )}
      </View>
    </ScrollView>
  );
};

  //   const crops = [
  //     { imageUrl: 'https://media.gettyimages.com/id/1125607687/photo/farmer-spraying-pesticide.jpg?s=612x612&w=0&k=20&c=yNWwaXRChCpEou9Vx7BH_s4hJZN7H22N2hJsjmWR7yk=', title: 'Emactin' },
  //     { imageUrl: 'https://media.gettyimages.com/id/1272140080/photo/pesticide-application-spray-in-plant.jpg?s=612x612&w=0&k=20&c=uXObw237suWmfRgIuSAB5sGVeoXVDtYgYA2HXYwN1_o=', title: 'Lorsban' },
  //     { imageUrl: 'https://media.gettyimages.com/id/1290199650/photo/asian-farmer-wear-safety-clothes-with-protective-mask-spraying-organic-pesticides-on-tomato.jpg?s=612x612&w=0&k=20&c=dNgA5rwFvKBHvwcQupCYGDu0SMg-NzIOyNnEN-0ylEc=', title: 'Karate' },
  //     { imageUrl: 'https://media.gettyimages.com/id/1319657586/photo/tractor-spraying-pesticide-on-wheat-field-during-sunny-day.jpg?s=612x612&w=0&k=20&c=mYfhN7--gc6fTaxjwYOEOtRkPzXJzraYIdFgBKy9Erw=', title: 'Talstar' },
  //     { imageUrl: 'https://media.gettyimages.com/id/1467344809/photo/young-farmer-sprays-his-garden-of-fresh-lettuce-cabbage-and-parsley-against-pests.jpg?s=612x612&w=0&k=20&c=TOxrSbEYeYlmxqUi9iWs0eKlYTo4L4ga8U8YnX8EjLc=', title: 'Dursban' },
  //     { imageUrl: 'https://media.gettyimages.com/id/833284634/photo/crop-sprayer.jpg?s=612x612&w=0&k=20&c=vUauMNioP579mhBdvWKYUbDw1mzCle3GoU2JhTEwzk0=', title: 'Capture' },
  //     { imageUrl: 'https://media.gettyimages.com/id/958953510/photo/agricultural-worker-takes-care-of-his-estate.jpg?s=612x612&w=0&k=20&c=asNVXLUWqkGa5DKVFo9Z3WWoTu9Hj5DCUuIPbvcpPOQ=', title: 'Confidor' },
  //     { imageUrl: 'https://media.gettyimages.com/id/84423441/photo/tractor-in-field-spraying-crop.jpg?s=612x612&w=0&k=20&c=omZD0Cm79hrLIiRHBkkkbPIaCFrkGnswmnssw2zrd3k=', title: 'Gaucho' },
  //     { imageUrl: 'https://media.gettyimages.com/id/157187324/photo/spraying-on-field.jpg?s=612x612&w=0&k=20&c=6ECjp4CxJsYpncv2NiPDI4S7j5YmJNBCLvpMQrSZ78w=', title: 'Larvin' },
  //     { imageUrl: 'https://media.gettyimages.com/id/1445623974/photo/a-farmer-is-spraying-chemicals.jpg?s=612x612&w=0&k=20&c=STSJ_mANI3y8S1lnVvjxhPxV_56B1ik0SHZe8n8Wi58=', title: 'Tracer' },
  //     { imageUrl: 'https://media.gettyimages.com/id/1491871348/photo/farmer-spraying-chemical-or-fertilizer-on-tobacco-plants.jpg?s=612x612&w=0&k=20&c=IOSJ3tmkltSxErm8LDj37iPSLA8QLHH_nHdAPstabEY=', title: 'Cabal' },
  //     { imageUrl: 'https://media.gettyimages.com/id/1198432941/photo/young-farm-worker-spraying-tomatoes-in-polyethylene-tunnel.jpg?s=612x612&w=0&k=20&c=Zi1lShWYAKq0BETvwuYxjg2tvdrW7AjGeqTXAwDzGJQ=', title: 'Proclaim' },
  // ];


  const PestItem = ({ imageUrl, title,onPress }) => {
    const navigation = useNavigation();
    return (
      <TouchableOpacity style={styles.ItemContainer} onPress={onPress}>
        <Image source={{ uri: imageUrl }} style={styles.Image} />
        <Text style={styles.Title}>{title}</Text>
      </TouchableOpacity>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: "#f5f5f5",
  },
  ItemContainer: {
    width: '48%',  // Adjust width to fit two items per row
    alignItems: 'left',
    margin: '1%',  // Adjust margin to give some spacing
  },
  Image: {
    width: '100%',
    height: 100,
    borderRadius: 5,
  },
  Title: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AllPestScreen;
