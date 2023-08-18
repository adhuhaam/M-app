import React from 'react'
import { TouchableOpacity, View, StyleSheet, Platform } from 'react-native';
import { FancyAlert } from 'react-native-expo-fancy-alerts';
import { Language } from '../constants';
import { Ionicons } from '@expo/vector-icons';
import { Text } from 'galio-framework';

export default function Fancy(props) {
    return (
        <FancyAlert
              visible={props.visible}
              icon={
                <View style={{
                  flex: 1,
                  display: 'flex',
                  justify : 'center',
                  alignItems: 'center',
                  backgroundColor: props.color?props.color:'green',
                  borderRadius: 39,
                  width: '100%',
                  paddingTop:8,
                }}>
                  <Ionicons
                      name={Platform.select({ ios: props.icon_ios, android: props.icon_android })}
                      size={36}
                      color="#FFFFFF"
                  /></View> 
                }
                style={{ backgroundColor: 'white' }}
              >
              
              <View style={styles.content}>
              <Text bold style={styles.contentText}>{props.title}</Text>
              <Text style={styles.contentText}>{props.subtitle}</Text>

              <TouchableOpacity style={[styles.btn,styles.btn_cancel]} onPress={props.closeAction}>
                  <Text style={styles.btnTextCancel}>{Language.cancel}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btn} onPress={props.action}>
                  <Text style={styles.btnText}>{props.button}</Text>
                </TouchableOpacity>
              </View>
              
        
          </FancyAlert>
    )
}

const styles = StyleSheet.create({
    icon: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#C3272B',
      width: '100%',
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -16,
      marginBottom: 16,
    },
    contentText: {
      textAlign: 'center',
    },
    btn: {
      borderRadius: 32,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingVertical: 8,
      alignSelf: 'stretch',
      backgroundColor: '#4CB748',
      marginTop: 16,
      minWidth: '50%',
      paddingHorizontal: 16,
    },
    btn_cancel:{
        backgroundColor: '#eeeeee', 
    },
    btnwarning: {
      borderRadius: 32,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 8,
      paddingVertical: 8,
      alignSelf: 'stretch',
      backgroundColor: 'red',
      marginTop: 16,
      minWidth: '50%',
      paddingHorizontal: 16,
    },
    btnText: {
      color: '#FFFFFF',
    },
    btnTextCancel: {
        color: '#333333',
      }
});
