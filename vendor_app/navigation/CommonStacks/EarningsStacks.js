import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Language } from '../../constants'

// screens
import Earnings from "./../../screens/Earnings";


// header for screens
import Header from "../../components/Header";


const Stack = createStackNavigator();

export default function  ProfileStack(props) {
    return (
        <Stack.Navigator presentation="card" >
            <Stack.Screen
                name="Earnings"
                component={Earnings}
                options={{
                    headerMode:"screen",
                    header: ({ navigation, scene }) => (
                        <Header title={Language.earnings} routeName={"Earnings"}  navigation={navigation} scene={scene} />
                    ),
                    headerTransparent: false,
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }}
            />
        </Stack.Navigator>
    )
}