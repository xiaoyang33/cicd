<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="~@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- <div class="ball">
    <div class="point"></div>
  </div> -->
  <HelloWorld msg="Vite + Vue" />
  <button @click="handleClick">点击</button>
  <div>{{ state.arr }}</div>
  <div>{{ a }}</div>
</template>
<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue';
import { reactive, effect, ref } from 'vue';

const state = reactive({ arr: [1, 2, 3] });
const a = ref(123);
const handleClick = () => {
  state.arr = [123];
  // a.value = a.value + 1;
};

effect(() => {
  // console.log(a.value);
  console.log(state.arr);
});
</script>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
@keyframes moveY {
  to {
    transform: translateY(300px);
  }
}

@keyframes moveX {
  to {
    transform: translateX(-200px);
  }
}
.ball {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  animation: moveY 0.8s cubic-bezier(0.86, -0.68, 0.8, 0.91) infinite;
}
.point {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: red;
  animation: moveX 0.8s linear infinite;
}
</style>
