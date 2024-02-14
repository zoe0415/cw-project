<script setup lang="ts">
type itemType = {
  id: string,
  name: string,
  description: string,
  url: string,
  category: string,
  language: string,
  country: string,
  pic: string,
}
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCards, Pagination, Navigation} from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';
// import { getData } from '@/API/api'
import TheButton from '@/components/button/TheButton.vue'
import IconArrowLeft from '@/components/icons/IconArrowLeft.vue'
import IconArrowRight from '@/components/icons/IconArrowRight.vue'

const activeSlideIndex = ref<number>(0)
const list = ref<itemType[]>([
   {
      "id":"cbc-news",
      "name":"CBC News",
      "description":"CBC News is the division of the Canadian Broadcasting Corporation responsible for the news gathering and production of news programs on the corporation's English-language operations, namely CBC Television, CBC Radio, CBC News Network, and CBC.ca.",
      "url":"http://www.cbc.ca/news",
      "category":"general",
      "language":"en",
      "country":"ca",
      "pic":"https://picsum.photos/768/432"
   },
   {
      "id":"financial-post",
      "name":"Financial Post",
      "description":"Find the latest happenings in the Canadian Financial Sector and stay up to date with changing trends in Business Markets. Read trading and investing advice from professionals.",
      "url":"https://financialpost.com",
      "category":"business",
      "language":"en",
      "country":"ca",
      "pic":"https://picsum.photos/768/432"
   },
   {
      "id":"google-news-ca",
      "name":"Google News (Canada)",
      "description":"Comprehensive, up-to-date Canada news coverage, aggregated from sources all over the world by Google News.",
      "url":"https://news.google.com",
      "category":"general",
      "language":"en",
      "country":"ca",
      "pic":"https://picsum.photos/768/432"
   },
   {
      "id":"the-globe-and-mail",
      "name":"The Globe And Mail",
      "description":"The Globe and Mail offers the most authoritative news in Canada, featuring national and international news.",
      "url":"https://www.theglobeandmail.com",
      "category":"general",
      "language":"en",
      "country":"ca",
      "pic":"https://picsum.photos/768/432"
   }
])
const handleSlideChange = (swiper: any) => {
  activeSlideIndex.value = swiper.activeIndex
}
const goRead = () => {
  window.open(list.value[activeSlideIndex.value].url, '_blank')
}
// const handleGetData = () => {
//   getData({
//     apiKey: 'c2a498d47fa6425dbc71eb697f10448a',
//     country: 'ca'
//   })
//   .then((res) => {
//     console.log('res::', res)
//     list.value = res.map((item) => {
//       return {...item, pic: "https://picsum.photos/768/432"}
//     })
//     console.log('list.value::', JSON.stringify(list.value))
//   })
// }

// handleGetData()

</script>

<template>
  <main>
    <section class="banner">
      <section class="text-wrap">
        <div class="tag-wrap">
          <p class="solid">{{ list[activeSlideIndex].category }}</p>
          <p>#{{ list[activeSlideIndex].category }}</p>
        </div>
        <h1>{{ list[activeSlideIndex].description }}</h1>
        <div class="btn-wrap"><TheButton text="立即閱讀" type="outline" size="md" :clickFun="goRead" /></div>
      </section>

      <section class="img-wrap">
        <swiper
          :effect="'cards'"
          :navigation="{
            enabled: true,
          }"
          :cardsEffect="{
            perSlideOffset: 5, 
          }"
          :grabCursor="true"
          :pagination="{
            enabled: true,
            bulletActiveClass: 'swiper-bullet-active'
          }"
          :modules="[Navigation, Pagination, EffectCards]"
          :onSlideChange="((swiper) => handleSlideChange(swiper))"
        >
          <swiper-slide v-for="(item, index) in list" :key="index">
            <img :src="item.pic" :alt="item.name">
          </swiper-slide>
        </swiper>
      </section>
    </section>
  </main>
</template>

<style scoped lang="scss">
@import '@/assets/base.scss';
@import '@/assets/swiper111.scss';

main {
  min-height: 120vh;
  max-width: $xl;
  margin: 48px auto 0;
}
.banner {
  display: flex;
  justify-content: space-between;
  @include pc{
    flex-wrap: wrap;
  }
  .text-wrap {
    position: relative;
    margin: 32px 0;
    width: 40%;
    @include pc {
      width: 100%;
      order: 2;
    }
    h1 {
      @include text-xl;
      @include three-ellipsis;
      @include pc {
        margin: 16px 0 80px;
      }
    }
    .tag-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
      color: $brown;
      .solid {
        padding: 4px 12px;
        color: $white;
        border-radius: 12px;
        background-color: rgba(34, 34, 34, 0.6);
      }
    }
    .btn-wrap {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
    }
  }
  .img-wrap {
    width: 55%;
    @include pc {
      width: 100%;
      order: 1;
    }
  }
}
</style>
