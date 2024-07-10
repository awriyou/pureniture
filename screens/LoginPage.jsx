import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./loginpage.style";
import { BackBtn, Button } from "../components";

const LoginPage = ({navigation}) => {
  const [loader, setLoader] = useState(false)
  const [responseData, setResponseData] = useState(null)
  const [error, setError] = useState({})
  const [input, setInput] = useState({
    email: '',
    password: ''
  })

  return (
    <ScrollView>
      <SafeAreaView style={{ marginHorizontal: 20 }} >
        <View>
          <BackBtn onPress={() => navigation.goBack()}/>
          <Image 
            source={require('../assets/images/bk.png')}
            style={styles.cover}
          />
          <Text style={styles.title}>Unlimited Luxurious Furniture</Text>

          

          <Button onPress={() => {}} title={"L O G I N"}/>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default LoginPage;
