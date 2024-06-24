import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import styles from './productcardview.style';
import { useNavigation } from '@react-navigation/native';

import { Ionicons } from "@expo/vector-icons"
import { COLORS } from '../../constants';

const ProductCardView = () => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate("ProductDetails")}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
          />
        </View>
        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>
            Sofa Ijo
          </Text>
          <Text style={styles.supplier} numberOfLines={1}>
            Sofa ijo
          </Text>
          <Text style={styles.price} numberOfLines={1}>
            Rp. 3.000.000
          </Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name='add-circle' size={35} color={COLORS.primary}/>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;

// 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// 'https://plus.unsplash.com/premium_photo-1673548917423-073963e7afc9?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
// 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
