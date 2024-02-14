
<script setup lang="ts">
import IconSearch from './icons/IconSearch.vue'
defineProps<{
  inputFocusFun?: () => void,
  inputBlurFun?: () => void,
}>()

</script>

<template>
  <section class="search-bar">
    <select>
      <option value="all">全部</option>
      <option value="1">選項一</option>
      <option value="2">選項二</option>
      <option value="3">選項三</option>
    </select>
    <div class="line"></div>
    <div class="input-search">
      <input type="text" placeholder="請輸入關鍵字" @focus="inputFocusFun" @blur="inputBlurFun">
      <IconSearch />
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/base.scss';

input ,
select {
  border: none;
}
input {
  width: 100%;
}
input:focus {
  outline: none;
}
.search-bar {
  width: 100%;
  padding: 4px 8px;
  display: flex;
  align-items: center;
  border: 1px solid $gray;
  border-radius: 20px;
  .line {
    margin: 0 8px;
    width: 1px;
    height: 20px;
    background-color: $gray;
  }
  .input-search {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>

