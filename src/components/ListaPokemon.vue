<template>
  <div>
    <h1>Pokemon</h1>
    <h2> Nombre es
      {{ name.toUpperCase() }} 
       
    </h2>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "pokemon",
  computed: {
    ...mapState(["name"]),
    
  },
};
</script>