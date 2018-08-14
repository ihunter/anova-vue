<template>
  <v-app>
    <v-navigation-drawer
      persistent
      clipped
      disable-resize-watcher
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile v-for="(item, i) in items" :to="item.route" :key="i">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items v-for="(item, i) in items" :key="i" class="hidden-sm-and-down">
        <v-btn :to="item.route" flat>Home</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>

    <v-footer fixed app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      items: [{
        icon: 'home',
        title: 'Home',
        route: '/'
      }],
      title: 'Anova'
    }
  }
}
</script>
