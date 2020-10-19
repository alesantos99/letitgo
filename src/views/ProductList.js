import React from 'react'
import {Text, View, FlatList,Image} from 'react-native'
import products from '../data/products'
import {ListItem} from 'react-native-elements'


export default props =>{
    //console.warn(Object.keys(props))
    function getProductItem({item:product}){
        return (
           <ListItem
                leftAvatar={{source: {uri:product.avatarUrl}}}
                key ={product.id}
                title ={product.name}
                subtitle= {product.price}
                bottomDivider
                onPress={()=>props.navigation.navigate('ProductForm')}
           />
               
        )
    }
    return(
        
      <View>
          <FlatList
            keyExtractor={product => product.id.toString()}
            data={products}
            renderItem={getProductItem}
          />

          
      </View>
    )
}