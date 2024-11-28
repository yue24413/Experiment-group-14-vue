<script setup lang="ts"></script>
<template>
  <div class="shell" id="shell">
    <div class="header">
      <h2 class="title">飞逝</h2>
      <h3 class="subtitle">BILIBILI</h3>
    </div>
    <div class="timeline">
      <!-- 这里使用v-for指令循环渲染每个时间轴项目 -->
      <div
        v-for="(item, index) in timelineItems"
        :key="index"
        class="item"
        :class="{ 'item--active': isItemActive === index }"
        :data-text="item.text"
        :style="{ left: isLeftSide(index) ? '0' : 'auto', right: isLeftSide(index) ? 'auto' : '0' }"
      >
        <div class="content">
          <img class="img" :src="item.imgSrc" />
          <h2 class="content-title">{{ item.year }}</h2>
          <p class="content-desc">{{ item.desc }}</p>
        </div>
      </div>
    </div>
  </div>
  <div class="footer"><a>致我们逝去的青春</a></div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      timelineItems: [
        {
          text: '后人发，先人至，谋长节短，百战百胜',
          imgSrc: '/src/assets/test2/xingtian1.png',
          year: '刑天',
          desc: '炎星将军铠甲，拥有传说殿堂级武器战神烈火剑。在炎星被路法率领的阿瑞斯大军攻破后，后被路法带回阿瑞斯用宇宙最强的科技改造，后来成为阿瑞斯星球的铠甲部队分队队长。',
        },
        {
          text: '疾如风，徐如林，掠如火',
          imgSrc: '/src/assets/test2/feiying1.png',
          year: '飞影',
          desc: '原属于炎星的辅将铠甲，在炎星被路法率领的阿瑞斯大军攻破后，和刑天铠甲，金刚铠甲，天地人法合一为战斗而生的最强铠甲修罗铠甲一起被带到阿瑞斯星球用宇宙最强科技进行改造，成为阿瑞斯星球的三大铠甲军团部队',
        },
        {
          text: '不动如山，动如雷震',
          imgSrc: '/src/assets/test2/jingang1.png',
          year: '金刚',
          desc: '原属于炎星的辅将级铠甲，后归属阿瑞斯星。后经过宇宙最强科技改造得到了量产开发，成为了阿瑞斯战士用于维护银河系治安捍卫银河系正义的战斗武器。',
        },
        {
          text: '天地人法合一，最强铠甲之力',
          imgSrc: '/src/assets/test2/xiuluo1.png',
          year: '修罗',
          desc: '传说中拥有最强力量的铠甲，可通过天地人法合一发挥出毁天灭地的威力。其力量来源神秘，只有被认可的强大战士才有可能驾驭。在炎星与阿瑞斯的纷争中，它一直是各方关注的焦点，路法也曾觊觎其力量，试图掌控它以实现自己的野心。',
        },
        {
          text: '阿瑞斯的野心家，炎星的侵略者',
          imgSrc: '/src/assets/test2/lufa1.png',
          year: '路法',
          desc: '阿瑞斯星的将军，因野心勃勃妄图统治银河系，率领阿瑞斯大军攻打炎星，抢夺了刑天、飞影、金刚和修罗等铠甲并带回阿瑞斯改造。他组建了自己的幽冥军团，四处征战收集能晶，手段残忍且诡计多端，是整个故事的幕后黑手，给众多星球带来了灾难与战乱。',
        },
        {
          text: '安迷修，亦正亦邪的队长',
          imgSrc: '/src/assets/test2/anmixiu1.png',
          year: '灰冥队长',
          desc: '路法的儿子，灰冥队长。性格善良正直，对路法的所作所为存在质疑与抵触，内心渴望和平，常陷入正义与亲情的挣扎之中。在与刑天等铠甲勇士的战斗过程中，逐渐看清了真相，试图阻止路法的恶行，但又难以割舍父子之情，是一个极具矛盾与魅力的角色。',
        },
        {
          text: '库忿斯，勇猛的复仇者',
          imgSrc: '/src/assets/test2/kufensi1.png',
          year: '赤冥队长',
          desc: '赤冥队长，性格勇猛好斗且重情重义。因被路法利用，误以为是刑天铠甲杀害了自己的族人而对刑天等铠甲勇士充满仇恨，一心只想复仇。在战斗中表现得极为凶悍，但随着真相逐渐浮出水面，他也开始反思自己的行为并面临艰难的抉择，其命运充满了悲剧色彩。',
        },
      ],
      isItemActive: 0,
      scrollEventBound: false, // 添加标志位判断滚动事件是否已绑定
    }
  },
  mounted() {
    if (!this.scrollEventBound) {
      window.addEventListener('scroll', this.handleScroll)
      this.scrollEventBound = true
    }
  },
  beforeUnmount() {
    if (this.scrollEventBound) {
      window.removeEventListener('scroll', this.handleScroll)
      this.scrollEventBound = false
    }
  },
  methods: {
    handleScroll() {
      const shell = document.getElementById('shell')
      const items = document.querySelectorAll('.item')
      const itemLength = items.length
      const pos = window.scrollY
      let foundActive = false

      for (let i = 0; i < itemLength; i++) {
        const item = items[i]
        const min = item.offsetTop
        const max = item.offsetTop + item.offsetHeight

        // 增加一个缓冲区间判断，比如滚动位置在元素上下各100像素范围内视为激活
        if (pos >= min - 100 && pos <= max + 100) {
          this.isItemActive = i
          shell.style.backgroundImage = `url(${this.timelineItems[i].imgSrc})`
          foundActive = true
          break
        }
      }

      // 如果没有找到激活的元素（比如快速滚动越过了所有元素），可以根据实际情况设置默认显示等逻辑
      if (!foundActive) {
        // 这里假设默认显示第一个元素，可根据需求修改
        this.isItemActive = 0
        shell.style.backgroundImage = `url(${this.timelineItems[0].imgSrc})`
      }
    },
    isLeftSide(index) {
      // 根据索引判断是否在中轴左边显示，这里假设偶数索引在左边，奇数索引在右边，可根据需求调整规则
      return index % 2 === 0
    },
  },
}
</script>

