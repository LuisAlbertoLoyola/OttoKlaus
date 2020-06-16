<template>
  <div>
   <h2 class="text-center">Otto Klauss Inventory</h2>
  <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">Code</th>
          <th class="text-left">Price</th>
          <th class="text-left">Stock</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="toy in toys" :key="toy.id">
          <td>{{ toy.data.name }}</td>
          <td>{{ toy.data.code }}</td>
          <td>{{ toy.data.price }}</td>
          <td>{{ toy.data.stock }}</td>
          <td>
          <v-btn text @click="removeToy(toy.id)"><v-icon>mdi-delete</v-icon></v-btn>
          <v-btn text><v-icon>mdi-pencil</v-icon></v-btn>
          </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    methods: {
        ...mapActions([ 'setToys', 'deleteToy' ]),
        removeToy(id){
          let confirmation = confirm('Are you sure you want to delete this toy?')
          if (confirmation) {
            this.deleteToy(id)
          }
        }
    },
    computed: {
        ...mapState([ 'toys' ])
    },
    created() {
        this.setToys()
    }
}
</script>