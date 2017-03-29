import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    todos: [
      // initial state
      {
        task: 'Clean the dishes',
        done: false
      }
    ]
  },
  getters: {
    todoCount (state) {
      return state.todos.length
    },
    hasTodos (state, getters) {
      return getters.todoCount > 0
    }
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push(todo)
    },
    toggleDone (state, index) {
      state.todos[index].done = !state.todos[index].done
    },
    deleteTodo (state, index) {
      state.todos.splice(index, 1)
    }
  }
})

export default store
