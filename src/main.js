import { createApp } from "vue";
import "./style.css";
import "./utilities.css";
import App from "./App.vue";

const app = createApp(App);

document.body.className = "dark-theme";

app.mount("#app");
