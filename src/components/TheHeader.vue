
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import IconCross from './icons/IconCross.vue'
import IconHamburger from './icons/IconHamburger.vue'
import TheSearchBar from './TheSearchBar.vue'
import TheButton from './button/TheButton.vue'
import TheAD from '@/components/TheAD.vue'

const tab = ref([
  {
    text: '康健',
    url: '/'
  },
  {
    text: '大人社團',
    url: '/'
  },
  {
    text: '康健知識庫',
    url: '/'
  },
  {
    text: '康健線上學習',
    url: '/'
  },
  {
    text: '康健嚴選',
    url: '/'
  },
  {
    text: '康健出版',
    url: '/'
  },
  {
    text: '康健影音',
    url: '/'
  },
  {
    text: '書香花園',
    url: '/'
  }
])
const isShowMenu = ref<boolean>(false)
const header = ref<HTMLElement | null>(null);
const showMobileSearchBarHeight = ref<number>(0)
const isShowMobileSearchBar = ref<boolean>(false)
const isShowLine = ref<boolean>(true)

const toggleMenu = () => {
  isShowMenu.value = !isShowMenu.value
}
const handleShowMobileSearchBar = () => {  
  const width: number = window.innerWidth
  const PCWidth: number = 1024
  const scrollY: number = window.scrollY
  if ((width < PCWidth) && (showMobileSearchBarHeight.value) < scrollY) {
    isShowMobileSearchBar.value = true
    isShowMenu.value = false
  }else {
    isShowMobileSearchBar.value = false
  }
}

onMounted(() => {
  if (header.value) {
    showMobileSearchBarHeight.value = header.value?.getBoundingClientRect().top
  }
});

window.addEventListener("scroll", handleShowMobileSearchBar);

</script>

<template>
  <nav>
    <ul>
      <li v-for="(item, index) in tab" :key="index">
        <RouterLink :to="item.url">{{ item.text }}</RouterLink>
      </li>
    </ul>
  </nav>

  <header ref="header">
    <section class="pc-header">
      <div class="left">
        <button v-if="isShowMenu" class="toggle-menu-btn" @click="toggleMenu"><IconCross /></button>
        <button v-else class="toggle-menu-btn" @click="toggleMenu"><IconHamburger /></button>
        <div class="logo">LOGO</div>
        <TheAD size="sm" content="327*28" />
      </div>
      <TheSearchBar />
      <div class="member">
        <p>會員限定</p>
        <TheButton text="登入" type="outline" />
        <TheButton text="加入會員" type=solid />
      </div>
    </section>

    <section class="mobile-header">
      <section v-if="isShowMobileSearchBar" class="mobileSearchBar">
        <TheSearchBar 
          :inputFocusFun="() => isShowLine = false" 
          :inputBlurFun="() => isShowLine = true"
        />
        <div v-if="isShowLine" class="join-line">加入 LINE</div>
      </section>

      <div v-else class="item">
        <div class="flex">
          <button v-if="isShowMenu" class="toggle-menu-btn" @click="toggleMenu"><IconCross /></button>
          <button v-else class="toggle-menu-btn" @click="toggleMenu"><IconHamburger /></button>
          <div class="logo">LOGO</div>
        </div>
        <TheButton text="登入" type="outline" />
      </div>
    </section>

    <section v-if="isShowMenu" class="menu-wrap">
      <TheAD size="sm" content="327*28" class="md-ad" />
      MENU
    </section>
  </header>

</template>

<style scoped lang="scss">
@import '@/assets/base.scss';

nav {
  padding: 4px 0;
  background-color: $brown;
  ul {
    max-width: $xl;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    a {
      color: $white;
      text-decoration: none;
    }
  }
  @include pc{
    display: none;
  }
}
header {
  padding: 8px;
  position: sticky;
  top: 0;
  height: $header-height;
  background-color: $white;
  border-bottom: 1px solid $gray;
  z-index: 2;
  .pc-header {
    margin: 0 auto;
    max-width: $xl;
    display: grid;
    align-items: center;
    grid-template-columns: 3fr 3fr 2fr;
    gap: 48px;
    @include pc{
      display: none;
    }
    .left {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .member {
      display: flex;
      align-items: center;
      justify-content: end;
      gap: 8px;
    }
  }
  .mobile-header {
    display: none;
    align-items: center;
    @include pc{
      display: block;
    }
    .item {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .flex {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .mobileSearchBar {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .join-line {
    font-size: 12px;
    text-align: center;
    color: white;
    width: 80px;
    height: 25px;
    margin-left: 8px;
    line-height: 25px;
    border-radius: 10px;
    background-color: $green;
  }
  }
  .menu-wrap {
    position: absolute;
    top: $header-height;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: $gray-light;
    .md-ad {
      display: none;
      @include pc{
        display: block;
      }
    }
  }
}

.toggle-menu-btn {
  cursor: pointer;
  background-color: inherit;
  border: none;
}


.logo {
  padding: 10px 32px;
  color: $white;
  background-color: $black;
}
.ad-sm {
  width: 327px;
  height: 28px;
  background-color: $gray;
}
</style>
