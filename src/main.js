import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles.css';
import '@fortawesome/fontawesome-free/css/all.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

library.add(faArrowRight, faBars,faChevronUp, faChevronDown)


const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')