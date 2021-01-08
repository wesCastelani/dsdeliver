import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchProducts, saveOrder } from '../api';
import Footer from '../Footer/Footer';
import { checkIsSelected } from './helpers';
import OrderLocation from './OrderLocation';
import OrderSumary from './OrderSumary';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';

import './styles.css';
import { OrderLocationData, Product } from './types';

export default function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price;
  }, 0);

  useEffect(() => {
    fetchProducts()
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkIsSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(
        (item) => item.id !== product.id
      );
      setSelectedProducts(selected);
    } else {
      setSelectedProducts((previous) => [...previous, product]);
    }
  };

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds,
    };

    saveOrder(payload)
      .then((response) => {
        toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
        setSelectedProducts([]);
      })
      .catch(() => {
        toast.warning('Erro ao enviar pedido');
      });
  };

  return (
    <>
      <div className="container">
        <StepsHeader />
        <ProductsList
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrderLocation
          // prettier-ignore
          onChangeLocation={location => setOrderLocation(location)}
        />
        <OrderSumary
          onSubmit={handleSubmit}
          amount={selectedProducts.length}
          totalPrice={totalPrice}
        />
      </div>
      <Footer />
    </>
  );
}
