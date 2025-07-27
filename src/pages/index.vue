<template>
  <NuxtLayout name="auth">
    <div class="card">
      <h2>My TODO List</h2>

      <div class="todo-form">
        <input type="text" id="newItem" placeholder="What do you need to do?" v-model="newTask" @keyup.enter="addTodo" />
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

      <p v-if="todos.length === 0" class="text-center text-danger animate__animated animate__fadeIn">No tasks available, create new task.</p>
      <div class="card-footer">
        <p v-if="todos.length > 0"><button type="button" id="clearBtn" class="animate__animated animate__fadeIn" @click="clearItems">Clear items</button></p> <br/>
        <p><button type="button" id="logoutBtn" @click="doLogout">Logout</button></p>
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
    store().showNotification({"typ": "success", "msg":'Item added successfully'});
    newTask.value = ''
  }

  const clearItems = () => {
    store().clearTodos();
    store().showNotification({"typ": "success", "msg":'All items cleared successfully'});
  }

  const deleteTodo = (i) => {
    todos.value.splice(i, 1);
    store().showNotification({"typ": "success", "msg":'item removed successfully'});
  };
  const doLogout = () => {
    store().doLogout();
    store().showNotification({"typ": "success", "msg":'logout was successfully'});
  }
  
</script>