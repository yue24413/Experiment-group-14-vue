<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import PictureDisplay from "@/components/PictureDisplay.vue";
import { throttle } from 'lodash';
// 初始化状态
const navBarFixed = ref(false);

// 监听滚动事件的回调函数
function watchScroll() {
    const scrollTop =
        window.scrollY ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    navBarFixed.value = scrollTop > 90;
}

// 使用 throttle 优化滚动事件监听 实现节流 防止监听事件持续出发导致的性能下降
const throttledWatchScroll = throttle(watchScroll, 100);

// 组件挂载时添加事件监听
onMounted(() => {
    window.addEventListener("scroll", throttledWatchScroll);
});

// 组件卸载时移除事件监听
onUnmounted(() => {
    window.removeEventListener("scroll", throttledWatchScroll);
});

// 返回顶部功能
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}


// ========================================================================================================
const armorWarriors: {
    name: string;
    introduction: string;
    skills: string[];
    sealedMonsters: number;
    imageUrl?: string;
}[] = [
    {
        name: "炎龙侠",
        introduction: "炎龙侠是火村后人炘南召唤的铠甲，代表着火之力量，是铠甲小队的队长，具有强大的战斗力和领导能力.",
        skills: ["烈焰刀之封魔斩帖，斩邪除怪，熔于烈焰，消于晨曦"],
        sealedMonsters: 18,
        imageUrl: "../../../assets/pic/1.webp"
    },
    {
        name: "黑犀侠",
        introduction: "黑犀侠由水村后人北淼召唤，拥有洪流深渊般狂瀑掩藏的力量，防御力出色，性格傲慢但实力强劲.",
        skills: ["流星枪之狂瀑扎帖，碎魔伏暴 ，灭于狂瀑，平如镜水"],
        sealedMonsters: 14,
        imageUrl: "../../../assets/pic/2.webp"
    },
    {
        name: "风鹰侠",
        introduction: "风鹰侠是木村后人东杉召唤的铠甲，速度敏捷，擅长以快制敌，是第二个出现的铠甲勇士.",
        skills: ["风鹰剑之穿风刺帖 ，降妖化兽，破于疾风，止于瞬间"],
        sealedMonsters: 13,
        imageUrl: "../../../assets/pic/3.webp"
    },
    {
        name: "雪獒侠",
        introduction: "雪獒侠为金村后人西钊所召唤，力量是五位铠甲勇士中最大的一位，攻击力也是最强的，综合能力仅次于炎龙侠.",
        skills: ["震雷斧之震雷削帖，破恶绝煞，削之如泥，浑沌尽散"],
        sealedMonsters: 1,
        imageUrl: "../../../assets/pic/4.webp"
    },
    {
        name: "地虎侠",
        introduction: "地虎侠是土村后人坤中召唤的铠甲，拥有时间停止、瞬间移动、飞跃时空的能力，是光明宇宙跳跃力最强的铠甲.",
        skills: ["裂地刀之裂地劈帖，劈狱驱暗，毁于怒土，复始大地"],
        sealedMonsters: 15,
        imageUrl: "../../../assets/pic/5.webp"
    }
];

const changeBackground = (index: number) => {
  armorWarriors[index].imageUrl = armorWarriors[index].imageUrl;
};


</script>

<template>

  <!-- 上导航 -->
   <div id="homebar">
  <div class="scroll">
        <h1 style="color: aliceblue; margin-right: auto; margin-left: 40px;">铠甲勇士</h1>
        <div class="nav" :class="{ navBarWrap: navBarFixed }">
            <div class="buttonContainer" @click="scrollToTop">

                <button  class="scroll-top-btn">返回顶部</button>
            </div>
        </div>
    </div>

    </div>

  <div id="Home" class="background">
    <PictureDisplay />
  </div>
  <!-- 详细介绍 -->
   <div class ="info">

    <div
      v-for="(armorWarrior, index) in armorWarriors"
      :key="index"
      class="armor-warrior-card"
      @mouseover="changeBackground(index)"
    >
            <h2>{{ armorWarrior.name }}</h2>
            <p><strong>介绍：</strong>{{ armorWarrior.introduction }}</p>
            <h3>技能：</h3>
            <ul>
                <li v-for="(skill, skillIndex) in armorWarrior.skills" :key="skillIndex">{{ skill }}</li>
            </ul>
            <p><strong>封印异能兽数量：</strong>{{ armorWarrior.sealedMonsters }}</p>
    </div>
   </div>
