<template>
  <div>
    <div class="input-group">
      <input type="text" class="form-control" placeholder="Add a todo" @keyup.enter="addTodo()" v-model="task">
      <span class="input-group-btn">
        <button type="button" class="btn btn-primary" @click="addTodo()">Add Todo</button>
      </span>
      <p class="text-danger" v-if="error">Cannot submit empty tasks!</p>
    </div>
  </div>
</template>

<script>
import store from '../store'
import Todo from '../models/todo'

export default {
  data () {
    return {
      task: '',
      error: false
    }
  },
  methods: {
    addTodo () {
      this.error = false
      let task = this.task
      if (task.length > 0) {
        store.commit('addTodo', new Todo(task))
        this.task = ''
      } else {
        this.error = true
      }
    }
  }
}
</script>
