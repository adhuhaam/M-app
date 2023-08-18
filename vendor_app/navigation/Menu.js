import React from "react";
import { useSafeArea } from "react-native-safe-area-context";
import {
  ScrollView,
  StyleSheet,
  Image
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import appConfig from './../app.json'
import config from '../config';

import Images from "../constants/Images";
import { DrawerItem as DrawerCustomItem } from '../components';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

function CustomDrawerContent({ drawerPosition, navigation, profile, focused, screens, state, ...rest }) {
  const insets = useSafeArea();
  
  return (
    <Block
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <Block flex={0.06} style={styles.header}>
      <Image source={{ uri:Images.RemoteLogo }} style={{width: (195),height: (config.LOGOHeight*(195/config.LOGOWidth))}}/>
      </Block>
      <Block flex style={{ paddingLeft: 8, paddingRight: 14 }}>
        
        <DrawerContentScrollView  {...rest} style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
              {screens.map((item, index) => {
                    return (
                      <DrawerCustomItem 
                              key={index}
                              title={item.title}
                              screen={item.link}
                              focused={false}
                              onPress={() => {navigation.navigate(item.link)}}
                          />
                    )
              }
              )}
            

            <Block flex style={{ marginTop: 24, marginVertical: 8, paddingHorizontal: 8 }}>
              <Block style={{ borderColor: "rgba(0,0,0,0.2)", width: '100%', borderWidth: StyleSheet.hairlineWidth }}/>
              <Text muted color="#8898AA" style={{ marginTop: 16, marginLeft: 8 }}>v{appConfig.expo.version}</Text>
            
            </Block>
            
        </DrawerContentScrollView>
      </Block>
    </Block>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 28,
    paddingBottom: theme.SIZES.BASE,
    paddingTop: theme.SIZES.BASE * 3,
    justifyContent: 'center',
    marginTop:50,
  },
  logo:{
    width:487/2.5,
    height:144/2.5
  }
});

export default CustomDrawerContent;