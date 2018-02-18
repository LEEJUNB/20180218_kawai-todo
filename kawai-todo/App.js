import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  StatusBar, 
  Dimensions,
  Platform
} from 'react-native';

//text의 높이와 깊이를 넣어야 하기에 const, Dimension을 이용한다.
const { height, width } = Dimensions.get("window");

//      <View style={styles.card}> 은 기본적으로 높이가 있어야 한다.
export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Text style={styles.title}>Kawai To Do</Text>
        <View style={styles.card}>
          <TextInput style={styles.input} placeholder={"New To Do"} />       
        </View>  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F23657',
    alignItems: 'center',
  },
  title: {
    color : "white",
    fontSize: 30,
    marginTop : 50,
    fontWeight : "200",
    marginBottom: 30
  },

  card: {
    backgroundColor : "white",
    flex : 1,
    width : width - 25,
    //borderRadius : 10
    borderTopLeftRadius : 10,
    borderTopRightRadius : 10,
    //IOS에서는 ShadowRadious : ** 라고 입력해야한다. 안드르이드에서는(elevation)을 사용.
    ...Platform.select ({
      ios : {
        shadowColor :"rgb(50, 50, 50)",
        shadowOpacity : 0.5,
        shadowRadius : 5, 
        shadowOffset : { 
          hegith : -1,
          width : 0
        }
      },
      android : {
        elevation : 3
      }
    })
  }
});
