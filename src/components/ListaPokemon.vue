<template>
  <div>
    <h2>Escoge un Pokemon</h2>
    <p
      v-for="(pokemon, index) in pokemonList"
      :key="pokemon.url"
      
    >
      {{ index + 1 + '. ' }}
      <i
        v-if="favorites.includes(pokemon.name)"
        
      />
      <i
        v-else
        
      />
      {{ pokemon.name }}
      <img
        :key="pokemon.url"
        :src="
          `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index +
            1}.png`
        "
        alt="Pokemon`"
      >
      <a
        v-show="!favorites.includes(pokemon.name)"
        
        :class="{ 'is-disabled': favoriteListLength === 10 }"
        @click="setFavorites(pokemon.name)/*, playPokemonCry(index + 1)*/"
      >Pick me!</a>
      <button
        v-show="favorites.includes(pokemon.name)"
        
        @click="setFavorites(pokemon.name)/*, playPokemonCry(index + 1)*/"
      >
        Remove
      </button>
    </p>
  </div>
</template>

<script>
export default {
    name: 'PokemonList',
    props: {
        pokemonList: {
            type: Array,
            required: true,
        },
        favorites: {
            type: Array,
            required: true,
        },
    },
    computed: {
        favoriteListLength() {
            return this.favorites.length
        },
    },
    methods: {
        setFavorites(name) {
            if (this.favorites.includes(name)) {
                const indexInArray = this.favorites.indexOf(name)
                this.$emit('deleteFavorite', indexInArray)
                return
            }
            if (this.favoriteListLength < 10) {
                this.$emit('addFavorite', name)
            }
        },
        // playPokemonCry(pokemonId) {
        //     const audio = new Audio(
        //         `https://pokemoncries.com/cries-old/${pokemonId}.mp3`
        //     )
        //     audio.play()
        // }
    },
}
</script>