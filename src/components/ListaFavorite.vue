<template>
    <div>
    <h2>Your chosen favorite Pokémon</h2>
    <p v-if="favoriteListLength < maximumList">
      I can't choose, help me <button
        
        @click="startInterval"
      >
        Pick Pokémon
      </button>
    </p>
    <template>
      <p
        v-for="(pokemonName, index) in favorites"
        :key="index"
        
      >
        <img alt="Vue logo" src="../assets/images.png">
        {{ pokemonName }}
      </p>
    </template>
    <p v-if="favoriteListLength > 1 && favoriteListLength < maximumList">
      You can add {{ maximumList - favoriteListLength }} more Pokémon
    </p>
    <p v-if="favoriteListLength > 9">
      Your list is full!
    </p>
    <p v-if="favoriteListLength > 9">
      Do you want to <button
        
        @click="emptyFavoritePokemonList"
      >
        Delete
      </button> the list?
    </p>
    <router-link
      v-if="favoriteListLength > 0"
      
      to="/favorites"
    >
      View your favorite Pokémon
    </router-link>

    </div>
</template>

<script>
export default {
    name: 'SummaryFavorites',
        props: {
          pokemonList: {
            type: Array,
            required: true
          },
          favorites: {
            type: Array,
            required: true
          }
        },
        data: function() {
            return {
                maximumList: 10
            }
        },
        computed: {
            favoriteListLength() {
                return this.favorites.length
            }
        },
        methods: {
          startInterval() {
            const self = this
            const intervalID = window.setInterval(pickRandomPokemonOrClearInterval, 500)
            function pickRandomPokemonOrClearInterval() {
              if(self.favoriteListLength < self.maximumList) {
                self.pickRandomPokemon()
              } else {
                clearInterval(intervalID)
              }
            }
          },
          pickRandomPokemon() {
            const list = this.pokemonList.filter(function(pokemon){
              return !this.favorites.includes(pokemon.name)
            }, this)
            
            const number = Math.floor(Math.random() * Math.floor(list.length))
            this.$emit('addFavorite', list[number].name)
          },
          emptyFavoritePokemonList() {
            this.$emit('eraseFavoritePokemonList')
          }
        }
}
</script>