<style scoped>
/* 这里可以将原来的全局样式根据需要进行调整，添加scoped属性使其只作用于当前组件 */
* {
  padding: 0;
  margin: 0;
}

.shell {
  width: 100%;
  position: relative;
  padding: 80px 0;
  background-attachment: fixed;
  background-size: cover;
}

.shell:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(30, 34, 34, 0.9);
  content: '';
}

.header {
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
  position: relative;
}

.title {
  color: #fff;
  font-size: 46px;
  font-weight: normal;
  margin: 0;
}

.timeline {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 700px;
  position: relative;
}

.content-title {
  font-weight: normal;
  font-size: 66px;
  margin: -10px 0 0 0;
  transition: 0.4s;
  padding: 0 10px;
  box-sizing: border-box;
  color: #fff;
}

.content-desc {
  margin: 0;
  font-size: 15px;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.7);
  line-height: 25px;
}

.timeline:before {
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  content: '';
  background: rgba(255, 255, 255, 0.07);
}

.item {
  padding: 40px 0;
  opacity: 0.3;
  filter: blur(2px);
  transition: 0.5s;
  box-sizing: border-box;
  width: calc(50% - 40px);
  display: flex;
  position: relative;
  transform: translateY(-80px);
}

.item:before {
  /* 设置在伪元素before中的内容  */
  content: attr(data-text);
  letter-spacing: 3px;
  width: 100%;
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  top: 70%;
  margin-top: -5px;
  padding-left: 15px;
  opacity: 0;
  right: calc(-100% - 56px);
  font: 900 20px '';
  letter-spacing: 5px;
}

.item:nth-child(even) {
  align-self: flex-end;
}

.item:nth-child(even):before {
  right: auto;
  text-align: right;
  left: calc(-100% - 56px);
  padding-left: 0;
  border-left: none;
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  padding-right: 15px;
}

.item--active {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
}

.item--active:before {
  top: 50%;
  transition: 0.3s all 0.2s;
  opacity: 1;
}

.item--active.content-title {
  margin: -50px 0 20px 0;
}

.img {
  max-width: 100%;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
}

.subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  letter-spacing: 5px;
  margin: 10px 0 0 0;
  font-weight: normal;
}

.footer {
  padding: 95px 0;
  text-align: center;
}

.footer a {
  color: #999;
  display: inline-block;
}

@media only screen and (max-width: 767px) {
  .item {
    align-self: baseline !important;
    width: 100%;
    padding: 0 30px 150px 80px;
  }
  .item img {
    max-width: 80%;
    margin: 0 auto;
  }
  .content-desc {
    line-height: 20px；;
  }
  .item:before {
    left: 10px !important;
    padding: 0 !important;
    top: 50px;
    text-align: center !important;
    width: 60px;
    border: none !important;
  }
  .item:last-child {
    padding-bottom: 40px;
  }
  .timeline:before {
    left: 40px;
  }
}
</style>
