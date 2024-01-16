import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faLink, faDiagramProject, faUserAstronaut, faIgloo, faXmark, faFolderOpen, faMinus,  } from '@fortawesome/free-solid-svg-icons'
import { faFile, faFileLines} from '@fortawesome/free-regular-svg-icons'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import router from './router'
library.add(faBars, faLink, faDiagramProject, faUserAstronaut, faFile, faIgloo, faXmark, faFolderOpen, faFileLines, faMinus)
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('my-icon', FontAwesomeIcon)
app.mount('#app')
