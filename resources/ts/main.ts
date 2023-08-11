import "../css/app.css";

import axios from "axios";
axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";


import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
