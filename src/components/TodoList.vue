<template>
  <div class="mt-3">
    <div v-if="hasTodos">
      <small class="text-muted todo-count">Todo Count: {{ todoCount }}</small>
      <ul class="list-group">
        <todo-item v-for="(todo, index) in todos" :todo="todo" :index="index"></todo-item>
      </ul>
      <label class="mt-3 text-muted">
        <input type="checkbox" v-model="showRawData">
        Show Raw Data
      </label>
      <pre class="mt-3" v-show="showRawData"><code>{{ todos }}</code></pre>
    </div>
    <!-- if no todos -->
    <div v-else>
      <p>Add Some todos!</p>
    </div>
  </div>
</template>

<script>
import store from '../store'
import TodoItem from './TodoItem'

export default {
  name: 'TodoList',
  components: { TodoItem },
  data () {
    return {
      showRawData: false
    }
  },
  computed: {
    todos: () => store.state.todos,
    hasTodos: () => store.getters.hasTodos,
    todoCount: () => store.getters.todoCount
  }
}
</script>

<style>
  .todo-count {
    display: block;
    margin-bottom: .25rem;
  }

  pre {
    background: #f5f5f5;
    border: 1px solid #ddd;
    padding: 1rem;
    border-radius: 3px;
  }
</style>
