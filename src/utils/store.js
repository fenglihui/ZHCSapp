import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
    market:[],
    area:[],
    minHeight:''
  },
  getters:{

  },
  mutations:{
    replace:function (state,value) {
      state.market=value
    },
    selectArea:function(state,value){
      state.area=value
    },
    screeHeight:function (state,value) {
      state.minHeight=value
    }
  }
})

export default store
