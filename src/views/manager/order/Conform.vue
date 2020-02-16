<template>
  <briup-fulllayout title="订单确认">
    <div class="confirm_order">
      <!-- 服务地址 -->
      <van-row class="line">
        <van-col :span="6" class="line-left">
          <van-icon name="location-o" />
        </van-col>
        <van-col :span="18" class="line-right">
          <div class="label">服务地址</div>
          <div>
            <van-col :span=10>姓名：{{info.name}}</van-col>
            <van-col :span=16>手机号：{{addresses.telephone}}</van-col>
            <van-col>地址：
                {{addresses.province}} 
                {{addresses.city}} 
                {{addresses.area}} 
                {{addresses.address}}
            </van-col> 
          </div>
        </van-col>
      </van-row>
      <!-- 订单详情 -->
      <van-row class="line">
        <van-col :span="6" class="line-left">
          <van-icon name="balance-list-o" />
        </van-col>
        <van-col :span="18" class="line-right">
          <div class="label">订单详情</div>
          <div>
            <van-row v-for="line of orderLine.values()" :key="line.productId" class="detailDiv">
              <van-col :span="12">名称：{{line.name}}</van-col>
              <van-col :span="10">单价：￥{{line.price}}</van-col>
              <van-col :span="12">数量：x{{line.number}}</van-col>
              <van-col :span="10">小计：￥{{line.number*line.price}}</van-col>
            </van-row>
            <van-row style="border-top:1px dotted #ededed">
              <van-col :span="16"></van-col>
              <van-col :span="8">总计：￥{{total}}</van-col>
            </van-row>
          </div>
        </van-col>
      </van-row>
      <!-- 下单按钮 -->
      <div style="position:fixed;bottom:0;width:100%" >
        <van-button  type="info" size="large" @click="confirmOrderHandler">确认订单</van-button>
      </div>
    </div>
  </briup-fulllayout>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex';
export default{
    data(){
        return {
        
        }
    },
    computed:{
        ...mapState('shopCar',['orderLine']),
        ...mapState('address',['addresses']),
        ...mapGetters('shopCar',['total']),
        ...mapState('user',['info'])
    },
    created(){
      this.findAddress()
    },
    methods:{
        ...mapActions('address',['findAddress']),
        ...mapActions('order',['saveOrder']),
        // 确认订单
        confirmOrderHandler(){
          let obj = {
            orderLines:Array.from(this.orderLine.values()),
            addressId:this.addresses[0].id,
            customerId:this.info.id
          }
          this.saveOrder(obj)
          this.$router.push({
            path:'order'
          })
        }
    }
}
</script>

<style scoped>
.line  .line-left {
  padding: 1.5em 0;
  text-align: center;
  font-size: 24px;
}
.line  .line-right {
  padding: 1em 0;
  border-bottom: 1px solid #ccc;
}
.line  .line-right > .label {
  font-size: 12px;
  font-weight: bold;
  color: #999;
  line-height: 2em;
}
.detailDiv{
  margin-bottom:15px;
}
</style>