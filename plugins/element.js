import Vue from 'vue'
import {
  Button,
  Table,
  TableColumn,
  Dialog,
  Input,
  Message,
  Form,
  FormItem,
  Menu,
  Submenu,
  MenuItem,
  scrollbar,
  Select,
  Option,
} from 'element-ui' //引入分页组件

Vue.use(Button)
Vue.use(Table)
Vue.use(Dialog)
Vue.use(Input)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(scrollbar)
Vue.use(Select)
Vue.use(Option)

Vue.prototype.$message = Message