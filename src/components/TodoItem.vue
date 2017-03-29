<template>
  <li class="list-group-item todo-item">
    <a href="javascript:void(0)" @click="toggleDone()" :class="{ 'done' : todo.done }">
      {{ todo.task }}
    </a>
    <!-- right -->
    <div>
      <button type="button" class="btn btn-danger btn-sm" @click="deleteTodo()">Delete</button>
    </div>
  </li>
</template>

<script>
import store from '../store'

export default {
  props: ['todo', 'index'],
  methods: {
    toggleDone () {
      store.commit('toggleDone', this.index)
    },
    deleteTodo () {
      store.commit('deleteTodo', this.index)
    }
  }
}
</script>

<style>
  .todo-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #666;
  }

  .todo-item:hover, .todo-item:focus {
    color: #444;
  }

  .todo-item .done {
    text-decoration: line-through;
    color: green;
  }

  button {
    cursor: pointer;
  }

  a:hover, a:focus {
    text-decoration: none;
  }
</style>
