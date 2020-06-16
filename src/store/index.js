import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    toys: [],
    showForm: true,
    currentToy: {
      id: null,
      data: {
        code: '',
        name: '',
        price: 0,
        stock: 0
      }
    }
  },
  mutations: {
    //mutacion "guardian"
    SET_TOYS(state, data){ state.toys = data },
    DISPLAY_TOY_FORM(state){ state.showForm = true},
    HIDE_TOY_FORM(state){ state.showForm = false},
    UPDATE_CODE(state, code){ state.currentToy.data.code = code },
    UPDATE_NAME(state, name){ state.currentToy.data.name = name },
    UPDATE_PRICE(state, price){ state.currentToy.data.price = price },
    UPDATE_STOCK(state, stock){ state.currentToy.data.stock = stock },
  },
  actions: {
    //accion que llama al guardian
    setToys({commit}){
      axios.get('https://us-central1-ottoklaus-7d590.cloudfunctions.net/toys/toys')
      .then(response  => {
        commit('SET_TOYS', response.data)
      })
    },
    displayToyForm({commit}) { commit('DISPLAY_TOY_FORM') },
    hideToyForm({commit}) { commit('HIDE_TOY_FORM') },
    updateName({commit}, name) { commit('UPDATE_NAME', name) },
    updateCode({commit}, code) { commit('UPDATE_CODE', code) },
    updatePrice({commit}, price) { commit('UPDATE_PRICE', price) },
    updateStock({commit}, stock) { commit('UPDATE_STOCK', stock) },
    postToy({dispatch, state}){
      axios.post('https://us-central1-ottoklaus-7d590.cloudfunctions.net/toys/toy', state.currentToy.data)
      .then(() => {
        dispatch('setToys')
      })
    },
    deleteToy({ dispatch }, id){
      axios.delete(`https://us-central1-ottoklaus-7d590.cloudfunctions.net/toys/toy/${id}`)
      .then(() => {
        dispatch('deleteToy')
      })
    }
  },
  modules: {
  }
})
