<template>
  <div class="order">
    <van-nav-bar title="我的订单" />
    <van-tabs v-model="active" color="#1659a0">
      <van-tab title="全部">
      </van-tab>
      <van-tab title="待派单">
      </van-tab>
      <van-tab title="待接单">
      </van-tab> 
      <van-tab title="已完成">
      </van-tab>
    </van-tabs>
    {{orders}}
    <!-- <briup-order-item :data="orders"> -->
    <!-- </briup-order-item> -->
  </div>
</template>
<script>
import {mapActions,mapState} from 'vuex'
export default {
  data(){
    return {
      active:0,
      form:{}
    }
  },
  computed:{
    ...mapState('order',['orders'])
  },
  created(){
    this.findOrder()
  },
  methods:{
    ...mapActions('order',['findOrder'])
  }
}
</script>
<style scoped>
.order {
  background: #f1f1f1;
}
</style>