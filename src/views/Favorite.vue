  
<template>
  <div>
    <h1 >
      Your favorite Pokémon
    </h1>
    <router-link
      
      to="/"
    >
      Go back
    </router-link>
    <div >
      <pokemon-card
        v-for="(pokemon, index) in stateFavoriteList"
        :key="index"
        :pokemon-name="pokemon"
      />
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex'
import PokemonCard from '@/components/PokemonCard'
    export default {
        components: {
            PokemonCard
        },
        computed: {
            ...mapState([
            'stateFavoriteList'
            ])
        }
    }
</script>
