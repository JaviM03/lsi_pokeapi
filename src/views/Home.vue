<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images.png">
    <h1>Pokedex</h1>
    <ListaPokemon />
    
  </div>
</template>

<script>
// @ is an alias to /src

import  ListaPokemon  from "@/components/ListaPokemon.vue";
export default {
  name: 'Home',
  components: {
    ListaPokemon
  }
}
</script>
