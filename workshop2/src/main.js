import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebookF, faTwitter, faLinkedin, faGoogle, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faPhone, faTwitter, faLinkedin, faFacebookF, faGoogle, faGithub)

createApp(App).use(router).component('fa', FontAwesomeIcon).mount("#app");


