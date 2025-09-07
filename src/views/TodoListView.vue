<template>
  <div id="todoListPage" class="bg-half">
    <nav>
      <h1><a href="#">ONLINE TODO LIST</a></h1>
      <ul>
        <li class="todo_sm">
          <a href="#"><span>王小明的代辦</span></a>
        </li>
        <li><a href="#loginPage">登出</a></li>
      </ul>
    </nav>
    <div class="conatiner todoListPage vhContainer">
      <div class="todoList_Content">
        <TodoFrom @add-todo="addTodo" />
        <TodoList v-if="todos.length" :todos="todos" @remove-todo="removeTodo" />
        <p v-else>尚無待辦事項</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import TodoFrom from '@/components/TodoFrom.vue'
import TodoList from '@/components/TodoList.vue'
import { ref } from 'vue'

const todos = ref([
  { id: 1, content: '把冰箱發霉的檸檬拿去丟', status: false },
  { id: 2, content: '打電話叫媽媽匯款給我', status: true },
])

const addTodo = (content) => {
  if (content.trim() !== '') {
    todos.value.push({
      id: Date.now(),
      content,
      status: false,
    })
  }
}

const removeTodo = (id) => {
  todos.value = todos.value.filter((item) => item.id !== id)
}
</script>
