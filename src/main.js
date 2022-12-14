import { createApp } from 'vue'
import App from './App.vue'
import BasicButton from './components/UI/BasicButton.vue'
import router from './router/index.js'



const app = createApp(App)
app.component('basic-button', BasicButton)
app.use(router)
app.mount('#app')
