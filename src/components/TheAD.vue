
<script setup lang="ts">
defineProps<{
  size: "sm" | "md" | "lg",
  content: string,
}>()
</script>

<template>
  <section class="AD" :class="size">
    {{ content }}
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/base.scss';

.AD {
  display: flex;
  align-items: center;
  justify-content: center;
  color: $white;
  background-color: $gray;
}
.AD.lg {
  margin: 16px auto;
  max-width: 970px;
  height: 250px;
  width: 80%;
}
.AD.sm {
  margin: 0 auto;
  width: 327px;
  height: 28px;
  border-radius: 12px;
}
</style>
