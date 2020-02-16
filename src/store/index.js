import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import user from './modules/user'
import home from './modules/home'
import product from './modules/product'
import order from './modules/order'
import shopCar from "./modules/shopCar"
import address from './modules/address'

export default new Vuex.Store({
  modules:{
    user,
    home,
    product,
    order,
    shopCar,
    address
  }
})
