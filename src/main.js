import { createApp } from 'vue'
import App from './App.vue'
import BasicButton from './components/UI/BasicButton.vue'
import BasicInnerButton from './components/UI/BasicInnerButton.vue'
import BasicSection from './components/UI/BasicSection.vue'
import BasicContainer from './components/UI/BasicContainer.vue'
import BasicSidebar from './components/UI/BasicSidebar.vue'
import router from './router/index.js'



const app = createApp(App)
app.component('basic-button', BasicButton)
app.component('basic-inner-button', BasicInnerButton)
app.component('basic-section', BasicSection)
app.component('basic-container', BasicContainer)
app.component('basic-sidebar', BasicSidebar)
app.use(router)
app.mount('#app')
