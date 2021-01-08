import React from 'react';
import { formatPrice } from './helpers';

type Props = { amount: number; totalPrice: number; onSubmit: () => void };

export default function OrderSumary({ amount, totalPrice, onSubmit }: Props) {
  return (
    <div className="order-summary-container">
      <div className="order-summary-content">
        <div>
          <span className="amount-selected-container">
            <strong className="amount-selected">{amount}</strong>
            Pedidos selecionados
          </span>
          <span className="order-summary-total">
            <strong className="amount-selected">
              {formatPrice(totalPrice)}
            </strong>
            Valor total
          </span>
        </div>
        <button onClick={onSubmit} className="order-summary-make-order">
          Finalizar pedido
        </button>
      </div>
    </div>
  );
}
