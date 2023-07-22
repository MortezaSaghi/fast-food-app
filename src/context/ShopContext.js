import { createContext, useState } from "react";

//-------- import Data
import { getFoodData } from "../data/items";

//-------- Create Context ShopingList
export const ShopContext = createContext({
  shoppinglist: [],
  getProductQuantity: () => {},
  addShopToShoppinglist: () => {},
  removeFoodFromShoppinglist: () => {},
  deleteFromshoppinglist: () => {},
  getTotalAmount: () => {},
});

export function ShopProvider({ children }) {
  const [shoppinglist, setShoopinglist] = useState([]);

  //---------- Functions
  const getProductQuantity = (id) => {
    const quantity = shoppinglist.find((item) => item.id === id)?.quantity;
    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  };

  const addShopToShoppinglist = (id) => {
    const quantity = getProductQuantity(id);
    if (quantity === 0) {
      setShoopinglist([...shoppinglist, { id: id, quantity: 1 }]);
    } else {
      setShoopinglist(
        shoppinglist.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  };

  const deleteFromshoppinglist = (id) => {
    setShoopinglist(prestate => prestate.filter(item => item.id !== id));
  };

  const removeFoodFromShoppinglist = (id) => {
    const quantity = getProductQuantity(id);
    if (quantity === 1) {
      deleteFromshoppinglist(id);
    } else {
      setShoopinglist(
        shoppinglist.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  };

  const getTotalAmount = () => {
    let totalAmount = 0;
    shoppinglist.map((item) => {
      let foodData = getFoodData(item.id);
      totalAmount += item.quantity * foodData.price;
    });
    
    return totalAmount;
  };
  //---------- Provider Value
  const ContextValue = {
    shoppinglist,
    getProductQuantity,
    addShopToShoppinglist,
    removeFoodFromShoppinglist,
    deleteFromshoppinglist,
    getTotalAmount,
  };

  return (
    <ShopContext.Provider value={ContextValue}>{children}</ShopContext.Provider>
  );
}
