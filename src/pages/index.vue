<template>
  <NuxtLayout name="auth">
    <div class="card">
      <h2>My TODO List</h2>

      <div class="todo-form">
        <input type="text" placeholder="What do you need to do?" v-model="newTask" @keyup.enter="addTodo" />
      </div>

      <div class="todo-list">
        <div class="todo-item animate__animated animate__fadeIn animate__faster" v-for="(todo, i) in todos" :key="i">
          <div class="todo-left">
            <input type="checkbox" v-model="todo.done" />
            <span :class="todo?.done ? 'strike' : null">{{ todo.item }}</span>
          </div>
          <div class="todo-right">
            <button @click="deleteTodo(i)">&times;</button>
          </div>
        </div>
      </div>

      <p v-if="todos.length === 0" class="text-center text-danger">No tasks available, create new task.</p>

      <div class="card-footer">
        <p><button type="button" @click="doLogout">Logout</button></p>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { store } from '@/store'

  const newTask = ref('') 
  const todos = computed(() => store().todos);

  const addTodo = () => {
    if (!newTask.value.trim()) return store().showNotification({"typ": "error", "msg":'Enter text to add item'});
    store().addTodo(newTask.value.trim());
    newTask.value = ''
  }

  const deleteTodo = (i) => todos.value.splice(i, 1);
  const doLogout = () => store().doLogout()
  
</script>