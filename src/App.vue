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
            <div class="mb-1 font-bold">網站維運</div>
            <div class="mb-4 text-md">
              主要維運104求職者網站，會有新舊專案的擴充調整需求，例如因詐騙案例需要新增提示字語／其他104子網導流曝光／搜尋條件加上捷運站／UX的相關ABTest／SEO調整等
              。
            </div>
            <div class="mb-1 font-bold">新專案開發</div>
            <div class="mb-4 text-md">
              近期參與新鮮人首頁專案開發，工期約兩個月，前端2人後端2人，負責架構規劃討論和搜尋主體的切版和串接，主要著重在於複用搜尋欄，還有配置每個component職責。
            </div>
            <div class="mb-4 text-md">
              內部系統：前端3人後端2人，時間三個月，是支援外部單位專案，主要負責共用元件設計與實作。
            </div>
            <div class="mb-4 text-md">
              其他專案如工作頁／公司列表／公司頁／外籍人士專區等，專案均如期如質上線。
            </div>
            <div class="mb-1 font-bold">A/B Test</div>
            <div class="mb-4 text-md">
              例如有想針對導流做介面效果的A/B
              Test，實作之後觀察導流效果決定是否繼續擴充使用範圍。
            </div>
            <div class="mb-1 font-bold">Storybook文件</div>
            <div class="mb-4 text-md">
              因為過去常發生相似元件但被重複開發的狀況，且團隊成員並不會主動寫相關文件，常常是在開會的時候必須要特別告知才有機會被複用，所以我會主動製作元件相關文件，提供團隊成員快速瀏覽既有元件並重複使用，最後也默默成為元件小精靈，團隊成員有需求就會直接找我。
            </div>
            <div class="mb-4 text-md">
              另外也有發現類似圖片散落在各處的狀況，但沒有一個能夠直接瀏覽的地方，而且現在多用svg，即便在專案資料夾點開也可能只是一段程式碼，讓尋找變成很花時間的事情，所以這部分就一起整併進去storybook中，並告知團隊成員有可以查找的地方。
            </div>
            <div class="mb-1 font-bold">程式監測</div>
            <div class="mb-4 text-md">
              埋設Rollbar監測工具，並持續追蹤專案容易遇到的錯誤，同步給團隊成員。
            </div>
            <div class="mb-1 font-bold">Git上版流程調整</div>
            <div class="mb-4 text-md">
              因現有流程造成準備時間太久，且專案時間跨度太長也不能保證上線時，想要上線的內容是正確的，針對這部分有提出修改方案，第一階段的修改版本先以無痛轉換的方式大幅降低準備時間和車長交接成本。
            </div>
            <div class="mb-1 font-bold">與後端協作</div>
            <div class="mb-4 text-md">
              守望相助，因為會有很多舊專案沒有前後分離，或是過去和現在的做法不同，所以有些東西是放在前端還是後端會不太清楚，例如過去的SEO資料寫在後端，但後來使用prerender.io，就把SEO改放在前端，這時候PM想要改某一段的內容，就會需要先由其中一端去查，沒查到就要請另一邊查。
            </div>
            <div class="mb-1 font-bold">與設計協作</div>
            <div class="mb-4 text-md">
              常常在過稿或是開發中發現相似元件不統一的問題，有些人的做法是直接照著做，我傾向是和設計確認情境之後，再繼續開發，有時候也會是設計師之間沒有同步的情況。
              也有
              遇到設計師沒有考慮到的情境，例如手機和電腦的搜尋流程因為UI不同，會有不一樣的操作和資料處理，就也需要向PM和設計師確認流程。
              到了驗收階段，設
              計師會依照設計稿來做驗收，有誤的地方提出後修改，有時候會因為響應式設計會有尺寸對不上的狀況，就會需要和設計師溝通釐清。
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
        // `開發流程由PM制定規格後，設計師出稿，可行性評估後排程實作，進測試機後由QA完成驗收後上線。`,
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
