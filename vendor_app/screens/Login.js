import React, { useContext,useState, useRef,useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  KeyboardAvoidingView,
  Image,
  Linking
} from "react-native";
import { Block, Text } from "galio-framework";
import config from '../config';
import { Button, Icon, Input } from "../components";
import { Images, argonTheme, Language } from "../constants";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("screen");
import Toast from 'react-native-easy-toast'
import AuthContext from './../store/auth'
import * as Notifications from 'expo-notifications';
import * as Device from 'expo-device';

const getPushToken = () => {
  if (!Device.isDevice) {
      return Promise.reject('Must use physical device for Push Notifications');
  }

  try {
      return Notifications.getPermissionsAsync()
          .then((statusResult) => {
              return statusResult.status !== 'granted'
                  ? Notifications.requestPermissionsAsync()
                  : statusResult;
          })
          .then((statusResult) => {
              if (statusResult.status !== 'granted') {
                  throw 'Failed to get push token for push notification!';
              }
              return Notifications.getExpoPushTokenAsync();
          })
          .then((tokenData) => tokenData.data);
  } catch (error) {
      return Promise.reject("Couldn't check notifications permissions");
  }
};


const Login = ({navigation}) => {
 
  const toastok = useRef(null);
  const toasterror = useRef(null);

  const { signIn } = useContext(AuthContext);
  const [email, setEmail ] = useState("");
  const [password, setPassword ] = useState("");
  const [expoPushToken, setExpoPushToken] = useState("");

  useEffect(() => {
    getPushToken().then((pushToken) => {
        setExpoPushToken(pushToken);
    });
  },[]);

  return (
    <Block flex middle>
        <StatusBar hidden />
        <ImageBackground
          source={Images.RegisterBackground}
          style={{ width, height, zIndex: -1 }}>
          <Block flex middle>
            <Block style={styles.registerContainer}>
              
              <Block middle flex>
                <Block flex={0.25} middle style={{marginTop:100}}>
                  <Image source={{ uri:Images.RemoteLogo }} style={{width: (200),height: (config.LOGOHeight*(200/config.LOGOWidth))}}/>
                 
                 
                  <Text  size={17} color={argonTheme.COLORS.BLACK}>{Language.Restaurant} {Language.login}</Text>
                  
                  <Text muted></Text>
                </Block>
                <Block flex center>
                  <KeyboardAvoidingView
                    style={{ flex: 1 }}
                    behavior="padding"
                    enabled
                  >
                    
                    <Block width={width * 0.8} style={{ marginBottom: 15 }}>
                      <Input
                       value ={email}
                        borderless
                        onChangeText={text => setEmail(text)}
                        placeholder={"Email"}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="ic_mail_24px"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                    </Block>
                    
                   
                    <Block width={width * 0.8}>
                      <Input
                       value ={password}
                        password
                        borderles
                        placeholder={"Password"}
                        onChangeText={text => setPassword(text)}
                        iconContent={
                          <Icon
                            size={16}
                            color={argonTheme.COLORS.ICON}
                            name="padlock-unlocked"
                            family="ArgonExtra"
                            style={styles.inputIcons}
                          />
                        }
                      />
                      
                    </Block>








                    <Block row space="evenly" style={{marginVertical:10}} >
                      <Block>
                          <TouchableOpacity onPress={()=>  Linking.openURL(config.domain+"/password/reset").catch(err => console.error("Couldn't load page", err)) } >
                            <Text  size={17} color={argonTheme.COLORS.PRIMARY}>
                            {Language.forgotPassword}
                            </Text>
                          </TouchableOpacity>
                        </Block>
                      <Block style={{opacity:config.disableRegister?0:1}}>
                        <TouchableOpacity  onPress={config.disableRegister?null:()=> navigation.navigate('Register')} >
                          <Text  size={17} color={argonTheme.COLORS.PRIMARY}>
                            {Language.register}
                          </Text>
                        </TouchableOpacity>
                      </Block>
                      
                    </Block>

                    
                    
                    <Block middle>
                      <Button color="success" style={styles.createButton} onPress={()=> signIn({email:email,password:password,expoPushToken:expoPushToken,toastok:toastok,toasterror:toasterror})}>
                        <Text bold size={14} color={argonTheme.COLORS.WHITE}>
                        {Language.login}
                        </Text>
                      </Button>
                    </Block>
                    
                  </KeyboardAvoidingView>
                </Block>
              </Block>
                        
              
            
            </Block>
          </Block>
        </ImageBackground>
        <Toast ref={toastok} style={{backgroundColor:argonTheme.COLORS.SUCCESS}}/>
        <Toast ref={toasterror} style={{backgroundColor:argonTheme.COLORS.ERROR}}/>
      </Block>
  );
};

export default Login;


const styles = StyleSheet.create({
  registerContainer: {
    width: width * 0.9,
    height: height * 0.7,
    backgroundColor: "#F4F5F7",
    borderRadius: 4,
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1,
    overflow: "hidden"
  },
  socialConnect: {
    backgroundColor: argonTheme.COLORS.WHITE,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "#8898AA"
  },
  socialButtons: {
    width: 120,
    height: 40,
    backgroundColor: "#fff",
    shadowColor: argonTheme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 8,
    shadowOpacity: 0.1,
    elevation: 1
  },
  socialTextButtons: {
    color: argonTheme.COLORS.PRIMARY,
    fontWeight: "800",
    fontSize: 14
  },
  inputIcons: {
    marginRight: 12
  },
  passwordCheck: {
    paddingLeft: 15,
    paddingTop: 13,
    paddingBottom: 30
  },
  createButton: {
    width: width * 0.5,
    marginTop: 25
  }
});

