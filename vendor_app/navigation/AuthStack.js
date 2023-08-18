import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Language } from './../constants'

// screens
import Login from "./../screens/Login";
import Register from "./../screens/Register";


// header for screens
import Header from "./../components/Header";


const Stack = createStackNavigator();

export default function  AuthStack(props) {
    return (
        <Stack.Navigator presentation="card" >
            <Stack.Screen
                name="Login"
                component={Login}
                options={{
                    headerMode:"screen",
                    header: ({ navigation, scene }) => (
                        <Header transparent white title={Language.login} routeName={"Login"}  navigation={navigation} scene={scene} />
                    ),
                    headerTransparent: true,
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }}
            />
            <Stack.Screen
                name="Register"
                component={Register}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header back transparent white title={Language.register} routeName={"Register"}  navigation={navigation} scene={scene} />
                    ),
                    headerTransparent: true,
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }}
            />
        </Stack.Navigator>
    )
}