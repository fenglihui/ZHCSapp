import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store=new Vuex.Store({
  state:{
   market:[],

  },
  getters:{

  },
  mutations:{
    replace:function (state,value) {
      state.market=value
    }
  }
})

export default store
