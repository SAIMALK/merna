// ReportsPage.js
import React from 'react';
import { Text, StyleSheet, ScrollView } from 'react-native';

const Last = () => (
  <ScrollView contentContainerStyle={styles.page}>
    <Text style={styles.title}>Future Benefits of FarmIQ</Text>
    <Text style={styles.item}>➤ <Text style={styles.highlightedText}>Optimized Crop Yield:</Text> By analyzing collected data, FarmIQ will identify the most effective combinations of seeds, fertilizers, and pest control measures, leading to higher crop yields.</Text>
    <Text style={styles.item}>➤ <Text style={styles.highlightedText}>Cost Efficiency:</Text> The app will provide insights into the most cost-effective farming practices, helping farmers save money on inputs while maximizing output.</Text>
    <Text style={styles.item}>➤ <Text style={styles.highlightedText}>Personalized Recommendations:</Text> FarmIQ will offer tailored advice based on the specific conditions of each farm, ensuring optimal results for individual farmers.</Text>
    <Text style={styles.item}>➤ <Text style={styles.highlightedText}>Data-Driven Decisions:</Text> Farmers will make informed decisions based on empirical data, reducing guesswork in choosing the best farming practices.</Text>
    <Text style={styles.item}>➤ <Text style={styles.highlightedText}>Sustainable Farming Practices:</Text> By promoting efficient use of resources, FarmIQ will help farmers adopt more sustainable practices, reducing environmental impact.</Text>
    <Text style={styles.item}>➤ <Text style={styles.highlightedText}>Pest and Disease Management:</Text> The app will provide timely advice on pest and disease control based on historical data and current conditions, minimizing crop losses.</Text>
    <Text style={styles.item}>➤ <Text style={styles.highlightedText}>Improved Crop Planning:</Text> With access to detailed data, farmers can plan their crop cycles more effectively, choosing the best times for planting, fertilizing, and harvesting.</Text>
    <Text style={styles.item}>➤ <Text style={styles.highlightedText}>Community Insights:</Text> Farmers can share experiences and results within the FarmIQ community, creating a rich knowledge base that benefits all users.</Text>
    <Text style={styles.item}>➤ <Text style={styles.highlightedText}>Enhanced Market Value:</Text> By producing high-yield, high-quality crops, farmers can improve their market value and demand for their produce.</Text>
    <Text style={styles.item}>➤ <Text style={styles.highlightedText}>Predictive Analytics:</Text> FarmIQ will use machine learning algorithms to predict future trends and outcomes, helping farmers stay ahead of potential challenges and capitalize on opportunities.</Text>
    <Text style={styles.item}>{"                                                 "}</Text>
    <Text style={styles.item}>{"                                                 "}</Text>


  </ScrollView>
);

const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 100,
  },
  title: {
    fontSize: 24,
    marginTop: 10, // Adjust this value as needed

    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  item: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
    marginVertical: 8,
  },
  highlightedText: {
    fontWeight: 'bold',
    color: '#009900',
  },
});

export default Last;
