import Vue from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import 'animate.css';

Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(fas)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
