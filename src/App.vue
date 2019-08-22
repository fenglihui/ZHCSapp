<script>
  import store from '@/utils/store'
  import area from '@/utils/area'
export default {
    data(){
      return{
        array:[],
        selectArea:[],
        minHeight:''
      }
    },
  created () {
    let _this = this
    area.map(function (item,index) {
      _this.selectArea.push(item)
    })
    store.commit('selectArea',this.selectArea)
    _this.minHeight=wx.getSystemInfoSync().windowHeight
    store.commit('screeHeight',this.minHeight)
  }
}
</script>

<style>
</style>
