import {get,post_json,post} from '../../http/axios'
export default {
  namespaced:true,
  state: {
    products:[],
    categories:[]
  },
  mutations: {
    refreshProduct(state,products){
        state.products = products
    },
    refreshCategory(state,categories){
      state.categories = categories
    }
  },
  actions: {
    // 产品信息
    async findProduct(context){
        let res = await get('/product/findAll')
        context.commit('refreshProduct',res.data)
    },
    // 栏目信息
    async findCategory(context){
      let res = await get('/category/findAll');
      context.commit('refreshCategory',res.data)
    }
  }
}