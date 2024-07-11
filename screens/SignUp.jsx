import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './signup.style';
import { BackBtn, Button } from '../components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants';

const validationSchema = Yup.object({
  password: Yup.string()
    .min(8, 'Password must be 8 at least characters')
    .required('Your password'),
  username: Yup.string().min(3, 'Provide valid username').required('Required'),
  email: Yup.string()
    .email('Provide valid email address')
    .required('Your email address'),
  location: Yup.string().min(3, 'Provide valid location').required('Required'),
});

const SignUp = ({ navigation }) => {
  const [loader, setLoader] = useState(false);
  const [obsecureText, setObsecureText] = useState(true);

  function inValidForm() {
    Alert.alert('Invalid Form', 'Please Provide all required fields', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Clear',
        onPress: () => {},
      },
      // { defaultIndex: 1 },
    ]);
  }
  return (
    <ScrollView>
      <SafeAreaView style={{ marginHorizontal: 20 }}>
        <View>
          <BackBtn onPress={() => navigation.goBack()} />
          <Image
            source={require('../assets/images/bk.png')}
            style={styles.cover}
          />
          <Text style={styles.title}>Unlimited Luxurious Furniture</Text>
          <Formik
            initialValues={{
              email: '',
              password: '',
              location: '',
              username: '',
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
              isValid,
              setFieldTouched,
            }) => (
              <View>
                <View style={styles.wrapperForm}>
                  <Text style={styles.label}>Username</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="face-man-profile"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      placeholder="Enter username"
                      onFocus={() => {
                        setFieldTouched('username');
                      }}
                      onBlur={() => {
                        setFieldTouched('username', '');
                      }}
                      value={values.username}
                      onChangeText={handleChange('username')}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.username && errors.username && (
                    <Text style={styles.errorMessage}>{errors.username}</Text>
                  )}
                </View>
                <View style={styles.wrapperForm}>
                  <Text style={styles.label}>Email</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.email ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="email-outline"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      placeholder="Enter email"
                      onFocus={() => {
                        setFieldTouched('email');
                      }}
                      onBlur={() => {
                        setFieldTouched('email', '');
                      }}
                      value={values.email}
                      onChangeText={handleChange('email')}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.email && errors.email && (
                    <Text style={styles.errorMessage}>{errors.email}</Text>
                  )}
                </View>
                <View style={styles.wrapperForm}>
                  <Text style={styles.label}>Location</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.location ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <Ionicons
                      name="location-outline"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      placeholder="Enter location"
                      onFocus={() => {
                        setFieldTouched('location');
                      }}
                      onBlur={() => {
                        setFieldTouched('location', '');
                      }}
                      value={values.location}
                      onChangeText={handleChange('location')}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                  </View>
                  {touched.location && errors.location && (
                    <Text style={styles.errorMessage}>{errors.location}</Text>
                  )}
                </View>
                <View style={styles.wrapperForm}>
                  <Text style={styles.label}>Password</Text>
                  <View
                    style={styles.inputWrapper(
                      touched.password ? COLORS.secondary : COLORS.offwhite
                    )}
                  >
                    <MaterialCommunityIcons
                      name="lock-outline"
                      size={20}
                      color={COLORS.gray}
                      style={styles.iconStyle}
                    />
                    <TextInput
                      secureTextEntry={obsecureText}
                      placeholder="Password"
                      onFocus={() => {
                        setFieldTouched('password');
                      }}
                      onBlur={() => {
                        setFieldTouched('password', '');
                      }}
                      value={values.password}
                      onChangeText={handleChange('password')}
                      autoCapitalize="none"
                      autoCorrect={false}
                      style={{ flex: 1 }}
                    />
                    <TouchableOpacity
                      onPress={() => {
                        setObsecureText(!obsecureText);
                      }}
                    >
                      <MaterialCommunityIcons
                        name={obsecureText ? 'eye-outline' : 'eye-off-outline'}
                        size={20}
                      />
                    </TouchableOpacity>
                  </View>
                  {touched.password && errors.password && (
                    <Text style={styles.errorMessage}>{errors.password}</Text>
                  )}
                </View>
                <Button
                  onPress={isValid ? handleSubmit : inValidForm}
                  title={'S I G N  U P'}
                  isValid={isValid}
                />
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default SignUp;
