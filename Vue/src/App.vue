<template>
  <v-app>
    <v-navigation-drawer
      app
      temporary
      v-model="drawer"
    >
      <v-card
        class="mx-auto"
        width="300"
      >
        <v-list>
          <v-list-item @click="">
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item @click="">
            <v-list-item-icon>
              <v-icon>mdi-lock</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item @click="">
            <v-list-item-icon>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Ask</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <v-card
      color="grey lighten-4"
      flat
      height="200px"
      tile
    >
      <v-toolbar dark>
        <v-app-bar-nav-icon @click="drawer = !drawer" class="dropdown-menu-md-left"></v-app-bar-nav-icon>

        <v-toolbar-title>Mercedes-Benz</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-account-plus</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>

    <div style="background-color: red" class="d-md-none">
      <button>ffgfgf</button>
    </div>

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
