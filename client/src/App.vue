<template>
  <v-app style="background: #e3e3ee">
    <!-- side navbar -->
    <v-navigation-drawer app temporary fixed v-model="sideNav">
      <v-toolbar color="accent" dark flat>
        <v-toolbar-nav-icon @click="toggleSideNav">
          <router-link to="/" tag="span" style="curser: pointer">
            <h1 class="title pl-3">Vue Share</h1>
          </router-link>
        </v-toolbar-nav-icon>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in sideNavItems" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- horisontal navbar -->
    <div>
      <v-app-bar color="primary" dense dark>
        <v-app-bar-nav-icon @click="toggleSideNav"></v-app-bar-nav-icon>

        <v-toolbar-title class="hidden-xs-only">
          <router-link to="/" tag="span" style="curser: pointer">
            Vue Share
          </router-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <!-- search input  -->
        <v-text-field
          prepend-icon="search"
          placeholder="search posts"
          color="accent"
          single-line
          hide-details
        ></v-text-field>

        <v-spacer></v-spacer>

        <v-btn
          class="hidden-xs-only"
          outlined
          v-for="item in horizontalNavItems"
          :key="item.title"
          :to="item.link"
        >
          <span class="hidden-sm-only">{{ item.title }}</span>
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-app-bar>
    </div>

    <!-- app content -->
    <main>
      <v-container class="md-4">
        <router-view />
      </v-container>
    </main>
  </v-app>
</template>
<script>
export default {
  name: "App",
  data() {
    return {
      sideNav: false
    };
  },
  computed: {
    horizontalNavItems() {
      return [
        { icon: "mdi-chat", title: "Post", link: "/post" },
        { icon: "mdi-lock-open", title: "Sign In", link: "/signin" },
        { icon: "mdi-pen", title: "Sign Up", link: "/signup" }
      ];
    },
    sideNavItems() {
      return [
        { icon: "mdi-chat", title: "Post", link: "/post" },
        { icon: "mdi-lock-open", title: "Sign In", link: "/signin" },
        { icon: "mdi-pen", title: "Sign Up", link: "/signup" }
      ];
    }
  },
  methods: {
    toggleSideNav() {
      this.sideNav = !this.sideNav;
    }
  }
};
</script>