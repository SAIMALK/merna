// MainScreen.js
import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import Step1 from './Step1';
import InstructionsPage from './InstructionsPage';
import Step1_1 from './Step1_1';
import Step2 from './Step2';
import Step2_1 from './Step2_1';
import Step3 from './Step3';
import Step4 from './Step4';
import Last from './Last';

const pages = [
  { component: InstructionsPage },
  { component: Step1 },
  { component: Step1_1 },
  { component: Step2 },
  { component: Step2_1 },
  { component: Step3 },
  { component: Step4 },
  { component: Last },
];

const MainScreen = ({ navigation }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    } else {
      navigation.navigate('Drawer');
    }
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <View style={styles.container}>
      <CurrentPageComponent />
      <View style={styles.buttonContainer}>
        <Button color="black" title="Prev" onPress={handlePrev} disabled={currentPage === 0} />
        <Button color="black" title={currentPage === pages.length - 1 ? "Get Started" : "Next"} onPress={handleNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    position: 'absolute',
    bottom: 30,
  },
});

export default MainScreen;
