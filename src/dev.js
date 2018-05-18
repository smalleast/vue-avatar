import Vue from 'vue'
import VueAvatar from './components/VueAvatar.vue'


Vue.config.debug = true
Vue.config.devtools = true

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: `<div>
  <VueAvatar size="50px" url="" css-class="test1" />
  <VueAvatar size="80px" url="http://img1.gtimg.com/19/1919/191993/19199387_980x1200_0.jpg"     css-class="test2" />
  <VueAvatar size="100px" url="http://img1.gtimg.com/19/1919/191993/19199387_980x1200_0.jpg"   css-class="test3" />
  <VueAvatar :size="{width:'300px',height:'100px'}" radius="5px" url="http://img1.gtimg.com/19/1919/191993/19199387_980x1200_0.jpg"   css-class="test3" />
  </div>`,
  components: {VueAvatar}
})
