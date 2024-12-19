import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=+21658693946&text=olá"
      className="whatsapp-button"
      target="_blank"
      style={{ position: 'fixed', right: '15px', bottom: '15px', zIndex: 10 }}
    >
      <img
        src="https://i.ibb.co/VgSspjY/whatsapp-button.png"
        alt="botão whatsapp"
      />
    </a>
  );
};

export default WhatsAppButton;
