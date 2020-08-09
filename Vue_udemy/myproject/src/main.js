import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'
import { store } from './store/store'

Vue.config.productionTip = false

Vue.directive('highlight', {
  bind(el, binding, vnode){
    //el.style.backgroundColor = 'green';
    //el.style.backgroundColor = binding.value;
    if(binding.arg == 'background'){
      el.style.backgroundColor = binding.value
    }else{
      el.style.color = binding.value
    }
  }
})

Vue.filter('to-lowercase',function(value){
  return value.toLowerCase();
});

Vue.use(VueResource)

Vue.http.options.root = 'https://vuejs-http-5328e.firebaseio.com/'

Vue.http.interceptors.push((request, next) => {
  console.log(request);
  if(request.method == 'POST'){
    request.method = 'PUT';
  }
  next(response =>{
    response.json = () => {
      return {messages: response.body}
    }
  });
}) 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

