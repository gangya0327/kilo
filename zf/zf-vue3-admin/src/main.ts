import { createApp } from "vue"
// import "./style.css"
import App from "./App.vue"

import router from "./router"

import { createPinia } from "pinia"
const pinia = createPinia()

// import ElementPlus from "element-plus"
// import "element-plus/dist/index.css"

import 'virtual:uno.css'

import 'normalize.css'
import '@/styles/index.scss'

const app = createApp(App)
app.use(router)
app.use(pinia)
// app.use(ElementPlus)
app.mount("#app")
