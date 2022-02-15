import { makeAutoObservable } from "mobx";
import api from "./api";

class ShopStore {
  constructor() {
    makeAutoObservable(this);
  }
  shops = [];
  loading = true;

  fetchShops = async () => {
    try {
      const res = await api.get("/shops");
      console.log("🚀 ~ file: shopStores.js ~ line 13 ~ ShopStore ~ fetchShops= ~ res", res.data)
      this.shops = res.data;
      this.loading = false
    } catch (error) {
      console.log(
        "🚀 ~ file: shopStore.js ~ line 15 ~ ShopStore ~ fetchShops= ~ error",
        error
      );
    }
  };
}

const shopStore = new ShopStore();
shopStore.fetchShops();

export default shopStore;