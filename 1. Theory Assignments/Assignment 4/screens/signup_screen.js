import { StyleSheet, ScrollView, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useState } from 'react';
import RadioForm from 'react-native-simple-radio-button';
import SocialBtn from '../components/socialButton';
import ToggleBtn from '../components/toggleBtn';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Signup({ navigation }) {
  const [name, setName] = useState(null);
  const [lname, setlName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  function onPressSetData() {
    if(name==null || lname==null || email==null || password==null ){
      alert("These fields cannot be null")
      return;
    }
    const user_information = {
      "name": name,
      "lname": lname,
      "email": email,
      "password": password,
    }
    AsyncStorage.setItem('userInformation', JSON.stringify(user_information));
    navigation.navigate("login");
  }

  return (
    <View>
      <ScrollView style={{ padding: 25, height: "70%" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Create an account</Text>
        <Text style={styles.label}>First Name</Text>
        <TextInput onChangeText={(v) => { setName(v) }} style={styles.input} placeholder='Enter your first name'></TextInput>
        <Text style={styles.label}>Last Name</Text>
        <TextInput onChangeText={(v) => { setlName(v) }} style={styles.input} placeholder='Enter your last name'></TextInput>
        <Text style={styles.label}>Email Address</Text>
        <TextInput onChangeText={(v) => { setEmail(v) }} style={styles.input} placeholder='Enter your Email Address'></TextInput>

        <Text style={styles.label}>Password</Text>
        <TextInput onChangeText={(v) => { setPassword(v) }} secureTextEntry={true} style={styles.input} placeholder='password'></TextInput>
        <Text style={styles.label}>Conform Password</Text>
        <TextInput secureTextEntry={true} style={styles.input} placeholder='Conform Password'></TextInput>

      </ScrollView>

      <View style={styles.bottomSheett}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text>By registering you are agree with our</Text>
            <Text style={{ color: "#1F7FE5", marginTop: 5 }}>Terms, Privacy, Policy</Text>
          </View>
          <ToggleBtn />
        </View>
        <View style={styles.horizontalLine}></View>
        {/* // 2 */}
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Text>Signup for early safe access plus</Text>
            <Text style={{ color: "gray", marginTop: 5 }}>tailored new arrivals and promotions</Text>
          </View>
          <ToggleBtn />
        </View>
        <View style={styles.horizontalLine}></View>
        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <SocialBtn color="#F1C0C0" imgPath={require("../images/google.png")}></SocialBtn>
          <SocialBtn color="#D5E8EF" imgPath={require("../images/facebook.png")}></SocialBtn>
          <SocialBtn color="black" imgPath={require("../images/apple.png")}></SocialBtn>
          <TouchableOpacity style={{ flex: 1 }} onPress={
              onPressSetData
          }>
            <View style={{ borderRadius: 10, backgroundColor: "#279CEB", flex: 1, justifyContent: "center", alignItems: "center" }}>
              <Text style={{ color: "white", fontSize: 18 }}>Signup</Text>
            </View>
            {/* onPress={()=>{}} */}
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  back: {
    marginTop: 60,
    paddingLeft: 10,
    paddingBottom: 10,
    borderColor: 'lightgray',
    borderBottomWidth: 1,
  },
  input: {
    height: 44,
    marginTop: 8,
    borderWidth: 1,
    padding: 12,
    borderColor: "lightgrey",
  },
  label: {
    marginTop: 10
  },
  bottomSheett: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.50,
    shadowRadius: 3.84,
    elevation: 5,
    backgroundColor: "white",
    height: "30%",
    padding: 10
  },
  horizontalLine: {
    borderBottomColor: 'lightgrey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: 10,
    marginTop: 10
  }
});