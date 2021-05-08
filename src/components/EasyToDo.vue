<template>
  <div class="mt-10 w-96 m-auto">
    <div class="my-10 mr-32 flex justify-center text-center text-2xl">
      <h1 class="font-bold text-green-600 text-center font-sans">Easy</h1>
      <h1 class="font-bold text-grey-700 text-center font-sans">ToDo</h1>
    </div>

    <p>{{ message }}</p>
    <div class="">
      <input
        type="text"
        class="w-48 h-10 border-2 border-transparent rounded-sm"
        placeholder="Enter somthing to do..."
        v-model="newTodo"
      />
      <button
        class="bg-green-600 border-2 rounded-r-lg px-2 w-26 h-10 text-sm text-white"
        @click="addTodo"
      >
        Create To-do
      </button>
    </div>
    <div class="w-72">
      <h5 class="text-left h-4 mt-4 c font-normal text-sm leading-4 font-sans">
        All To-Do's
      </h5>
      <ul v-for="(todo, index) in todos" :key="todo.id">
        <li
          :class="{ completedtask: todo.completed }"
          class="flex justify-between border-2 bg-white rounded-lg w-72 m-auto mt-6 border-transparent"
          :style="todo.completed ? { 'background-color': '#10b981' } : null"
        >
          <div
            v-if="todo.showTemp"
            class="text-center w-18 h-12 bg-green-500"
            @click="completedTask(todo)"
          >
            <div class="p-4">
              <font-awesome-icon :icon="['fas', 'check']" class="text-white" />
            </div>
          </div>
          <div
            class="normal pl-2 pt-2 font-sans overflow-hidden whitespace-nowrap"
          >
            {{ todo.title }}
          </div>

          <div class="flex">
            <div
              v-if="todo.showIcons"
              class="text-left w-18 h-12 bg-green-500"
              @click="completedTask(todo)"
            >
              <div class="p-4">
                <font-awesome-icon
                  :icon="['fas', 'check']"
                  class="text-white"
                />
              </div>
            </div>
            <div
              class="text-center w-18 h-12 bg-red-500"
              @click="removeTodo(index)"
            >
              <div class="p-4">
                <font-awesome-icon
                  :icon="['fas', 'trash-alt']"
                  class="text-white"
                />
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
      isValidationAllowed: false,
      message: '',

      todos: [
        {
          'id': 1,
          'title': 'Finish Vue Screencast',
          'completed': false,
          'showTemp': false,
          'showIcons': true,
        },
        {
          'id': 2,
          'title': 'Take over world',
          'completed': false,
          'showTemp': false,
          'showIcons': true,
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
      if (this.newTodo === '' || this.newTodo === null || this.newTodo.value === 0) {
        this.message = 'Please enter text in text box below';
      }
      else {
        this.message = ''
        this.todos.push({
          id: this.idForTodo,
          title: this.newTodo,
          completed: false,
          showIcons: true,
        })
        this.newTodo = ''
        this.idForTodo++

      }
    },

    removeTodo(index) {
      this.todos.splice(index, 1)
    },
    completedTask(todo) {
      console.log(todo);
      todo.completed = !todo.completed
      todo.showIcons = !todo.showIcons;
      todo.showTemp = !todo.showTemp;

    }
  }

}

</script>

<style>
body {
  background: #f5f5f5;
}
.completedtask {
  background-color: #10b981;
  color: white;
  text-align: left;
  white-space: normal;
  padding: 0px;
  margin: 0px;
  justify-content: left;
}
</style>
