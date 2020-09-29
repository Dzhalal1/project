<template>
  <v-app>
    <v-navigation-drawer
      color="yellow accent-4"
      app
      temporary
      v-model="drawer"
    >
      <v-card
        color="black"
        class="mx-auto"
        width="300"
      >
        <v-list color="yellow accent-4">

          <v-list-item @click="">
            <v-list-item-icon>
              <v-icon color="black">mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>

          <v-list-item @click="">
            <v-list-item-icon>
              <v-icon color="black">mdi-message-text</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Ask</v-list-item-title>
          </v-list-item>

          <v-list-item @click="">
            <v-list-item-icon>
              <v-icon color="black">mdi-account-plus</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Registration</v-list-item-title>
          </v-list-item>

          <v-list-item @click="">
            <v-list-item-icon>
              <v-icon color="black">mdi-login</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>

        </v-list>
      </v-card>
    </v-navigation-drawer>

    <v-card
      color="yellow accent-4"
      flat
      height="935px"
      tile
    >
      <v-toolbar color="yellow accent-4">
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title></v-toolbar-title>
        <img src="../src/assets/1280px-Commerzbank_(2009).svg.png" height="60" width="250"/>

        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon color="black">mdi-home</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="black">mdi-message-text</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="black">mdi-account-plus</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="black">mdi-login</v-icon>
        </v-btn>
      </v-toolbar>



    </v-card>


  </v-app>
</template>
<script>
  export default {
    data() {
      return {
        drawer: false

      }
    }
  }
</script>
<style scoped>

</style>
