<template>
  <div class="home">
    <header class="header">
      <img src="../../assets/home.jpg" alt="">
    </header>
    <!-- 栏目信息 -->
    <van-grid :column-num="3">
      <van-grid-item
        v-for="(item,key) in categories"
        v-show="key<num"
        :key="item.id"
        :icon="item.icon"
        :text="item.name"
        @click="toProductDetail(item.id,key)"
      />
    </van-grid>
    <!-- 产品信息 -->
    <van-grid :column-num="3">
      <van-grid-item
        v-for="(item,key) in products"
        v-show="key<num"
        :key="item.id"
        :icon="item.photo"
        :text="item.name"
      />
    </van-grid>
    
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex';
export default {
  data(){
    return {
      num:6
    }
  },
  computed:{
    ...mapState('home',['products','categories'])
  },
  created(){
    this.findProduct(),
    this.findCategory()
  },
  methods:{
    ...mapActions('home',['findProduct','findCategory']),
    toProductDetail(id,key){
      // id为findProductById服务，key为activeKey服务
      this.$router.push({
        path:'/manager/order_list',
        query:{id,key}
      })
    }
  }
}
</script>


<style scoped>
.home {
  padding-bottom: 50px;
}
.header {
  height: 300px;
  overflow: hidden;
}
.header img {
  width: 100%;
}
</style>