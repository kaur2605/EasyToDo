<template>
  <div class="mt-10 w-96 m-auto">
    <div class="my-10 flex justify-center text-2xl">
      <h1 class="font-bold text-green-600 text-center">Easy</h1>
      <h1 class="font-bold text-grey-700 text-center">ToDoApp</h1>
    </div>
    <div class="">
      <input
        type="text"
        class="w-48 h-8 border-2"
        placeholder="What needs to be done"
        v-model="newTodo"
      />
      <button
        class="bg-green-600 border-2 rounded-sm px-2 w-26 h-8 text-sm"
        @click="addTodo"
      >
        Create To-do
      </button>
    </div>
    <div class="w-72">
      <h5 class="text-left h-4 mt-2 c font-normal text-sm leading-4">
        All To-Do's
      </h5>
      <ul
        v-for="(todo, index) in todos"
        :key="todo.id"
        class="flex justify-between border-2 rounded-lg w-72 m-auto mt-6"
      >
        <li :class="{ todo__item__toggle: todo.completed }">
          {{ todo.title }}
          <div class="flex justify-between">
            <div>
              <button
                class="mt-1 w-4 h-4 ml-2 pl-2"
                type="checkbox"
                @click="completeTask(todo)"
              >
                <div class="">
                  <font-awesome-icon :icon="['fas', 'check']" />
                </div>
              </button>
            </div>
            <div class="ml-3 w-8 h-8 bg-red-500" @click="removeTodo(index)">
              <div class="p-2 pb-4">
                <font-awesome-icon :icon="['fas', 'trash-alt']" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EasyToDo',
  data() {
    return {
      newTodo: '',
      idForTodo: 3,
      completed: false,
      beforeEditCache: '',
      filter: 'all',
      todos: [
        {
          'id': 1,
          'title': 'Finish Vue Screencast',
          'completed': false,
          'editing': false,
        },
        {
          'id': 2,
          'title': 'Take over world',
          'completed': false,
          'editing': false,
        },
      ]
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim().length == 0) {
        return
      }
      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false,
        editing: false,
      })
      this.newTodo = ''
      this.idForTodo++
    },

    removeTodo(index) {
      this.todos.splice(index, 1)
    },
    isCompleted(todo) {
      return todo.completed;
    },
    completeTask(todo) {
      console.log(todo);
      todo.completed = !todo.completed

    }
  }

}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 120px;
}

.todo__item__toggle {
  cursor: pointer;
  width: 100%;
  text-align: left;
  background-color: lightgreen;
}
</style>
