import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import App from './App.vue'
import { faFile, faFileLines, faLightbulb } from '@fortawesome/free-regular-svg-icons'
import { faDiscord, faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons'
import {
  faBars,
  faUserAstronaut,
  faIgloo,
  faXmark,
  faFolderOpen,
  faMinus,
  faEnvelope,
  faBriefcase,
  faPhone,
  faGear,
  faToolbox
} from '@fortawesome/free-solid-svg-icons'
library.add(
  faBars,
  faUserAstronaut,
  faFile,
  faIgloo,
  faXmark,
  faFolderOpen,
  faFileLines,
  faMinus,
  faXTwitter,
  faGithub,
  faLinkedin,
  faEnvelope,
  faDiscord,
  faBriefcase,
  faPhone,
  faLightbulb,
  faGear,
  faToolbox
)
const app = createApp(App)

app.use(createPinia())
app.component('my-icon', FontAwesomeIcon)
app.mount('#app')
