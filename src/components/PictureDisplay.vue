<template>
  <div class="slider" @mouseover="stopAutoPlay" @mouseleave="setAutoPlay">
    <div class="slider-list">
      <div :class="['slider-item', setItemClass(index)]" v-for="(item, index) of list" :key="index">
        <img :src="item">
      </div>
      <i @click="prev" class="arrow arrow-left"><</i>
      <i @click="next" class="arrow arrow-right">></i>
    </div>
    <div class="dots">
      <span v-for="(item, index) of list" :key="index"
            :style="setDotActiveStyl(index)" @mouseover="currentIndex = index"></span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import swipe1 from '../assets/pic/1.webp';
import swipe2 from '../assets/pic/2.webp';
import swipe3 from '../assets/pic/3.webp';
import swipe4 from '../assets/pic/4.webp';
import swipe5 from '../assets/pic/5.webp';

const list = ref([swipe1, swipe2, swipe3, swipe4, swipe5]);
const timer = ref(null);
const currentIndex = ref(0);

const listLength = computed(() => list.value.length - 1);

const setItemClass = (i: number) => {
  const prev = currentIndex.value === 0? listLength.value : currentIndex.value - 1;
  const next = currentIndex.value === listLength.value? 0 : currentIndex.value + 1;
  switch (i) {
    case currentIndex.value:
      return 'active';
    case prev:
      return 'prev';
    case next:
      return 'next';
    default:
      return '';
  }
};

const prev = () => {
  currentIndex.value === 0? (currentIndex.value = listLength.value) : currentIndex.value--;
};

const next = () => {
  currentIndex.value === listLength.value? (currentIndex.value = 0) : currentIndex.value++;
};

const setAutoPlay = () => {
  timer.value = setInterval(() => {
    next();
  }, 2000);
};

const stopAutoPlay = () => {
  clearInterval(timer.value);
};

const setDotActiveStyl = (i: number) => {
  if (i === currentIndex.value) {
    return { backgroundColor: '#D33A31' };
  }
};

onMounted(() => {
  setAutoPlay();
});

onUnmounted(() => {
  clearInterval(timer.value);
});
</script>

<style>
body{
  padding: 0;
  margin: 0;
  width: 100%;
}
.slider{
  width: 1150px;
  height: 460px;
  user-select: none;
  margin: 0 auto;
}
.slider-list{
  position: relative;
  margin-top: 20px;
  height: 100%;
  transform-style: preserve-3d;
}
.slider-item{
  position: absolute;
  margin: 0 50%;
  width: 746px;
  height: 100%;
  transform: translate3d(-50%, 0, -300px) scale(.8);
  transition: all.6s ease-in-out;
  border-radius: 8px;
  overflow: hidden;
}
.slider-item img{
  display: block;
  width: 100%;
  height: 200%;
  object-fit: cover;
}

.slider-item.prev{
  margin: 0;
  transform: translate3d(0, 0, -200px) scale(.7);
  transform-origin: left;
}
.slider-item.next{
  margin: 0 100%;
  transform: translate3d(-100%, 0, -100px) scale(.7);
  transform-origin: right;
}
.slider-item.active{
  transform: translate3d(-50%, 0, 0) scale(1);
}
.slider-item::after{
  content: ' ';
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity:.7;
  transition: all.6s;
}
.slider-item.active::after{
  opacity: 0;
}
.arrow{
  position: absolute;
  top: 50%;
  display: block;
  width: 30px;
  cursor: pointer;
  transform: translate3d(0, -50%, 0);
}
.arrow.arrow-right{
  right: -50px;
}
.arrow.arrow-left{
  left: -50px;
}
.dots{
  text-align: center;
}
.dots span{
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: #ccc;
  margin: 10px 5px;
  cursor: pointer;
}
</style>
