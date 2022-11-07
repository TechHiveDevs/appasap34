
import React from "react";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MyStatusBar from "../Components/MyStatusBar";
import SideDrawer from "../Components/Drawer/Side.drawer";
import TabNavigator from "./Tab.navigator";

// ==============================================================


import ListPageScreen from "../Entities/Page/List.page.screen";
import ShowPageScreen from "../Entities/Page/Show.page.screen";
import ListPostScreen from "../Entities/Post/List.post.screen";
import ShowPostScreen from "../Entities/Post/Show.post.screen";
import ListUserScreen from "../Entities/User/List.user.screen";
import ShowUserScreen from "../Entities/User/Show.user.screen";


// ==============================================================

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

// ==============================================================

const stackrops = {
  initialRouteName: "Tabs",
};

const screenOptions = {
  headerShown: true,
  header: (props: any) => <MyStatusBar {...props} />,
};

// ==============================================================

const StackTabNavigator = () => {
  return (
    <Stack.Navigator {...stackrops}>
      <Stack.Screen
        name="HomeTabNavigator"
        component={TabNavigator}
        options={screenOptions}
      />
      
        <Stack.Screen
            name="ListPageScreen"
            component={ListPageScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowPageScreen"
          component={ShowPageScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListPostScreen"
            component={ListPostScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowPostScreen"
          component={ShowPostScreen}
          options={screenOptions}
        />
        
        <Stack.Screen
            name="ListUserScreen"
            component={ListUserScreen}
            options={screenOptions}
          />
          <Stack.Screen
          name="ShowUserScreen"
          component={ShowUserScreen}
          options={screenOptions}
        />
        
    </Stack.Navigator>
  );
};

// ==============================================================

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="HomeStackTabNavigator"
      // @ts-ignore
      drawerStyle={{ width: wp(70) }}
      edgeWidth={15}
      screenOptions={{ swipeEnabled: true, headerShown: false }}
      drawerPosition="right"
      drawerContent={(props) => <SideDrawer {...props} />}
    >
      <Drawer.Screen
        name="HomeStackTabNavigator"
        component={StackTabNavigator}
      />
    </Drawer.Navigator>
  );
}
