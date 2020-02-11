<template>
    <briup-fulllayout title="商品分类">
      <van-row>
        <van-col span="6">
          <!-- 左侧栏目导航栏 -->
          <van-sidebar v-model="activeKey">
            <van-sidebar-item v-for='item in categories' :key='item.id' :title="item.name" @click="switchProduct(item.id)" />
          </van-sidebar>
        </van-col>
        <!-- 右侧该栏目下的产品 -->
        <van-col span="18">
          <div class="productItem" v-for="item in productDetail" :key="item.id">
            <div class="productImg">
              <img v-if="item.photo" :src="item.photo" alt="">
              <img v-else src="../../../assets/service.png" alt="">
            </div>
            <div class="productDesc">
              <div>名称：{{item.name}}</div>
              <div>描述：{{item.description}}</div>
              <div>价格：￥{{item.price}}</div>
              <van-stepper v-model="value" />
            </div>
          </div>
        </van-col>
      </van-row>
      <!-- 总额 -->
      <div class="confirmDiv">
        <div>总额：￥</div>
        <div class="makeSureDiv">立即预约</div>
      </div>
    </briup-fulllayout>
</template>

<script>
import {mapState,mapActions} from 'vuex';
export default {
  data(){
    return {
      activeKey: this.$route.query.key,
      value:1
    }
  },
  computed:{
    ...mapState('home',['products','categories']),
    ...mapState('product',['productDetail'])
  },
  created(){
    this.findCategory()
    this.findProductById(this.$route.query.id)
  },
  methods:{
    ...mapActions('home',['findCategory']),
    ...mapActions('product',['findProductById']),
    // 左侧切换分类
    switchProduct(id){
      this.findProductById(id)
    }
  }
}
</script>

<style scoped>
  .productItem{
    margin: 1em;
    border: 1px solid #ccc;
    padding: 0.5em;
    border-radius: 5px;
  }
  .productImg img{
    width: 80px;
    margin-right: 10px;
  }
  .productDesc,.productImg{
    display: inline-block;
  }
  .confirmDiv div{
    display: inline-block;
  }
  .confirmDiv{
    position: fixed;
    bottom:0;
    height: 60px;
    background-color: #D9D9D9;
    width: 100%;
    line-height: 60px;
    padding-left: 1em;
  }
  .makeSureDiv{
    position: absolute;
    right: 2%;
    background-color: #B3B3B3;
    width: 100px;
    text-align: center;
  }
</style>