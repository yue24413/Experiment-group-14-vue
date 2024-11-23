<script setup lang="ts"></script>



<style typle="style/css">

:root {
  font-family: "Montserrat", sans-serif;
  --body-font: "Montserrat", sans-serif;
  --bs-btn-font-family: "Montserrat", sans-serif;
}
:root {
 --bs-primary: #F38252;
 --bs-primary-rgb: 243, 130, 82;
 --bs-secondary: #598898;
 --bs-secondary-rgb: 89, 136, 152;
 --bs-info-rgb: 13, 202, 240;
 --body-color: #515151;
 --bs-heading-color: #333636;
 --bs-secondary-bg: #F6F6F6;
 --bs-secondary-bg-rgb: 246, 246, 246;
 --bs-primary-bg-subtle: #F6F1ED;
 --bs-link-color: var(--bs-heading-color);
 --bs-link-color-rgb: var(--bs-heading-color);
 --bs-link-hover-color: var(--bs-primary);
 --bs-link-hover-color-rgb: var(--bs-primary-rgb);
 --swiper-theme-color: var(--bs-primary) !important;
 --swiper-pagination-color: var(--bs-primary) !important;
}

body {
font-family: var(--body-font);
font-weight: 400;
font-size: 16px;
color: var(--body-color);
}

.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
text-transform: capitalize;
}

h1 {
font-size: 51px;
font-weight: 600;
font-family: var(--body-font);
}

h2 {
font-size: 39px;
font-weight: 600;
font-family: var(--body-font);
}

h3 {
font-size: 22px;
font-weight: 400;
font-family: var(--body-font);
}

h4 {
font-size: 21px;
font-weight: 600;
font-family: var(--body-font);
}

h5 {
font-size: 18px;
font-weight: 500;
font-family: var(--body-font);
}

h6 {
font-size: 16px;
font-weight: 500;
font-family: var(--body-font);
}

.btn-primary {
font-family: var(--bs-btn-font-family);
--bs-btn-color: #fff;
--bs-btn-bg: var(--bs-secondary);
--bs-btn-border-color: var(--bs-secondary);
--bs-btn-hover-color: #fff;
--bs-btn-hover-bg: var(--bs-primary);
--bs-btn-hover-border-color: var(--bs-primary);
--bs-btn-focus-shadow-rgb: 49, 132, 253;
--bs-btn-active-color: #fff;
--bs-btn-active-bg: var(--bs-primary);
--bs-btn-active-border-color: var(--bs-primary);
text-transform: capitalize;
}

.btn-group-lg>.btn, .btn-lg {
--bs-btn-padding-y: 0.9rem;
--bs-btn-padding-x: 2rem;
}

/* section padding and margin */
.section-padding{
padding-top: 160px;
padding-bottom: 160px;
}
.section-margin{
margin-top: 160px;
margin-bottom: 160px;
}

.navbar {
--bs-navbar-active-color: var(--bs-primary);
}
.nav-link {
letter-spacing: 1px;
}

.swiper-pagination-bullet{
background-color: var(--bs-gray-300);
opacity: 1;
width: 17px;
height: 17px;
}
.swiper-pagination-bullet.swiper-pagination-bullet-active{
background-color: var(--swiper-pagination-color);
}

.site-header {
position: fixed;
top: 0;
background-color: transparent;
width: 100%;
z-index: 999999;
transition: background-color 0.3s ease;
}
.site-header.sticky{
background-color: var(--bs-light);
}
</style>


<template>
<<<<<<< HEAD:src/views/main/test/test3.vue
  <div><h1>test1</h1></div>
