<template>
  <div >
   <img alt="Vue logo" src="../assets/images.png">
    <div >
      <pokemon-list
        :pokemon-list="statePokemonList"
        :favorites="stateFavoriteList"
        @deleteFavorite="deleteFavorite"
        @addFavorite="addFavorite"
      />
      <summary-favorites
        :pokemon-list="statePokemonList"
        :favorites="stateFavoriteList"
        @addFavorite="addFavorite"
        @eraseFavoritePokemonList="eraseFavoritePokemonList"
      />
    </div>
  </div>
</template>

<script>
import PokemonList from '@/components/ListaPokemon'
import SummaryFavorites from '@/components/ListaFavorite'
import { mapState, mapActions } from 'vuex'
export default {
    components: {
        PokemonList,
        SummaryFavorites,
    },
    computed: {
        ...mapState(['statePokemonList', 'stateFavoriteList']),
    },
    async created() {
        const pokemonData = await this.getPokemonData()
        this.setPokemonData(pokemonData)
    },
    methods: {
        async getPokemonData() {
            const data = await fetch(
                'https://pokeapi.co/api/v2/pokemon?limit=151'
            )
            const json = await data.json()
            return json.results
        },
        ...mapActions(['setPokemonData', 'addFavorite', 'deleteFavorite', 'eraseFavoritePokemonList']),
    },
}
</script>
