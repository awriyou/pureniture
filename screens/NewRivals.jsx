import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {Ionicons} from '@expo/vector-icons'
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./newrival.style";
import { COLORS } from "../constants";

const NewRivals = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.upperRow}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="chevron-back-circle" size={30} color={COLORS.lightWhite}/>
          </TouchableOpacity>
          <Text style={styles.heading}> Product </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NewRivals;

