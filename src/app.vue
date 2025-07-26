<template>
 <div>
    <toast v-if="notification?.active" />
    <NuxtLayout v-if="isAuthenticated">
        <NuxtPage />
    </NuxtLayout>
    
    <NuxtLayout v-if="!isAuthenticated">
        <NuxtPage :key="$route.fullPath" />
    </NuxtLayout> 
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { store } from "@/store";
import { isEmpty } from "@/utils";

const isAuthenticated = computed(() => store().isAuthenticated);
const notification = computed(() => store().notification);
const todos = computed(() => store().todos);

if(!isAuthenticated) navigateTo({path: '/auth/login'})
else navigateTo({path: '/'});

const initializeApp = async () => { 
  let friuts = ["Mango", "Pear", "Pineapple", "Orange", "Lemon"]
  for (let i = 0; i < 5; i++) store().addTodo("This is "+friuts[i]);
};

onMounted(() => {
  if(isEmpty(todos.value)) initializeApp();
})


</script>
