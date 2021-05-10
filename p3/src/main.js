//import required methods from Vue
import { createApp } from "vue";

//import router with all paths in the app
import { router } from '@/common/router.js'

//import data storing service
import { store } from '@/common/store.js'
import App from "./App.vue";

createApp(App)
    .use(router)
    .use(store)
    .mount("#app");