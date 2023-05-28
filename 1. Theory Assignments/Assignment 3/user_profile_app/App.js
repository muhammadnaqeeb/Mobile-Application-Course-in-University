import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome } from "@expo/vector-icons"
import Signup from './screens/signup_screen';
import Login from './screens/login_screen';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './screens/profile_screen';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

function TabFunc(){
  return(
    <Tab.Navigator>
        <Tab.Screen name="login" component={Login} />
        <Tab.Screen name="signup" component={Signup} />
      </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.back}>
      </View>
      <Stack.Navigator>
        <Stack.Screen name='tabb' options={{headerShown:false}} component={TabFunc}/>
        <Stack.Screen name='profile' component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  back: {
    marginTop: 25,
    paddingLeft: 10,
    paddingBottom: 10,
    borderColor: 'lightgray',
    borderBottomWidth: 1,
  },
});
