<script lang="ts" setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const menus = ref<{ name: string; path: string }[]>([])

menus.value.push(
  {
    name: '路由1',
    path: '/test/test1',
  },
  {
    name: '路由2',
    path: '/test/test2',
  },
  {
    name: '路由3',
    path: '/test/test3',
  },
  {
    name: '路由4',
    path: '/test/test4',
  },
  {
    name: '路由5',
    path: '/test/test5',
  },
)

const route = useRoute()
const activeIndexR = ref('')
watch(
  route,
  () => {
    const p = menus.value.find((mn) => mn.path == route.path)
    activeIndexR.value = p?.path ?? ''
  },
  { immediate: true },
)
</script>
<template>
  <el-row class="my-row" style="padding: 3px" align="middle">
    <el-col :span="5"></el-col>
    <!-- 基于权限加载上功能栏 -->
    <el-col :span="14">
      <el-menu :default-active="activeIndexR" mode="horizontal" router class="my-menu">
        <template v-for="(menu, index) in menus" :key="index">
          <el-menu-item :index="menu.path">
            {{ menu.name }}
          </el-menu-item>
        </template>
      </el-menu>
    </el-col>
    <el-col :span="5"></el-col>
  </el-row>
</template>
<style scoped>
#logout :hover {
  cursor: pointer;
}
.my-button {
  font-size: 1.5rem;
}
.logout {
  color: #ff2020;
}
.my-row {
  border-bottom: none;
}
.setting {
  color: #3a92fe;
}
</style>
