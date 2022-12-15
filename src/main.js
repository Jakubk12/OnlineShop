import { createApp } from 'vue'
import App from './App.vue'
import BasicButton from './components/UI/BasicButton.vue'
import BasicSection from './components/UI/BasicSection.vue'
import BasicContainer from './components/UI/BasicContainer.vue'
import router from './router/index.js'



const app = createApp(App)
app.component('basic-button', BasicButton)
app.component('basic-section', BasicSection)
app.component('basic-container', BasicContainer)
app.use(router)
app.mount('#app')
