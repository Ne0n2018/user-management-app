import { createApp } from "vue";
import { createVuetify } from "vuetify";
import App from "./App.vue";
import "vuetify/styles";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).mount("#app");
