import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Language } from '../../constants'

// screens
import Orders from "./../../screens/Orders";
import OrderDetails from './../../screens/OrderDetails'


// header for screens
import Header from "../../components/Header";


const Stack = createStackNavigator();

export default function  OrdersStack(props) {
    return (
        <Stack.Navigator presentation="card" >
            <Stack.Screen
                name="Orders"
                component={Orders}
                options={{
                    headerMode:"screen",
                    header: ({ navigation, scene }) => (
                        <Header title={Language.orders} routeName={"Orders"}  navigation={navigation} scene={scene} />
                    ),
                    headerTransparent: false,
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }}
            />
            <Stack.Screen
                name="OrderDetails"
                component={OrderDetails}
                options={{
                    header: ({ navigation, scene }) => (
                        <Header back title={Language.orderDetails} routeName={"OrderDetails"}  navigation={navigation} scene={scene} />
                    ),
                    headerTransparent: false,
                    cardStyle: { backgroundColor: "#F8F9FE" }
                }}
            />
        </Stack.Navigator>
    )
}