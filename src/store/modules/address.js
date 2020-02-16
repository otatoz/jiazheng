import {get} from '../../http/axios'
export default{
    namespaced:true,
    state:{
        addresses:{}
    },
    mutations:{
        refreshAddress(state,addresses){
            state.addresses = addresses
        }
    },
    actions:{
        async findAddress(context,params){
            let id = context.rootState.user.info.id
            params = {
                id:id
            }
            let res = await get('/address/findByCustomerId',params)
            context.commit('refreshAddress',res.data[0])
        }
    }
}