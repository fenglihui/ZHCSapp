<template>
  <div class="flh-style" :style="{'min-height':minHeight + 'px'}">
    <i-row i-class="row-style" style="margin-top: 20px">
      <i-col span="24" i-class="title-style">请选择地区</i-col>
    </i-row>
    <i-row >
      <i-col span="7" i-class="col-f-font">
        地区
      </i-col>
      <i-col span="17" i-class="col-f-select">
        <select-area
          :market="area"
          title="请选择市场"
          @option="setOption1"></select-area>
      </i-col>
    </i-row>
    <i-row i-class="row-style" >
      <i-col span="24" i-class="title-style">请选择市场</i-col>
    </i-row>
    <i-row>
      <i-col span="7" i-class="col-f-font">
        市场
      </i-col>
      <i-col span="17" i-class="col-f-select">
        <select-area
          :market="market"
        title="请选择查询市场"
          @option="setOption2"></select-area>
      </i-col>
    </i-row>
    <i-row i-class="button-style">
      <i-col span="24" i-class="col-s">
        <i-button @click="handleClick" type="primary">确认</i-button>
      </i-col>
    </i-row>
  </div>
</template>

<script>
    import store from '../../utils/store'
    import SelectArea from "../../components/select-area";
    export default {
      name: "index",
      components:{SelectArea} ,
      data(){
        return{
          index:'',
          market:[],
          area:[],
          minHeight:store.state.minHeight,
          option:{
            area:'',
            market:''
          },
        }
      },
      mounted(){
        this.market=store.state.market
        this.area=store.state.area
      },
      computed:{
        count(){
          return store.state.market
        }
      },
      watch:{
        count:function (newval,oldval) {
          this.market=newval
        }
      },
      methods:{
        handleClick(){
          if (this.option.area!==''&&this.option.market!==''){
            const url = "../echarts/main?area=" + this.option.area + "&&market=" + this.option.market
            wx.navigateTo({url})
          }
          else{
            console.log("选项不能为空")
          }
        },
        setOption1(val){
          this.option.area=val
        },
        setOption2(val){
          this.option.market=val
        }
      }
    }
</script>

<style scoped>
  .flh-style{
    background-color: #f6f6f6;
  }
  >>> .button-style{
    margin-top: 30px;
  }
  >>> .row-style{

  }
  >>> .col-f-select{
    background-color: #ffffff;
    height: 45px;
    line-height: 45px;
  }
  >>> .col-f-font{
    padding-left: 20px;
    background-color: #ffffff;
    height: 45px;
    line-height: 45px;
  }
  >>> .title-style{
    text-align: left;
    color:#888888;
    padding:15px 0 8px 20px;
    font-size: 14px;
  }
</style>
