import VueRouter from 'vue-router'
import Home from './pages/home'
import Cars from './pages/cars'
import Car from  './pages/Car'
import CarFull from './pages/CarFull'


export default new VueRouter({
  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/cars',
      component: Cars
    },
    {
      path: '/car/:id',
      component: Car,
      children: [
        {
          path: 'full',
          component: CarFull
        }
      ]
    }
  ],
  mode: 'history'
})


