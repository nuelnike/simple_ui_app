<template>
  <div class="notification show animate__animated animate__fadeInRightBig animate__faster" :class="notification?.typ">
    <h4 v-if="notification?.typ == 'success'">Success!</h4>
    <h4 v-if="notification?.typ == 'error'">Error!</h4>
    <h4 v-if="notification?.typ == 'info'">Info!</h4>
    <p>{{notification?.msg}}</p>
  </div> 
</template>

<script setup>
import { ref, computed } from "vue";
import { store } from '@/store' 
const notification = computed(() => store().notification); 
</script>
