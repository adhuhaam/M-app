import React from 'react';
import { StyleSheet, Dimensions, ScrollView,TouchableWithoutFeedback,TouchableOpacity} from 'react-native';
import { Block, theme } from 'galio-framework';


import { Card } from '../components';
const { width } = Dimensions.get('screen');
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRoute } from '@react-navigation/native';

// header for screens
import Header from "../components/Header";
import { Language } from '../constants'
import API from './../services/api'


class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        cityId:null,//this.props.navigation.state.params?this.props.navigation.state.params.cityId:null, //The city id
        cityName:"Skopje",//this.props.navigation.state.params?this.props.navigation.state.params.cityName:null,
        restaurants:[],
        allRestaurants:[],
        
    };
    this.getRestaurants = this.getRestaurants.bind(this);
   
  }

  componentDidMount(){
   this.getRestaurants();
   this.openDetails=this.openDetails.bind(this);
   this.props.navigation.doSearch=this._doSearch.bind(this)
  }

  _doSearch = (text) => {
    if(text.length==0){
      //Reset search
      this.setState({
        restaurants:this.state.allRestaurants
      })
    }else{
      //Do filter
      var list = JSON.parse(JSON.stringify(this.state.allRestaurants))
      var filteredList = list
      .filter(list => (list.name.toLowerCase().includes(text.toLowerCase()) || list.description.toLowerCase().includes(text.toLowerCase()) )  )

      this.setState({
        restaurants:filteredList
      })
    }
  };

  
  getRestaurants() {
     let _this=this
     var cityId=this.props&&this.props.route&&this.props.route.params&&this.props.route.params.cityId?this.props.route.params.cityId:null;
     API.getRestaurants(cityId,(restaurants)=>{
        _this.setState({
          restaurants:restaurants,
          allRestaurants:restaurants
        })
     })
  }

  openDetails(restaurant){
    this.props.navigation.navigate('Items', {itemId:restaurant.id, restoName:restaurant.name})
  }

  renderItems = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}>
        <Block flex>
          {
            this.state.restaurants.map((item)=>{
              return (
                <TouchableOpacity  key={item.id}  onPress={()=>{this.openDetails(item)}}>
                    <Card key={item.id} item={item} horizontal  />
                </TouchableOpacity>)
            })
          }
          
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderItems()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,    
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
});

export default Home;
