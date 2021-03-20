import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    statePokemonList: [],
    stateFavoriteList: [],
  },
  mutations: {
    
    setPokemonData(state, list) {
      state.statePokemonList = list
    },
    setFavoriteList(state, list) {
      state.stateFavoriteList = list
    },
    addFavorite(state, name) {
      state.stateFavoriteList.push(name)
    },
    deleteFavorite(state, item) {
      state.stateFavoriteList.splice(item, 1)
    },
    eraseFavoritePokemonList(state) {
      state.stateFavoriteList = []
    }
  },
  actions: {
   
    setPokemonData(context, payload) {
      context.commit('setPokemonData', payload)
    },
    setFavoriteList(context, payload) {
      context.commit('setFavoriteList', payload)
    },
    addFavorite(context, payload) {
      context.commit('addFavorite', payload)
    },
    deleteFavorite(context, payload) {
      context.commit('deleteFavorite', payload)
    },
    eraseFavoritePokemonList(context) {
      context.commit('eraseFavoritePokemonList')
    }


  },
  modules: {
  }
})
