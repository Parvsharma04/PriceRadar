import React from 'react';
import Card from './components/Card.jsx';

const App = () => {
  const phones = [
    {
      name: "iPhone 15",
      image: "https://example.com/iphone15.jpg",
      prices: [
        { platform: "Amazon", price: 999 },
        { platform: "Flipkart", price: 1020 },
        { platform: "Apple", price: 1099 },
        { platform: "BestBuy", price: 1050 }
      ]
    },
    {
      name: "Samsung Galaxy S23",
      image: "https://example.com/galaxyS23.jpg",
      prices: [
        { platform: "Amazon", price: 850 },
        { platform: "Flipkart", price: 880 },
        { platform: "Samsung", price: 899 },
        { platform: "BestBuy", price: 870 }
      ]
    }
  ];

  return (
    <div className="text-center p-8 font-sans">
      <h1 className="text-3xl font-bold mb-6">Smartphone Price Comparison</h1>
      <div className="flex justify-center flex-wrap gap-6">
        {phones.map((phone, index) => (
          <Card key={index} phone={phone} />
        ))}
      </div>
    </div>
  );
};

export default App;
