import {get} from '../../http/axios'
export default{
    namespaced:true,
    state:{
        productDetail:[]
    },
    mutations:{
        refreshProductDetail(state,productDetail){
            state.productDetail = productDetail
        }
    },
    actions:{
        async findProductById(context,params){
            let res = await get('/product/findByCategoryId',{id:params});
            context.commit('refreshProductDetail',res.data)
        }
    }
}