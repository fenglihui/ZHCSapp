<template>
    <picker @change="bindPickerChange" :value="index" :range=array class="style">
      <view class="picker">当前的选择是:{{array[index]}}</view>
    </picker>
</template>

<script>
  import store from '@/utils/store'
    export default {
      name: "select-area",
      data(){
        return{
          index:'',
          array: store.state.market
        }
      },
      methods:{
        bindPickerChange:function (e) {
          this.index=e.mp.detail.value
        }
      }
    }
</script>

<style scoped>
  .style{
    width: 100%;
    height: 50px;
    margin-top: 10px;
    line-height: 50px;
    background-color: #ffffff;
  }
</style>
