import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Language } from '../../constants'

// screens
import Notifications from "./../../screens/Notifications";


// header for screens
import Header from "../../components/Header";


const Stack = createStackNavigator();

export default function  NotificationsStack(props) {
    
    return (
        <Stack.Navigator presentation="card" >
            <Stack.Screen
                name="Notifications"
                component={Notifications}
                options={{
                    headerMode:"screen",
                    header: ({ navigation, scene }) => (
                        <Header title={Language.notifications} routeName={"Notifications"}  navigation={navigation} scene={scene} />
                    ),
                    headerTransparent: false,
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }}
            />
        </Stack.Navigator>
    )
}