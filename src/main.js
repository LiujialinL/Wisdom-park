import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/bootstrap.min.css'
import './style/reset.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus).use(store).use(router).mount('#app')
