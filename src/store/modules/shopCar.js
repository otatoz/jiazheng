import _ from 'lodash'
export default {
    namespaced:true,
    state:{
        orderLine:new Map()
    },
    getters:{
        total(state){
            let result = 0;
            for(let orderLine of state.orderLine.values()){
                result = result + orderLine.price * orderLine.number;

                // 区分for of 与 for in
            }
            return result;
        }
    },
    mutations:{
        addShopCar(state,orderLine){
            // orderLine是一个集合，需要一个键值对(key,value)，如果set的时候只有一个值，那就只是键，值为undefined
            // 此处orderLine.productId做为键
            state.orderLine.set(orderLine.productId,orderLine);

            // 克隆对象，改变引用地址，为了让vue监听机制监听到orderLine对象发生变化
            //如果不克隆对象，添加产品后，总额将不会改变
            state.orderLine = _.clone(state.orderLine)
        }
    }
}