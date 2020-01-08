import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home.vue";
import AddPosts from "./components/posts/AddPosts";
import Posts from "./components/posts/Posts";
import Profile from "./components/auth/Profile";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    },
    {
      path: "/post/add",
      name: "AddPost",
      component: AddPosts
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile
    },
    {
      path: "/signin",
      name: "SignIn",
      component: SignIn
    },
    {
      path: "/signup",
      name: "Signup",
      component: SignUp
    }
  ]
});
