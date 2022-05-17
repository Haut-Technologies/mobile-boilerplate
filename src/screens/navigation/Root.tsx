import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { enableScreens } from "react-native-screens";
import Home from "screens/Home";
import { RootParamList } from "screens/navigation/types";

enableScreens();

const Root = createStackNavigator<RootParamList>();

export default function Navigation(): JSX.Element {
  return (
    <NavigationContainer<RootParamList>>
      <Root.Navigator initialRouteName="Home">
        <Root.Screen name="Home" component={Home} />
      </Root.Navigator>
    </NavigationContainer>
  );
}
