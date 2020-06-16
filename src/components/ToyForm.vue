<template>
  <div class="text-center">
    <v-dialog :value="showForm" width="500">

      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>Add New Toy</v-card-title>

        <v-container class="m-auto">
         <v-text-field label="code" type="text" :value="currentToy.data.code" @input="updateCode"></v-text-field>
         <v-text-field label="name" type="text" :value="currentToy.data.name" @input="updateName"></v-text-field>
         <v-text-field label="price" prefix="$" :value="currentToy.data.price" @input="updatePrice"></v-text-field>
         <v-text-field label="stock" suffix="qty" :value="currentToy.data.stock" @input="updateStock"></v-text-field>
        </v-container>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="submitForm">Add Toy</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions(['hideToyForm', 'updateName', 'updatePrice', 'updateCode', 'updateStock', 'postToy']),
        submitForm() {
          this.postToy()
          this.hideToyForm()
        }
    },
    computed: {
        ...mapState(['showForm','currentToy']),
    }
}
</script>

<style>

</style>