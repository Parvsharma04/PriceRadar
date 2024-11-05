import React from 'react';

const Card = ({ phone }) => {
  const sortedPrices = phone.prices
    .sort((a, b) => a.price - b.price)
    .slice(0, 3);

  return (
    <div className="border border-gray-200 rounded-lg p-4 w-64 shadow-md">
      <img
        src={phone.image}
        alt={phone.name}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{phone.name}</h3>

      <div className="space-y-2">
        {sortedPrices.map((platform, index) => (
          <div
            key={index}
            className={`flex justify-between items-center ${
              index === 0 ? 'text-green-500 font-bold' :
              index === 1 ? 'text-yellow-500' : 'text-red-500'
            }`}
          >
            <span>{platform.platform}:</span>
            <span>${platform.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
