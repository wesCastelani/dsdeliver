import React from 'react';
import { formatPrice } from './helpers';
import { Product } from './types';

type Props = {
  product: Product;
  onSelectProduct: (product: Product) => void;
  isSelected: boolean;
};

export default function ProductCard({
  product,
  onSelectProduct,
  isSelected,
}: Props) {
  return (
    <div
      className={`order-card-container ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelectProduct(product)}
    >
      <h3 className="order-card-title">{product.name}</h3>
      <img
        className="order-card-image"
        src={product.imageUri}
        alt={product.name}
      />
      <h3 className="order-card-price">{formatPrice(product.price)}</h3>
      <div className="order-card-description">
        <p>{product.description}</p>
      </div>
    </div>
  );
}
