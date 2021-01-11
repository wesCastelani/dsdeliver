import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import Header from '../header/Header';
import OrderCard from '../orderCard/OrderCard';

export default function Orders() {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <OrderCard />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { paddingRight: '5%', paddingLeft: '5%' },
});
