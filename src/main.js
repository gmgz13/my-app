import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import ElementPlus from 'element-plus'
import store from "/src/store";
import 'element-plus/dist/index.css'

const app = createApp(App)
installElementPlus(app)
app.use(router)
app.use(store)
app.use(ElementPlus)
app.mount('#app')
