<template>
  <div class="container" :style="{'min-height':minHeight + 'px'}">
    <div class="title">{{name}}数据展示</div>
    <div class="wrap">
      <mpvue-echarts :echarts="echarts" :onInit="handleInit" />
    </div>
  </div>
</template>

<script>
  import store from '../../utils/store'
  import echarts from 'echarts/dist/echarts.min'
  import mpvueEcharts from 'mpvue-echarts'
  let chart = null
  export default {
    data () {
      return {
        echarts,
        minHeight:store.state.minHeight,
        area:'',
        market:'',
        name:'',
        option:null,
        titleData:'种类统计图',
        kind:[],
        count:[]
      }
    },
    components: {
      mpvueEcharts
    },
    onLoad (data) {
      wx.hideTabBar()
      this.name=data.area+data.market
      this.area=data.area
      this.market=data.market
      console.log(this.area+this.market)
      this.query()
    },
    methods:{
      initChart(){
        this.option =  {
          title:{
            show:true,
            text:this.titleData,
            textStyle:{
              color:'#333',
              fontSize:14
            }
          },
          tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
              type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            height:'85%',
            top:'15%',
            left: '3%',
            right: '4%',
            bottom: '2%',
            containLabel: true
          },
          xAxis : [
            {
              type : 'category',
              data : this.kind,
              axisTick: {
                alignWithLabel: true
              },
              axisLabel:{
                interval:0
              }
            }
          ],
          yAxis : [
            {
              type : 'value'
            }
          ],
          series : [
            {
              name:'批次数',
              type:'bar',
              data:this.count,
              itemStyle:{
                normal:{
                  color:function(params) {
                    // build a color map as your need.
                    var colorList = [
                      "#24ad83",
                      "#eb8c97",
                      "#fac168",
                      "#66dff5",
                      "#d0648a",
                      "#e8f26e"
                    ];
                    return colorList[params.dataIndex]
                  },
                }
              }
            }
          ]
        }
        chart.setOption(this.option)
      },
      handleInit (canvas, width, height) {
        chart = echarts.init(canvas, null, {
          width: width,
          height: height
        })
        canvas.setChart(chart)
        return chart
      },
      query(){
        const _this = this
        _this.$httpWX.get({
          url:'http://www.wisevege.com/obtain/kinds_data_count$ajax.htm',
          data:{
            area:_this.area,
            addr:_this.market
          }
        })
          .then(res=>{
            _this.kind=[]
            _this.count=[]
            res.resultList.map(function (item,index) {
              _this.kind.push(item.kind)
              _this.count.push(item.count)
            })
            _this.initChart()
          })

      }
    },
    onShareAppMessage () {}
  }
</script>

<style scoped>
  .wrap {
    width: 100%;
    height: 300px;
    background-color: #ffffff;
  }
  .container{
    width: 100%;
    background-color: #f6f6f6;
  }
  .title{
    text-align: left;
    padding-left: 20px;
    color:#888888;
    height:40px;
    line-height:40px;
    font-size: 14px;
  }
</style>
