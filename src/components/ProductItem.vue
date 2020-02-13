<template>
  <div class="product_item" @click="$emit('click')">
    <van-row>
      <van-col :span="4">
        <img v-if="data.photo" :src="data.photo" alt="">
        <img v-else src="../assets/service.png" alt="">
      </van-col>
      <van-col :offset="1" :span="19">
        <div> <strong>名称：</strong> {{data.name}}</div>
        <div> <strong>描述：</strong> {{data.description}}</div>
        <div> <strong>价格：</strong> {{data.price}}</div>
        <div class="addDiv"> <van-stepper default-value='0' v-model="data.number" :min="0" @change="numberChangeHandler(data)"/> </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
  props:['data'],
  data(){
    return {
      
    }
  },
  methods:{
    ...mapMutations('shopCar',['addShopCar']),
    numberChangeHandler(val){
      // 封装订单保存所需要的参数
      let orderLine  = {
        productId:val.id,
        number:val.number,
        price:val.price
      }
      this.addShopCar(orderLine)
    }
  }
}
</script>
<style scoped>
.product_item {
  margin:.5em 1em;
  padding: .5em;
  border-radius: 5px;
  height: 90px;
  border: 1px dotted #ccc;
}

.product_item img {
  width: 100%;
  border-radius: 3px;
}

.addDiv{
  margin-left: 85px;
}

</style>