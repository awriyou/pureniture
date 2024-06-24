import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { styles } from './productdetails.style';
import {
  Ionicons,
  SimpleLineIcons,
  MaterialCommunityIcons,
  Fontisto,
} from '@expo/vector-icons';
import { COLORS, SIZES } from '../constants';

const ProductDetails = ({ navigation }) => {
  const [qty, setQty] = useState(1);

  function incrementQty() {
    setQty(qty + 1);
  }
  function decrementQty() {
    if (qty > 1) {
      setQty(qty - 1);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperRow}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back-circle" size={30} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons name="heart-outline" size={30} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        }}
      />
      <View style={styles.details}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Product</Text>
          <View style={styles.priceWrapper}>
            <Text style={styles.price}>Rp 3.000.000</Text>
          </View>
        </View>
        <View style={styles.ratingRow}>
          <View style={styles.rating}>
            {[1, 2, 3, 4, 5].map((index) => (
              <Ionicons key={index} name="star" size={24} color="gold" />
            ))}
            <Text style={styles.ratingText}> (4.9)</Text>
          </View>
          <View style={styles.rating}>
            <TouchableOpacity
              onPress={() => {
                incrementQty();
              }}
            >
              <SimpleLineIcons name="plus" size={20} />
            </TouchableOpacity>
            <Text style={styles.ratingText}> {qty} </Text>
            <TouchableOpacity
              onPress={() => {
                decrementQty();
              }}
            >
              <SimpleLineIcons name="minus" size={20} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.descriptionWrapper}>
          <Text style={styles.description}>Description</Text>
          <Text style={styles.descText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Interdum
            varius sit amet mattis vulputate enim nulla aliquet. Tellus cras
            adipiscing enim eu turpis egestas pretium aenean pharetra. Sed arcu
            non odio euismod lacinia at quis risus sed. Vitae congue mauris
            rhoncus aenean vel elit. Semper risus in hendrerit gravida. Netus et
            malesuada fames ac turpis. Cursus vitae congue mauris rhoncus aenean
            vel. Non pulvinar neque laoreet suspendisse interdum consectetur
            libero. Tortor id aliquet lectus proin. Eget magna fermentum iaculis
            eu. Interdum velit euismod in pellentesque. Ullamcorper dignissim
            cras tincidunt lobortis feugiat. Amet commodo nulla facilisi nullam
            vehicula ipsum a. In cursus turpis massa tincidunt dui. Dui ut
            ornare lectus sit amet est.
          </Text>
        </View>
        <View style={{ marginBottom: SIZES.small }}>
          <View style={styles.location}>
            <View style={{ flexDirection: 'row' }}>
              <Ionicons name="location-outline" size={20} />
              <Text> Jakarta </Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <MaterialCommunityIcons name="truck-delivery-outline" size={20} />
              <Text> Free delivery </Text>
            </View>
          </View>
        </View>
        <View style={styles.cartRow}>
          <TouchableOpacity onPress={() => {}} style={styles.cartBtn}>
            <Text style={styles.cartTitle}>BUY NOW</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.addCart}>
            <Fontisto name="shopping-bag" size={22} color={COLORS.lightWhite} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ProductDetails;
