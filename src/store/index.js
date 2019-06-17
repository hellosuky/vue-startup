import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    city:localStorage.city || '上海'
  },
  actions:{
    CHANGE_CITY:function(ctx,city){
      ctx.commit('CHANGE_CITY_SUCCESS',city)
    }
  },
  mutations:{
    CHANGE_CITY_SUCCESS:function(state,city){
      localStorage.city = city
      state.city = city
    }
  }
})
