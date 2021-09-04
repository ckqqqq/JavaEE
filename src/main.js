import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

const cors = require('koa2-cors');

Vue.config.productionTip = false

new Vue({
	vuetify,
	router,
	cors,
	render: h => h(App)
}).$mount('#app')
