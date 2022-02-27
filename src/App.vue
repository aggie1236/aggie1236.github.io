<template>
  <div>
    <div
      class="nav bg-sky-800 z-10 text-white flex align-center items-center bg-gradient-to-br from-sky-800 to-sky-200 justify-center right-0 text-right pr-12"
    >
      <div>
        <div class="text-4xl border-b pb-2 border-white md:text-6xl">
          Aggie Chen
        </div>
        <div class="pt-2">aggie.chen.1212@gmail.com</div>
      </div>
    </div>
    <div
      class="fixed w-full top-0 left-0 h-screen bg-gradient-to-br from-sky-200 z-111"
    >
      <div class="bgStyle">
        <div class="circle bg-blue-200 rounded-full md:rounded-none"></div>
      </div>
    </div>
    <div class="bg-white pt-20 md:py-20">
      <div class="container mx-auto p-10">
        <div
          class="text-3xl mb-10 font-bold text-sky-700 border-b border-sky-700 inline-block"
        >
          About
        </div>
        <div class="text-sm leading-6">
          <p v-for="t in about" :key="t" class="pb-5">{{ t }}</p>
        </div>
      </div>
    </div>
    <div ref="region" class="py-20">
      <div class="p-10 basis-full container m-auto">
        <div
          class="text-3xl mb-10 font-bold text-sky-700 border-b border-sky-700 inline-block"
        >
          Skills
        </div>
        <div class="mt-4">
          <span
            v-for="skill in skills"
            :key="skill"
            class="font-bold px-4 py-1 m-1 rounded-full inline-block bg-white text-sky-700 shadow"
            >{{ skill }}</span
          >
        </div>
      </div>
    </div>
    <div class="bg-white text-left text-sm">
      <div class="container mx-auto pl-10 pr-4 py-20">
        <div class="text-center">
          <div
            class="text-3xl mb-10 font-bold text-sky-700 border-b border-sky-700 inline-block"
          >
            Experience
          </div>
        </div>

        <div class="border-l-2 border-gray-300 pl-10">
          <div class="h-card relative mb-10 relative">
            <div
              class="border border-sky-800 text-sky-800 font-bold py-1 px-4 mb-2 text-sm inline-block text-white rounded-full"
            >
              Jan. 2018 - now
            </div>
            <!-- <div
              @click="popupShow"
              class="float ml-2 inline-block px-6 py-1 border rounded-full cursor-pointer font-bold text-sm bg-sky-800 hover:bg-sky-600 text-white transition-colors"
            >
              Portfolio
            </div> -->
            <div class="text-md mb-4">
              一零四資訊科技股份有限公司 前端工程師
            </div>
            <div class="mb-1 font-bold">104人力銀行網站</div>
            <div class="mb-4 text-md">
              主要使用前端框架VueJS、Vuex，因需要相容IE，仍使用Vue2版本，CSS架構是基於boostrap上，自訂使用。
            </div>
            <div class="mb-4 text-md">其餘也有維運舊系統需求使用JQuery。</div>

            <div class="mb-1 font-bold">內部系統</div>
            <div class="mb-4 text-md">
              外部單位支援，使用前端框架VueJS、Vuex，SPA表單權限申請查詢系統。
            </div>

            <div class="mb-1 font-bold">Star兒童活動網站</div>
            <div class="mb-4 text-md">
              使用前端框架VueJS、Vuex、Nuxt，目前已下線。
            </div>
            <div class="">
              <span
                v-for="skill in job['104'].skill"
                :key="skill"
                class="text-sm px-2 mr-2 mb-1 rounded-full inline-block border text-gray-600 shadow"
                >{{ skill }}</span
              >
            </div>
          </div>

          <div class="h-card relative mb-6">
            <div
              class="border border-sky-800 text-sky-800 font-bold py-1 px-4 mb-2 text-sm inline-block text-white rounded-full"
            >
              May. 2015 - Oct. 2017
            </div>
            <div class="text-md mb-4">創鈺國際科技 網頁設計師</div>
            <div class="mb-4">
              接案公司，以政府專案為大宗，前後端不分離，無使用框架，僅有使用JQuery，工作包含視覺設計/平面設計/前端架設。
            </div>
            <div class="">
              <span
                v-for="skill in job['cr'].skill"
                :key="skill"
                class="text-sm px-2 mr-2 mb-1 rounded-full inline-block border text-gray-600 shadow"
                >{{ skill }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="md:flex work-cont text-white text-lg cursor-pointer">
        <div
          class="w-full items-center justify-center flex overflow-hidden h-52"
          @click="openPop('job')"
        >
          <div class="absolute top-0 left-0 w-full h-full">
            <img src="./assets/images/job.png" alt="" />
          </div>
          <div class="relative z-10">104人力銀行網站</div>
        </div>
        <div
          class="w-full items-center justify-center flex overflow-hidden h-52"
          @click="openPop('dataprotal')"
        >
          <div class="absolute top-0 left-0 w-full h-full">
            <img src="./assets/images/dataprotal.png" alt="" />
          </div>
          <div class="relative z-10">內部權限申請表單系統</div>
        </div>
        <div
          class="w-full items-center justify-center flex overflow-hidden h-52"
          @click="openPop('chat')"
        >
          <div class="absolute top-0 left-0 w-full h-full">
            <img src="./assets/images/chat.png" alt="" />
          </div>
          <div class="relative z-10">即時聊天室</div>
        </div>
      </div>
    </div>
    <PopupContainer v-show="popName" @close="popName = null">
      <component :is="popName" />
    </PopupContainer>
  </div>
</template>

<script>
import Job from "./components/Job.vue";
import Dataprotal from "./components/Dataprotal.vue";
import Chat from "./components/Chat.vue";
import PopupContainer from "./components/PopupContanier.vue";
export default {
  name: "App",
  components: { PopupContainer, Job, Dataprotal, Chat },
  data() {
    return {
      isPopupShow: false,
      popName: null,
      portfolio: {
        104: [
          {
            title: "104人力銀行網站",
            component: "job",
          },
          {
            title: "內部系統",
            component: "dataprotal",
          },
          {
            title: "即時聊天室",
            component: "chat",
          },
        ],
      },
      isScroll: false,
      skills: [
        "HTML",
        "CSS",
        "SCSS",
        "Vue",
        "Vuex",
        "Vue-CLI",
        "Bootstrap",
        "Webpack",
        "JQuery",
        "Git",
        "Nuxt",
        "Storybook",
      ],
      about: [
        `目前在一零四資訊科技股份有限公司擔任前端工程師，維護與開發人力銀行求職者端網站開發，
        主要使用前端框架VueJS、Vuex，因需要相容IE，仍使用Vue2版本。其餘也有維運舊系統需求，使用JQuery。`,
        `工作內容包含功能的擴充、A/B Test實作、營運調整、SEO實作、元件維護、Storybook文件製作，
        也參與開發新專案，估工時、拆項目、跨單位合作實作設計稿和後端溝通API需求並串接上線。`,
        `(另身兼飲料股長之職維繫夥伴上班的快樂泉源)`,
        `開發流程由PM制定規格後，設計師出稿，可行性評估後排程實作，進測試機後由QA完成驗收後上線。`,
      ],
      job: {
        104: {
          name: "一零四資訊科技股份有限公司",
          skill: [
            "Vue",
            "Vuex",
            "Vue-CLI",
            "SCSS",
            "Bootstrap",
            "Webpack",
            "JQuery",
            "Git",
            "Storybook",
            "Nuxt",
          ],
        },
        cr: {
          skill: ["JQuery", "Photoshop", "Illustrator", "CSS", "HTML"],
        },
      },
    };
  },
  mounted() {
    document.addEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      this.isScroll = window.scrollY !== 0;
    },
    popupShow() {
      this.isPopupShow = true;
    },
    openPop(name) {
      this.popName = name;
      this.popupShow();
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #565656;
}
img {
  max-width: 100%;
}
</style>

<style scoped>
.container {
  max-width: 800px;
}
.nav {
  padding: 20px;
  height: 80vh;
  text-align: center;
}
.nav.active {
  height: 48px;
  padding: 20px;
  font-size: 24px;
  text-align: right;
}
.h-card::before {
  content: "";
  width: 30px;
  height: 30px;
  position: absolute;
  border-radius: 10px;
  left: -56px;
  background-color: #97c0ff;
  border: 9px solid #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
.work-cont > div {
  position: relative;
}
.work-cont img {
  transition: transform 0.2s;
}
.work-cont > div::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: rgba(5, 56, 89, 0.6);
  z-index: 1;
}
.work-cont > div:hover img {
  transform: scale(1.1);
}
.work-cont > div:hover::before {
  background: rgba(5, 86, 119, 0.6);
}
</style>
