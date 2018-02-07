import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app.vue'
import VueResource from 'vue-resource'  

Vue.use(VueRouter)
Vue.use(VueResource) 

// const About = () => import('./views/about.vue')
import About from './views/about.vue'

const router = new VueRouter({
	routes: [
        {
            path: '/about',
            component: About
        }
    ]
})
new Vue({
    el: '#app',
    router,
    render: h => h(App)
})