</template>

<style scoped>
@font-face {
  font-family: longhu;
  src: url(./assets/fonts/HYYongZiLongHuBangW.ttf);;
}
.background{
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    background-image: url(../../../../assets/pic/image.png);
    background-color: rgb(249, 249, 249);
    background-position-x: left;
    background-position-y: top;
    background-repeat: no-repeat;
    background-attachment: fixed; /* 修改为fixed，让背景图固定 */
    background-size: cover; /* 修改为cover，使图片覆盖整个界面 */
    width: 100vw; /* 确保宽度占满视口宽度 */
    height: 100vh; /* 确保高度占满视口高度 */
    background-origin: padding-box;
    background-clip: border-box;
    z-index: -999;
}

#homebar{
  .scroll {
    display: flex;
    height: 80px;
    text-align: center;
    background: black;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    position: relative;
}

/* 标题样式优化 */
.scroll h1 {
    font-family: 'Bangers', cursive;
    font-size: 32px;
    letter-spacing: 2px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    transition: all 0.3s ease;
}

.scroll h1:hover {
    color: #FFD700;
    text-shadow: 4px 4px 6px rgba(0, 0, 0, 0.6);
}

/* 导航栏 */
.nav {
    margin: 0;
    padding: 10px;
    width: 80%;
    border-radius: 20px;
    box-sizing: border-box;
    color: #fff;
    font-family: 'Bangers', cursive;

    font-size: 18px;
    display: flex;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.1) inset;
}

/* 按钮通用样式 */
.nav-link,
.scroll-top-btn {
    margin-right: 15px;
    padding: 8px 12px;
    border: none;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.1);
    color: #fff;
    font-family: 'Bangers', cursive;

    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
}

/* 按钮悬停效果细化 */
.nav-link:hover,
.scroll-top-btn:hover {
    background-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

/* 按钮点击效果 */
.nav-link:active,
.scroll-top-btn:active {
    transform: translateY(2px);
    box-shadow: none;
}

/* 为按钮添加发光特效 */
.nav-link::before,
.scroll-top-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0));
    opacity: 0;
    transition: opacity 0.3s ease;
}

.nav-link:hover::before,
.scroll-top-btn:hover::before {
    opacity: 1;
}

/* 滚动固定样式 */
.navBarWrap {
    position: fixed;
    top: 0;
    z-index: 999;
    animation: navFadeIn 0.5s ease-out;
    left: 5%;
    width: 90%;
}

/* 按钮容器 */
.buttonContainer {
    align-items: center;
    text-align: center;
    display: flex;
    justify-content: flex-start;
}

/* 动画效果 */
@keyframes navFadeIn {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
}

.info {
  display: flex;
  background-image: url(../../../../assets/pic/back2.jpg);
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: nowrap;
  height: 100vh;

.armor-warrior-card {
  color: #fff;
  align-items: center;
  align-content: center;

  padding: 20px;
  margin: 50px;
  width: 100vh;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.7);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.armor-warrior-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 12px 24px rgba(255, 69, 0, 0.6);
}

.armor-warrior-card h2 {
  color: #ff4500;
  text-align: center;
  font-family: 'Arial Black', sans-serif;
}

.armor-warrior-card img {
  border: 3px solid #ff4500;
  border-radius: 5px;
}

.armor-warrior-card p, .armor-warrior-card li {
  font-size: 14px;
  line-height: 1.6;
}

.armor-warrior-card h3 {
  color: #ffa500;
  margin-top: 10px;
  font-size: 16px;
}

ul {
  list-style-type: square;
  padding-left: 20px;
}

ul li {
  margin-bottom: 5px;
}
@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.armor-warrior-card:hover {
  animation: pulse 1s infinite;
  color: aqua;
}
body {
  background: url('path/to/armor-warrior-background.jpg') no-repeat center center fixed;
  background-size: cover;
}

.armor-warrior-card h2, .armor-warrior-card h3 {
  font-family: 'Roboto Condensed', sans-serif;
}

}
</style>
