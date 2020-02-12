import {get} from '../../http/axios'
export default{
    namespaced:true,
    state:{
        orders:[]
    },
    mutations:{
        refreshOrder(state,orders){
            state.orders = orders
        }
    },
    actions:{
        async findOrder(context,params){
            let customerId = context.rootState.user.info.id
            
            let res = await get('/order/query',params)
            context.commit('refreshOrder',res.data)
        }
    }
}