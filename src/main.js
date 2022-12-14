import { createApp } from 'vue'
import App from './App.vue'
import BasicButton from './components/UI/BasicButton.vue'



const app = createApp(App)
app.component('basic-button', BasicButton)
app.mount('#app')
