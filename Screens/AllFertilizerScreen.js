import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet,Text, Image,TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AllFertilizerScreen = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
        fetchingFertilizers()
    }
   , [])
 
   const fetchingFertilizers = async () => {
     try {
       const response = await fetch('http://192.168.1.2:5000/api/fertilizers');
       const responseData = await response.json();
       setData(responseData.fertilizers);
     } catch (error) {
       console.error("Error fetching Fertilizers data:", error);
     } finally {
       setIsLoading(false);
     }
   };
   const goToFertilizerDetails = (fertilizerId) => {
    navigation.navigate("FertilizerDetails", { fertilizerId });
  };
   if (isLoading) {
     return <View style={styles.loading}><Text>Loading...</Text></View>;
   }


  return (
    <ScrollView style={styles.container}>
       <View style={styles.gridContainer}>
       {data.length > 0 ? (
        data.map((fertilizer) => (
          <FertilizerItem key={fertilizer._id} imageUrl={fertilizer.img} title={fertilizer.name} fertilizerId={fertilizer._id}
          onPress={() => goToFertilizerDetails(fertilizer._id)}/>
        ))
      ) : (
        <View style={styles.empty}>
          <Text>No Fertilizers available</Text>
        </View>
      )}
      </View>
    </ScrollView>
  );
};

    // const s = [
    //   { imageUrl: 'https://media.istockphoto.com/id/1372946919/photo/chemical-fertilizer.jpg?s=612x612&w=0&k=20&c=x18we3x5SKahElE76FbIoaKD-wuSCe1qRo4-8pnDNZA=', title: 'TSP' },
    //   { imageUrl: 'https://media.istockphoto.com/id/1340516865/photo/opened-plastic-bag-with-black-granules-of-chicken-manure-on-dark-soil-background-closeup.jpg?s=612x612&w=0&k=20&c=o00BGwgUkyLeTf1i0jNfbTpw7DlBEbBOG8lF309PcFk=', title: 'UREA' },
    //   { imageUrl: 'https://media.istockphoto.com/id/1319576107/photo/young-adult-woman-hands-holding-opened-plastic-bag-with-gray-complex-fertiliser-granules-on.jpg?s=612x612&w=0&k=20&c=1MJS2Zk_3OiT6X9DJySAurA3iFrsXylHSh5_NW62gqY=', title: 'DAP' },
    //   { imageUrl: 'https://media.istockphoto.com/id/1328836451/photo/opened-plastic-bag-with-green-complex-fertiliser-granules-on-dark-soil-background-closeup.jpg?s=612x612&w=0&k=20&c=igUvKeBPND1RKHx6uLMCQZAF48QU038nZbCbzJ7pBRo=', title: 'NPK' },
    //   { imageUrl: 'https://media.istockphoto.com/id/136349695/photo/bagged-fertilizer.jpg?s=612x612&w=0&k=20&c=khUx5GLShkBiourmuORq0VXLVBAPUHqyu_IzQr0RvKw=', title: 'CAN' },
    //   { imageUrl: 'https://media.istockphoto.com/id/1175171754/photo/fertilizer-and-working-gloves-on-the-grass.jpg?s=612x612&w=0&k=20&c=J8rBNsAC3LwSG8F3UppIyHiFUS8Uc_czVVup_BhTxYM=', title: 'NP' },
    //   { imageUrl: 'https://media.istockphoto.com/id/1461682590/photo/person-in-gloves-taking-pellets-of-ammonium-nitrate-from-bag-closeup-mineral-fertilizer.jpg?s=612x612&w=0&k=20&c=jMlACF_tCq5wnMNk4LPdEsErla7j2sj2r-0DdqCKGSs=', title: 'MAP' },
    //   { imageUrl: 'https://media.istockphoto.com/id/1400234628/photo/close-up-view-of-paper-bag-with-fertilizer-on-green-grass.jpg?s=612x612&w=0&k=20&c=UhXfer1_SIjvduQg-TN33pMQrDhKk1fxb_j2wF398Wg=', title: 'MOP' },
    //   { imageUrl: 'https://media.istockphoto.com/id/1340516865/photo/opened-plastic-bag-with-black-granules-of-chicken-manure-on-dark-soil-background-closeup.jpg?s=612x612&w=0&k=20&c=o00BGwgUkyLeTf1i0jNfbTpw7DlBEbBOG8lF309PcFk=', title: 'UREA' },
    //   { imageUrl: 'https://media.istockphoto.com/id/1319576107/photo/young-adult-woman-hands-holding-opened-plastic-bag-with-gray-complex-fertiliser-granules-on.jpg?s=612x612&w=0&k=20&c=1MJS2Zk_3OiT6X9DJySAurA3iFrsXylHSh5_NW62gqY=', title: 'DAP' },
    //   { imageUrl: 'https://media.istockphoto.com/id/1328836451/photo/opened-plastic-bag-with-green-complex-fertiliser-granules-on-dark-soil-background-closeup.jpg?s=612x612&w=0&k=20&c=igUvKeBPND1RKHx6uLMCQZAF48QU038nZbCbzJ7pBRo=', title: 'NPK' },
    //   { imageUrl: 'https://media.istockphoto.com/id/1461682590/photo/person-in-gloves-taking-pellets-of-ammonium-nitrate-from-bag-closeup-mineral-fertilizer.jpg?s=612x612&w=0&k=20&c=jMlACF_tCq5wnMNk4LPdEsErla7j2sj2r-0DdqCKGSs=', title: 'MAP' },

    // ];

  const FertilizerItem = ({ imageUrl, title, onPress }) => {
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
    backgroundColor: "#fff",
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
    color:'#000',
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

export default AllFertilizerScreen;
