const { makeAutoObservable } = require("mobx");
import AsyncStorage from "@react-native-async-storage/async-storage";

class CartStore {
  constructor() {
    makeAutoObservable(this);
  }

  items = [];

  fetchCart = async () => {
    try {
      const cart = await AsyncStorage.getItem("myCart");
      this.items = cart ? JSON.parse(cart) : [];
    } catch (error) {
      console.log(
        "🚀 ~ file: cartStore.js ~ line 15 ~ CartStore ~ fetchCart=async ~ error",
        error
      );
    }
  };

  addItemToCart = async (newItem) => {
    const foundItem = this.items.find(
      (item) => item.product._id === newItem.product._id
    );
    if (foundItem) foundItem.quantity += newItem.quantity;
    else this.items.push(newItem);
    const stringfiedCart = JSON.stringify(this.items);
    await AsyncStorage.setItem("myCart", stringfiedCart);
  };
  removeItemFromCart = async (productId) => {
    try {
      this.items = this.items.filter((item) => item.product._id !== productId);
      const stringfiedCart = JSON.stringify(this.items);
      await AsyncStorage.setItem("myCart", stringfiedCart);
    } catch (error) {}
  };
  checkout = async () => {
    try {
      await AsyncStorage.removeItem("myCart");
      this.items = [];
    } catch (error) {
      console.log(
        "🚀 ~ file: cartStore.js ~ line 42 ~ CartStore ~ checkout=async ~ error",
        error
      );
    }
  };
}
const cartStore = new CartStore();
cartStore.fetchCart();
export default cartStore;
