import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Alert, Text } from 'react-native';
import {
  RectButton,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Header from '../header/Header';
import OrderCard from '../orderCard/OrderCard';
import { fetchOrders } from '../api';
import { Order } from '../types';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import OrderDetails from '../orderDetails/OrderDetails';

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused();

  const navigation = useNavigation();

  const fetchData = () => {
    setIsLoading(true);
    fetchOrders()
      .then((res) => setOrders(res.data))
      .catch(() => Alert.alert('Ocorreu um erro ao buscar os pedidos!'))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (isFocused) {
      fetchData();
    }
  }, [isFocused]);

  const handleOnPress = (order: Order) => {
    navigation.navigate('OrderDetails', { order });
  };

  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        {isLoading ? (
          <Text>Buscando pedidos...</Text>
        ) : (
          orders.map((order) => (
            <TouchableWithoutFeedback
              onPress={() => handleOnPress(order)}
              key={order.id}
            >
              <OrderCard order={order} />
            </TouchableWithoutFeedback>
          ))
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: { paddingRight: '5%', paddingLeft: '5%' },
});
