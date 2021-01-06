import React from 'react';

export default function StepsHeader() {
  return (
    <header className="orders-steps-container">
      <div className="orders-steps-content">
        <h1 className="steps-title">
          Siga as <br /> Etapas
        </h1>
        <ul className="steps-items">
          <li>
            <span className="steps-number">1</span>
            Seleciona os produtos e localização
          </li>
          <li>
            <span className="steps-number">2</span>
            Depois clique em <strong>"Enviar pedido"</strong>
          </li>
        </ul>
      </div>
    </header>
  );
}
