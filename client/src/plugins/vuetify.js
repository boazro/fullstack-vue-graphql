import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
// use coolors.co for creating great color schemes.

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        primary: "#3B125F",
        secondary: "#8B5FBF",
        accent: "#BF653F",
        error: "#722530",
        warning: "#A37513",
        info: "#396893",
        success: "#4caf50"
    }
});