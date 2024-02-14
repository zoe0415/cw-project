
<script setup lang="ts">
defineProps<{
  type: "solid" | "outline",
  text: string,
  size?: "md" | "xl"
  clickFun?: () => any
}>()
</script>

<template>
  <button :class="[type, size]" @click="clickFun">{{ text }}</button>
</template>

<style scoped lang="scss">
@import '@/assets/base.scss';

button {
  padding: 8px 16px;
  border-radius: 46px;
  cursor: pointer;
}
button.md {
  padding: 12px 48px;
}
button.solid {
  color: $white;
  background-color: $orange-dark;
  border: 1px solid $orange-dark;
}
button.solid:hover {
  color: $white;
  background-color: $orange-darker;
  border: 1px solid $orange-darker;
}
button.outline {
  color: $orange-dark;
  border: 1px solid $orange-dark;
  background-color: $white;
}
button.outline:hover {
  color: $white;
  background-color: $orange-dark;
}
</style>