=======
  
        <title>奥特曼</title>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="format-detection" content="telephone=no">
        <meta name="apple-mobile-web-app-capable" content="yes">
        <meta name="author" content="">
        <meta name="keywords" content="">
        <meta name="description" content="">    

        <link
        href="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.3.2/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdn.bootcdn.net/ajax/libs/Swiper/9.4.1/swiper-bundle.min.css" />


        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" >
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"> 
    





 <div class="bg-white" data-bs-spy="scroll" data-bs-target="#navbar" data-bs-root-margin="0px 0px -40%" data-bs-smooth-scroll="true" tabindex="0">
        <!--svgs-->
        <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <!--icons-->
            <symbol id="circle" viewBox="0 0 24 24">
                <path fill="#e16029" d="M16.03 10.03a.75.75 0 1 0-1.06-1.06l-4.47 4.47l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z"/>
                <path fill="#e16029" fill-rule="evenodd" d="M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0" clip-rule="evenodd"/>
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="star" viewBox="0 0 512 512">
              <path fill="currentColor" d="M394 480a16 16 0 0 1-9.39-3L256 383.76L127.39 477a16 16 0 0 1-24.55-18.08L153 310.35L23 221.2a16 16 0 0 1 9-29.2h160.38l48.4-148.95a16 16 0 0 1 30.44 0l48.4 149H480a16 16 0 0 1 9.05 29.2L359 310.35l50.13 148.53A16 16 0 0 1 394 480"/>
            </symbol>
        </svg>
        <!--svgs-->

        <header id="header" class="site-header">
          <nav class="navbar navbar-expand-lg px-lg-5">
            <div class="container-fluid py-3">
              <a class="navbar-brand" href="#logo">
                <img src="@/assets/test5/images/Logo.png" alt="Logo">
              </a>
              <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo02">
                <ul class="navbar-nav gap-4 text-end mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active text-uppercase fw-medium" aria-current="page" href="#home">奥特曼</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-uppercase fw-medium" aria-current="page" href="#about">迪迦奥特曼</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-uppercase fw-medium" aria-current="page" href="#features">戴拿奥特曼</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-uppercase fw-medium" aria-current="page" href="#reviews">盖亚奥特曼</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link text-uppercase fw-semibold" aria-current="page" href="#">返回顶层</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>

        <section id="home" class="bg-primary-subtle section-padding pb-5 pb-md-0">
            <div class="container">
              <div class="row g-4 flex-row-reverse align-items-center">
                <div class="col-md-6 text-center">
                    <img src="@/assets/test5/billboard-1.png" class="img-fluid">
                </div>
                <div class="col-md-6">
                  <h1 class="mb-4">
                    奥特曼！！！
                  </h1>
                  <div class="d-flex align-items-center icon mt-2">
                    <svg class="circle" width="22" height="22">
                        <use xlink:href="#circle"></use>
                    </svg>
                    <p class="px-2 mb-0 fw-medium">
                      是由日本“特摄之神”的圆谷英二导演一手创办的“圆谷株式会社”（円谷プロダクション） 自20世纪60年代起推出的科幻题材特摄系列作品
                    </p>
                  </div>
                  <div class="d-flex align-items-center icon mt-2">
                    <svg class="circle" width="22" height="22">
                        <use xlink:href="#circle"></use>
                    </svg>
                    <p class="px-2 mb-0 fw-medium">
                      以1966年的《奥特Q》为首，自同年刚播出的《奥特曼》开始，建立了“巨大英雄与怪兽对战”的模式。
                    </p>
                  </div>
                  <div class="d-flex align-items-center icon mt-2">
                    <svg class="circle" width="22" height="22">
                        <use xlink:href="#circle"></use>
                    </svg>
                    <p class="px-2 mb-0 fw-medium">
                      中国台湾早期则有《飞天超空人》《大超人》《银河飞超人》《超人战士》等译名，后来受中国香港的影响也曾经一度用过《咸蛋超人》的译名。
                    </p>
                 </div>
              </div>
          </div>
        </div>
        </section>

        <section id="about" class="section-padding">
            <div class="container">
               <div class="row align-items-center">
                  <div class="col">
                      <div >
                         <img src="@/assets/test5/product-1.png" class="img-fluid">
                      </div>
                  </div>
                  <div class="col text-start">
                    <div>
                        <h2 class="mb-4">
                            迪迦奥特曼
                        </h2>
                        <p>
                          《迪迦奥特曼》是由日本圆谷株式会社制作，右田昌万编剧，村石宏实执导，由长野博、吉本多香美、高树澪等人主演的特摄片。该片讲述了获得变身光之巨人迪迦奥特曼能力的圆大古，与GUTS并肩作战，保卫人类与地球的故事。《迪迦奥特曼》在1996年9月7日至1997年8月30日在JNN日本新闻网播出，共52集。该剧是“平成系奥特曼”系列首作。
                        </p>
                        <p>
                          人类之间的斗争已经结束，共同面向来自未来的威胁。21世纪初，人类之间的纷争终于结束，世界迎来了和平时期。在这个背景下，一个来自超古代的时间胶囊从宇宙飞驰而来。GUTS在回收这个胶囊以后得知，地球即将面临新的威胁，而能改变这一切的，只有在东北地区“迪迦之地”金字塔中沉睡的巨人。然而，突然出现的怪兽开始了破坏巨人石像的行动。大古队员为了阻止怪兽而陷入危机的时刻，他化为了一道光，进入了一个巨人石像的体内，自此迪迦奥特曼苏醒了过来。
                        </p>
                    </div>
                  </div>
               </div>
            </div>
        </section>

        <section id="features" class="bg-body-secondary py-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-md-6">
                      <h2 class="mb-4">
                        戴拿奥特曼
                      </h2>
                      <p>
                        《戴拿奥特曼》（日文：ウルトラマンダイナ、英文：Urutoraman Daina）是日本圆谷株式会社拍摄，由石井辉仪、小中和哉、原田昌树等人执导，长谷川圭一、吉田伸等人担任编剧，鹤野刚士、布川敏和、齐藤理沙、加濑尊朗、小野寺丈、山田玛利亚等主演的科学空想特摄电视连续剧。
                      </p>

                        <p>
                        该剧故事发生在迪迦消失八年后的2017年，主人公飞鸟信的父亲飞鸟一马是一位宇航飞行员，在飞行中失踪。飞鸟长大后，加入地球和平联合组织TPC，在模拟战争中击败王牌飞行员由美村良，然而此时他却遇到了宇宙球体斯菲亚，虽然他驾驶战机奋力战斗，却寡不敌众。他目睹神秘光芒，成为继大古后第二个光之巨人的人间体。
                      </p>
                    </div>
                    <div class="col-md-6">
                        <img src="@/assets/test5/product-2.png" class="img-fluid">
                    </div>
                </div>
            </div>
        </section>



