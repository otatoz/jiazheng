<template>
  <div class="product_item" @click="$emit('click')">
    <van-row>
      <van-col span="6">
        <!-- <img v-if="data" :src="data" alt=""> -->
        <!-- <img v-else src="../assets/service.png" alt=""> -->
      </van-col>
      <van-col :offset="1" span="14">
        <div> <strong>名称：</strong> {{data}}</div>
        <div> <strong>描述：</strong> {{data}}</div>
        <div> <strong>价格：</strong> ￥{{data}}</div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
export default {
  props:['data'],
  data(){
    return {
      value:0
    }
  },
  methods:{
    
  }
}
</script>
<style scoped>
.product_item {
  width: 150%;
  margin:.5em 1em;
  padding: .5em;
  border-radius: 5px;
  height: 80px;
  border: 1px dotted #ccc;
}

.product_item img {
  width: 100%;
  border-radius: 3px;
}

</style>