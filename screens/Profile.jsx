import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import styles from './profile.style';
import { StatusBar } from 'expo-status-bar';
import { COLORS } from '../constants';
import {
  AntDesign,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';

const Profile = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [userLogin, setUserLogin] = useState(false);
  useEffect(() => {}, []);

  function logout() {
    Alert.alert('Logout', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Yes', onPress: () => setUserLogin(false) },
      // { defaultIndex: 1 },
    ]);
  }
  function clearCache() {
    Alert.alert(
      'Clear Cache',
      'Are you sure you want to delete saved data on your app?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'Clear', onPress: () => console.log('Clear Cache') },
        // { defaultIndex: 1 },
      ]
    );
  }
  function deleteAccount() {
    Alert.alert('Logout', 'Are you sure you want to delete your account?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'Delete', onPress: () => console.log('Delete account Pressed') },
    ]);
  }
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <StatusBar backgroundColor="transparent" />
        <View style={{ width: '100%' }}>
          <Image
            source={require('../assets/images/space.jpg')}
            style={styles.cover}
          />
        </View>
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/images/profile.jpeg')}
            style={styles.profile}
          />
          <Text style={styles.name}>
            {userLogin === true ? 'Ario' : 'Please Login Into your account'}
          </Text>
          {userLogin === false ? (
            <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <View style={styles.loginBtn}>
                <Text style={styles.loginBtnTxt}>L O G I N </Text>
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.loginBtn}>
              <Text style={styles.loginBtnTxt}>asffdsdfs@g.com</Text>
            </View>
          )}
          {userLogin === false ? (
            <View></View>
          ) : (
            <View style={styles.menuWrapper}>
              <TouchableOpacity onPress={() => {navigation.navigate("Favorite")}}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="heart-outline"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Favorites</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {navigation.navigate("Order")}}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="truck-delivery-outline"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Orders</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {navigation.navigate("Cart")}}>
                <View style={styles.menuItem(0.2)}>
                  <SimpleLineIcons
                    name="bag"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Cart</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => clearCache()}>
                <View style={styles.menuItem(0.2)}>
                  <MaterialCommunityIcons
                    name="cached"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Clear Cache</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteAccount()}>
                <View style={styles.menuItem(0.2)}>
                  <AntDesign
                    name="deleteuser"
                    size={24}
                    color={COLORS.primary}
                  />
                  <Text style={styles.menuText}>Delete Users</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => logout()}>
                <View style={styles.menuItem(0.2)}>
                  <AntDesign name="logout" size={24} color={COLORS.primary} />
                  <Text style={styles.menuText}>Log out</Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default Profile;
