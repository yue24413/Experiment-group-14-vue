import { createMessageDialog } from '@/components/message/index'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 全局未捕获异常处理
// 统一弹出错误信息模态框
app.config.errorHandler = (err) => {
  console.log(err)
  const message = err as string

  createMessageDialog(message)
}