<section id="reviews" class="section-padding">
          <div class="container">
             <div class="row align-items-center">
                <div class="col">
                    <div >
                       <img src="@/assets/test5/product-9.png" class="img-fluid">
                    </div>
                </div>
                <div class="col text-start">
                  <div>
                      <h2 class="mb-4">
                          盖亚奥特曼
                      </h2>
                      <p>《盖亚奥特曼》是日本圆谷株式会社出品，由小中千秋、长谷川敬一、川上英幸等人担任编剧，村石弘道、高野俊行、原田正树等人执导，吉冈毅志、高野八诚、渡边裕之、桥本爱等人主演的科幻动作剧。
                      </p>
                      <p>
                        21世纪初，研究量子力学的天才高山我梦获得了地球的“光”，变身为盖亚奥特曼，与XIG成员并肩作战。于此同时，另一位名叫藤宫博也的年轻人也获得了地球的“光”，变身蓝色巨人阿古茹。他认为拯救地球的唯一方法就是消灭人类。两位奥特曼因不同的理念而发生了冲突。为了保护地球免遭“根源的破灭招来体”的伤害，两位奥特曼开始了战斗。
                      </p>
                  </div>

                </div>
             </div>
          </div>
      </section>




        <footer>
        <hr class="m-0">
        <div class="footer-bottom container-fluid text-center bg-primary-subtle">
          <div class="copyright py-4">
            <p class="mb-0">© 奥特曼
            </p>
          </div>
        </div>
        </footer>

        <script src="js/jquery-1.11.0.min.js"></script>
        <script
            src="https://cdn.bootcdn.net/ajax/libs/popper.js/2.11.8/umd/popper.min.js"
            integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r"
            crossorigin="anonymous"
        ></script>
        <script
            src="https://cdn.bootcdn.net/ajax/libs/twitter-bootstrap/5.3.2/js/bootstrap.min.js"
            integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+"
            crossorigin="anonymous"
        ></script>
        <script src="https://cdn.bootcdn.net/ajax/libs/Swiper/11.0.5/swiper-bundle.min.js"></script>
        <script type="text/javascript" src="js/script.js"></script>
      </div>

>>>>>>> 5ed22f115321dd274fd7fca08f4f2f54c31b2917:src/views/main/test/test5/IndexView.vue
</template>
