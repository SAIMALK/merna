import 'react-native-gesture-handler';
import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from "./Screens/HomeScreen";
import AllCropsScreen from "./Screens/AllCropScreen";
import CropDetails from './Screens/CropDetails';
import FertilizerDetailsScreen from './Screens/FertilizerDetailsScreen';
import AllFertilizerScreen from './Screens/AllFertilizerScreen.js';
import AllPestScreen from './Screens/AllPestScreen.js';
import SelectPlanScreen from './Screens/SelectPlanScreen.js';
import SeedDetails from './Screens/SeedDetails.js';
import WeatherScreen from './Screens/WeatherScreen.js';
import FarmIQTabs from './Components/FarmIQTabs.js';
import PestDetailsScreen from './Screens/PestDetailsScreen.js';
import SelectedPlansScreen from './Screens/SelectedPlansScreen.js';
import ProgressDetailsScreen from './Screens/ProgressDetailsScreen.js';
import ExpenseCalculator from './Screens/ExpenseCalculator.js';
import LoginScreen from './Screens/LoginScreen.js';
import RegisterScreen from './Screens/RegisterScreen.js';
import MainScreenDrawer from './Screens/AboutScreens/MainScreenDrawer.js';
import MainScreen from './Screens/AboutScreens/MainScreen.js';
import LogoutScreen from './Screens/LogoutScreen.js';
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



const MyDrawer = () => (
  <Drawer.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: '#009900' },
    headerTintColor: '#fff',
    sceneContainerStyle: { backgroundColor: '#fff' },
    drawerContentStyle: { backgroundColor: '#009900'},
    drawerActiveTintColor: '#009900',
    drawerInactiveTintColor: '#fff',
    drawerActiveBackgroundColor: '#fff',
  }}
>

  {/* <Drawer.Screen
    name="Home"
    component={HomeScreen}
    options={{
      title: 'Farm IQ',
      drawerIcon: ({ color, size }) =>( <Icon name='home' color={color} size={size} /> ),
    }}
  /> */}
  <Drawer.Screen
      name="FarmIQTabs"
      component={FarmIQTabs}
      options={{
        title: 'Farm IQ',
        drawerIcon: ({ color, size }) => <Icon name='home' color={color} size={size} />,
      }}
    />
    
  <Drawer.Screen
    name="Crops"
    component={AllCropsScreen}
    options={{
      title: 'All Crops',
      drawerIcon: ({ color, size }) =>( <Icon name='eco' color={color} size={size} /> ),

    }}
  />
  <Drawer.Screen
    name="AllFertilizers"
    component={AllFertilizerScreen}
    options={{
      title: 'All Fertilizers',
      drawerIcon: ({ color, size }) =>( <Icon name='spa' color={color} size={size} /> ),

    }}
  />
   <Drawer.Screen
    name="AllPests"
    component={AllPestScreen}
    options={{
      title: 'All Pests',
      drawerIcon: ({ color, size }) =>( <Icon name='landscape' color={color} size={size} /> ),

    }}
  />

<Drawer.Screen
    name="Weather"
    component={WeatherScreen}
    options={{
      title: 'Weather Updates',
      drawerIcon: ({ color, size }) =>( <Icon name='cloud' color={color} size={size} /> ),

    }}
  />
  <Drawer.Screen
    name="SelectedPlans"
    component={SelectedPlansScreen}
    options={{
      title: 'Selected Plans',
      drawerIcon: ({ color, size }) =>( <Icon name='assignment' color={color} size={size} /> ),
    }}
  />
  <Drawer.Screen name="Main" component={MainScreen} options={{
              title: 'About Farm IQ',
      drawerIcon: ({ color, size }) =>( <Icon name='info' color={color} size={size} /> ),
            }}
            />
            <Drawer.Screen name="Logout" component={LogoutScreen} options={{
              title: 'Logout',
      drawerIcon: ({ color, size }) =>( <Icon name='logout' color={color} size={size} /> ),
            }}
            />
</Drawer.Navigator>
);

  

const App = () => (
  <Provider store={store}>

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: '#009900' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#fff' },
          }} >
           
          <Stack.Screen name="Login" component={LoginScreen} options={{
              headerShown: false,
            }}/>
            <Stack.Screen name="Register" component={RegisterScreen} options={{
              headerShown: false,
            }}/>
           <Stack.Screen
            name="Drawer"
            component={MyDrawer}
            options={{
              headerShown: false,
            }}
          />
           <Stack.Screen name="Main" component={MainScreenDrawer} options={{
              headerShown: false,
            }}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AllCrops" component={AllCropsScreen} options={{
              title: 'All Crops Overview',
            }} />
        <Stack.Screen name="CropDetails" component={CropDetails} options={{
              title: 'Crop Details ',
            }}/>
        <Stack.Screen name="SeedDetails" component={SeedDetails} options={{
              title: 'Seed Details ',
            }}/>
        <Stack.Screen name="FertilizerDetails" component={FertilizerDetailsScreen} options={{
              title: 'Fertilizer Details ',
            }}/>
            <Stack.Screen name="PestDetails" component={PestDetailsScreen} options={{
              title: 'Pest Details ',
            }}/>
            <Stack.Screen name="AllPestScreen" component={AllPestScreen} options={{
              title: 'All Pests',
            }}/>
            <Stack.Screen name="AllFertilizerScreen" component={AllFertilizerScreen} options={{
              title: 'All Fertilizers',
            }}/>
        <Stack.Screen name="SelectPlan" component={SelectPlanScreen} options={{
              title: 'Select Your Plan ',
            }}/>
            <Stack.Screen name="SelectedPlansScreen" component={SelectedPlansScreen} options={{
              title: 'Selected Plans ',
            }}/>
        <Stack.Screen name="Progress" component={ProgressDetailsScreen} options={{
              title: 'Your Current Progress ',
            }}/>
        <Stack.Screen name="ExpenseCalculator" component={ExpenseCalculator} options={{
              title: 'ExpenseCalculator ',
            }}/>
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>
);

export default App;
