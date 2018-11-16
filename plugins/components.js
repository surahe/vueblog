import Vue from 'vue'
import IconBase from '../components/base/IconBase.vue'

const components = { IconBase }

Object.keys(components).forEach(key => {
  Vue.component(key, components[key])
})
