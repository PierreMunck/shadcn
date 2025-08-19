import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useTokenContext } from "@/contexts/TokenContext";

const TokenAdd = () => {
  const { addToken } = useTokenContext();
  const [formData, setFormData] = useState({
    name: "",
    symbol: "",
    balance: 0,
    price: 0
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.symbol) {
      addToken(formData);
      setFormData({ name: "", symbol: "", balance: 0, price: 0 });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'balance' || name === 'price' ? parseFloat(value) || 0 : value
    }));
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Ajouter un Token</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Nom</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Ex: Ethereum"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Symbole</label>
          <input
            type="text"
            name="symbol"
            value={formData.symbol}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Ex: ETH"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Balance</label>
          <input
            type="number"
            name="balance"
            value={formData.balance}
            onChange={handleChange}
            step="0.000001"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="0.0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Prix (€)</label>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            step="0.01"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="0.00"
          />
        </div>
        <Button type="submit" className="w-full">
          Ajouter Token
        </Button>
      </form>
    </div>
  );
};

export default TokenAdd;
