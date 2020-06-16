<template>
<div>
  <app-bar></app-bar>
   <v-main>
     <v-row justify="center" color="primary" dark @click.stop="dialog = true">
      <v-btn color="red lighten-2" dark @click='displayToyForm'>New Toy</v-btn>
     </v-row>
     <toy-list></toy-list>
     <toy-form></toy-form>
   </v-main>
  </div> 
</template>

<script>
import AppBar from '../components/AppBar'
import ToyList from '../components/ToyList'
import ToyForm from '../components/ToyForm'
import { mapActions } from 'vuex'

export default {
  components: {
    AppBar,
    ToyList,
    ToyForm,
  },
  methods: {
    ...mapActions(['displayToyForm'])
  }
}
</script>
