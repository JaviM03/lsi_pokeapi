<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/images.png">
    <h1>Pokedex</h1>
    
    
  </div>
</template>

<script>
// @ is an alias to /src

import axios from 'axios';

export default {
  data(){
    return{
    name:'',
    type: []
    }
  },
  name: 'Home',
  components: {
    
  },
  methods:{
     async getName(){
       let pokemon = '1'
       let datos = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
       console.log(datos.data.forms[0].name);
     }
  },
   created(){
    this.getName()
  }
}
</script>
