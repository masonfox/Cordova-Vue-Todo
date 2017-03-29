<template>
  <div class="row">
    <div class="col-xs-12 col-md-6 offset-md-3">
      <todo-input></todo-input>
      <todo-list></todo-list>
    </div>
  </div>
</template>

<script>
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

export default {
  name: 'Todo',
  components: {
    TodoInput,
    TodoList
  }
}
</script>
