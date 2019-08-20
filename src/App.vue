<script>
  import store from '@/utils/store'
  import market from '@/utils/market'
export default {
    data(){
      return{
        array:[]
      }
    },
  created () {
    console.log('miniapp created!!!')
    let _this = this
    market.map(function (item,index) {
      _this.array.push(item.label)
    })
    store.commit('replace',this.array)

    console.log('array',store.state.market)

  }
}
</script>

<style>
  .container {
    background-color: #cccccc;
  }
</style>
