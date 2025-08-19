import React from "react";
import { useTokenContext } from "@/contexts/TokenContext";

const TokenList = () => {
  const { tokens, removeToken } = useTokenContext();

  const handleRemoveToken = (id: number) => {
    removeToken(id);
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Liste des Tokens</h2>
      <table className="w-full border-collapse rounded-2xl shadow-md overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left p-3">Token</th>
            <th className="text-left p-3">Symbole</th>
            <th className="text-left p-3">Balance</th>
            <th className="text-left p-3">Prix (€)</th>
            <th className="text-left p-3">Valeur Totale</th>
            <th className="text-left p-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr key={token.id} className="border-t hover:bg-gray-50">
              <td className="p-3 font-medium">{token.name}</td>
              <td className="p-3 font-mono bg-gray-100 px-2 py-1 rounded">
                {token.symbol}
              </td>
              <td className="p-3">{token.balance.toFixed(6)}</td>
              <td className="p-3">€{token.price.toFixed(2)}</td>
              <td className="p-3 font-semibold">
                €{(token.balance * token.price).toFixed(2)}
              </td>
              <td className="p-3">
                <button
                  onClick={() => handleRemoveToken(token.id)}
                  className="text-red-600 hover:text-red-800 text-sm font-medium"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {tokens.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Aucun token disponible. Ajoutez-en un avec le formulaire ci-dessous.
        </div>
      )}
    </div>
  );
};

export default TokenList;
