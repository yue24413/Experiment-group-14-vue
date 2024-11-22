<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue'

const components: { name: string; component: Component }[] = [
  {
    name: '空我',
    component: defineAsyncComponent(() => import('./kuuga.vue')),
  },
  {
    name: '亚极陀',
    component: defineAsyncComponent(() => import('./agito.vue')),
  },
  {
    name: '555',
    component: defineAsyncComponent(() => import('./ryuki.vue')),
  },
  {
    name: '剑',
    component: defineAsyncComponent(() => import('./faiz.vue')),
  },
  {
    name: '响鬼',
    component: defineAsyncComponent(() => import('./test4.vue')),
  },
  {
    name: '甲斗',
    component: defineAsyncComponent(() => import('./test4.vue')),
  },
  {
    name: '电王',
    component: defineAsyncComponent(() => import('./test4.vue')),
  },
  {
    name: '月骑',
    component: defineAsyncComponent(() => import('./test4.vue')),
  },
  {
    name: '帝骑',
    component: defineAsyncComponent(() => import('./test4.vue')),
  },
  {
    name: '双骑',
    component: defineAsyncComponent(() => import('./test4.vue')),
  },
  {
    name: 'OOO',
    component: defineAsyncComponent(() => import('./w.vue')),
  },
  {
    name: '卅骑',
    component: defineAsyncComponent(() => import('./ooo.vue')),
  },
  {
    name: '巫骑',
    component: defineAsyncComponent(() => import('./fourze.vue')),
  },
  {
    name: '铠武',
    component: defineAsyncComponent(() => import('./wizard.vue')),
  },
  {
    name: '巫骑',
    component: defineAsyncComponent(() => import('./test4.vue')),
  },
  {
    name: '驰骑',
    component: defineAsyncComponent(() => import('./test4.vue')),
  },
  {
    name: '灵骑',
    component: defineAsyncComponent(() => import('./test4.vue')),
  },

  {
    name: '艾克赛德',
    component: defineAsyncComponent(() => import('./test4.vue')),
  },
  {
    name: '创骑',
    component: defineAsyncComponent(() => import('./test4.vue')),
  },
  {
    name: '时王',
    component: defineAsyncComponent(() => import('./test4.vue')),
  },
]
const currentComponentI = defineAsyncComponent(() => import('./HomePage.vue'))
const currentComponentR = ref()
const currentComponentC = computed(
  () => components.find((com) => com.name == currentComponentR.value)?.component,
)
const typeC = computed(
  () => (name: string) => (name == currentComponentR.value ? 'danger' : 'primary'),
)
</script>
<template>
  <div class="test4">
    <el-row class="my-row">
      <el-col :span="1"></el-col>
      <el-col :span="1">
        <el-tag
          class="my-tag"
          v-for="(com, index) of components"
          :key="index"
          :type="typeC(com.name)"
          @click="currentComponentR = com.name"
          style="cursor: pointer; margin-right: 10px"
          size="large"
        >
          {{ com.name }}
        </el-tag>
      </el-col>
      <el-col :span="2"></el-col>
      <el-col :span="19">
        <template v-if="currentComponentR">
          <component :is="currentComponentC" />
        </template>
        <template v-if="!currentComponentR">
          <component :is="currentComponentI" />
        </template>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
.my-tag {
  --el-ta-bg-color: none;
  margin-bottom: 10px;
  background: none;
}
.test4 {
  text-align: center;
  background:
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('@/assets/test4/back.jpg') no-repeat 0% 20% / cover;
  padding: 20px;
  color: white;
}
</style>
