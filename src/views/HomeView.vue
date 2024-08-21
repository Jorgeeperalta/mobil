<template>
  <!-- <HelloWorld /> -->
  <Pasarela />
</template>

<script>
import { defineComponent } from 'vue';

// Components
//import HelloWorld from '../components/HelloWorld.vue';
import Pasarela from '../components/Pasarela.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
   
    Pasarela
  },
});
</script>
