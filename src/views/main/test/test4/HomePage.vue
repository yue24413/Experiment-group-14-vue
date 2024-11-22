<template>
  <div class="homepage">
    <div class="column left-column">
      <h2>旧十年</h2>
      <div class="rider-list">
        <div class="rider-item">
          <router-link to="/kamen-rider/1">
            <img src="@/assets/test4/kuuga.webp" />
            <br />
            假面骑士 Kuuga
          </router-link>
        </div>
        <div class="rider-item">
          <router-link to="/kamen-rider/2">
            <img src="@/assets/test4/agito.webp" />
            <br />
            假面骑士 Agito
          </router-link>
        </div>
        <div class="rider-item">
          <router-link to="/kamen-rider/3">
            <img src="@/assets/test4/ryuki.webp" />
            <br />
            假面骑士 Ryuki
          </router-link>
        </div>
        <div class="rider-item">
          <router-link to="/kamen-rider/4">
            <img src="@/assets/test4/faiz.webp" />
            <br />
            假面骑士 Faiz
          </router-link>
        </div>
        <div class="rider-item">
          <router-link to="/kamen-rider/5">
            <img src="@/assets/test4/blade.webp" />
            <br />
            假面骑士 Blade
          </router-link>
        </div>
        <div class="rider-item">
          <router-link to="/kamen-rider/6">
            <img src="@/assets/test4/hibiki.webp" />
            <br />
            假面骑士 Hibiki
          </router-link>
        </div>
        <div class="rider-item">
          <router-link to="/kamen-rider/7">
            <img src="@/assets/test4/kabuto.webp" />
            <br />
            假面骑士 Kabuto
          </router-link>
        </div>
        <div class="rider-item">
          <router-link to="/kamen-rider/8">
            <img src="@/assets/test4/den-o.webp" />
            <br />
            假面骑士 Den-O
          </router-link>
        </div>
        <div class="rider-item">
          <router-link to="/kamen-rider/9">
            <img src="@/assets/test4/kiva.webp" />
            <br />
            假面骑士 Kiva
          </router-link>
        </div>
        <div class="rider-item">
          <router-link to="/kamen-rider/10">
            <img src="@/assets/test4/decade.webp" />
            <br />
            假面骑士 Decade
          </router-link>
        </div>
      </div>
    </div>

    <div class="column right-column">
      <h2>新十年</h2>
      <div class="rider-list">
        <div class="rider-item">
          <router-link to="/kamen-rider/11">
            <img src="@/assets/test4/w.webp" />
            <br />
            假面骑士 W
          </router-link>
        </div>
        <div class="rider-item">
          <router-link to="/kamen-rider/12">
            <img src="@/assets/test4/ooo.webp" />
            <br />
            假面骑士 OOO
          </router-link>
        </div>
        <div class="rider-item">
          <router-link to="/kamen-rider/13">
            <img src="@/assets/test4/fourze.webp" />
            <br />
            假面骑士 Fourze
          </router-link>
        </div>
        <div class="rider-item">
          <img src="@/assets/test4/wizard.webp" />
          <br />
          <router-link to="/kamen-rider/14">假面骑士 Wizard</router-link>
        </div>
        <div class="rider-item">
          <img src="@/assets/test4/gaim.webp" />
          <br />
          <router-link to="/kamen-rider/15">假面骑士 Gaim</router-link>
        </div>
        <div class="rider-item">
          <img src="@/assets/test4/drive.webp" />
          <br />
          <router-link to="/kamen-rider/16">假面骑士 Drive</router-link>
        </div>
        <div class="rider-item">
          <img src="@/assets/test4/ghost.webp" />
          <br />
          <router-link to="/kamen-rider/17">假面骑士 Ghost</router-link>
        </div>
        <div class="rider-item">
          <img src="@/assets/test4/exaid.webp" />
          <br />
          <router-link to="/kamen-rider/18">假面骑士 Ex-Aid</router-link>
        </div>
        <div class="rider-item">
          <img src="@/assets/test4/build.webp" />
          <br />
          <router-link to="/kamen-rider/19">假面骑士 Build</router-link>
        </div>
        <div class="rider-item">
          <img src="@/assets/test4/zio.webp" />
          <br />
          <router-link to="/kamen-rider/20">假面骑士 Zi-O</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.homepage {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.column {
  width: 45%;
}

h2 {
  text-align: center;
  font-size: 24px;
  margin-bottom: 20px;
}

.rider-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rider-item {
  background-color: white;
  padding: 25px;
  border-radius: 10px;
  text-align: center;
  margin: 15px 0;
  text-align: center;
}

.rider-item img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
}
h2 {
  color: white;
}
.rider-item a {
  text-decoration: none;
  margin-top: 10px;
  font-size: 16px;
}
</style>
