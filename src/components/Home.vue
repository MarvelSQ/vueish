<template>
  <div>this is repos from {{ name }}</div>
  <ul>
    <li v-for="item in data" v-bind:key="item.name">
      <a v-bind:href="item.html_url">{{ item.name }}</a>
    </li>
  </ul>
</template>

<script lang="ts">
import { onMounted, onUpdated, ref, watch } from '@vue/runtime-core';
import repos, { ReposType } from '../store/repos';
export default {
  setup() {
    const name = ref('MarvelSQ');
    const data = ref([] as ReposType);
    async function fetchUser(value: string) {
      data.value = await repos(value);
    }
    // mounted
    onMounted(() => {
      console.log('Component is mounted!');
      fetchUser(name.value);
    });
    // updated
    onUpdated(() => {
      console.log('Component is updated');
    });
    watch(name, fetchUser);
    return {
      name,
      data,
    };
  },
};
</script>

<style></style>
