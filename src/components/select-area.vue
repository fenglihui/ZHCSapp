<template>
    <picker @change="bindPickerChange" :value=index :range="array" class="style">
      <view :class="[isActive?'picker':'']">
        {{defaultValue}}
      </view>
    </picker>
</template>

<script>
  import marketData from '@/utils/market'
  import store from '@/utils/store'
    export default {
      name: "select-area",
      props:['market','title'],
      data(){
        return{
          index:0,
          array:[],
          defaultValue:this.title,
          isActive:true,
          loadMarket:[]
        }
      },
      watch:{
        market:function(newval,oldval){
          this.array=newval
        }
      },

      methods:{
        bindPickerChange:function (e) {
          this.index=e.mp.detail.value
          this.defaultValue=this.array[this.index]
          this.isActive=false
          let _this = this
          if (this.array[this.index]=="青羊区"){
            marketData.market1.map(function (item,index) {
              _this.loadMarket.push(item.desc)
            })
          }
          else if (this.array[this.index]=="武侯区"){
            marketData.market2.map(function (item,index) {
              _this.loadMarket.push(item.desc)
            })
          }
          else if (this.array[this.index]=="金牛区"){
            marketData.market3.map(function (item,index) {
              _this.loadMarket.push(item.desc)
            })
          }
          else if (this.array[this.index]=="锦江区"){
            marketData.market4.map(function (item,index) {
              _this.loadMarket.push(item.desc)
            })
          }
          else if (this.array[this.index]=="成华区"){
            marketData.market5.map(function (item,index) {
              _this.loadMarket.push(item.desc)
            })
          }
          else if (this.array[this.index]=="双流区"){
            marketData.market6.map(function (item,index) {
              _this.loadMarket.push(item.desc)
            })
          }
          else{
            _this.loadMarket=_this.array
          }
          store.commit('replace',this.loadMarket)
          this.$emit('option',this.array[this.index])
          this.loadMarket=[]
        }
      }
    }
</script>

<style scoped>
  .style{
    width: 100%;
    height: 100%;
  }
  .picker{
    color: #888888;
  }
</style>
