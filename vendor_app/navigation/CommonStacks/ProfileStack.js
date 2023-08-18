import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Language } from '../../constants'

// screens
import Profile from "./../../screens/Profile";


// header for screens
import Header from "../../components/Header";


const Stack = createStackNavigator();

export default function  ProfileStack(props) {
    return (
        <Stack.Navigator presentation="card">
            <Stack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerMode:"screen",
                    header: ({ navigation, scene }) => (
                        <Header   white transparent title={Language.profile} routeName={"Profile"}  navigation={navigation} scene={scene} />
                    ),
                    headerTransparent: true,
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }}
            />
        </Stack.Navigator>
    )
}