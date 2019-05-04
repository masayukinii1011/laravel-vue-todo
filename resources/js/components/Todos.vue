<template lang="pug">
div
  div.input-new-wrap
    input(type="text" placeholder="Enter your todo." v-model="new_todo")
    p.float-btn.add-btn(type="button" v-on:click="addTodo") Add Todo
  table
    tr
      th No.
      th Todo
      th
    tr(v-for="todo in todos" v-bind:key="todo.id")
      td {{ todo.id }}
      td {{ todo.title }}
      td
        p.float-btn.ok-btn(v-on:click="deleteTodo(todo.id)") OK
</template>

<script>
import axios from 'axios'

export default {
  data: () => {
    return {
      new_todo: '',
      todos: []
    }
  },
  methods: {
    fetchTodos() {
      axios.get('/api/get').then((res) => {
        this.todos = res.data
      })
    },
    addTodo() {
      axios.post('/api/add', {
        title: this.new_todo
      }).then((res) => {
        this.todos = res.data
        this.new_todo = ''
      })
    },
    deleteTodo: function (task_id) {
      axios.post('/api/del', {
        id: task_id
      }).then((res) => {
        this.todos = res.data
      })
    }
  },
  created() {
    this.fetchTodos()
  },
}
</script>

<style lang="scss">
.input-new-wrap {
  display: flex;
  justify-content: space-between;
  margin-bottom:40px;

  input {
    padding:6px;
    font-size:20px;
    width:80%;
    border-radius:4px;
    border:2px solid #ccc;
    background:#fdfdfd;
  }
}

th,td {
  font-size:20px;
}

.float-btn {
  cursor:pointer;
  color: #fff;
  text-transform:uppercase;
  border-radius: 8px;
  font-size: 20px;
  display: inline-block;
  padding: 12px 16px;
  transition: .2s ease-out;
  box-shadow: 0 2px 1px 0 rgba(0,0,0,0.14), 0 3px 0px -2px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.2);

  &:hover {
    box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.14), 0 4px 1px -2px rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.2);
    transform: scale(1.04);
  }

  &:active {
    transform: translateY(2px);
  }

  &.add-btn {
    background:#2196f3;

    &:hover {
      background:#1976d2;
    }

    &:active {
      color:#4caf50;
    }
  }

  &.ok-btn {
    background:#ff5722;
    margin:8px 16px;
    padding: 10px 14px;
    font-size:20px;

    &:hover {
      background:#e64a19;
    }
    
    &:active {
      color:#ab47bc;
    }
  }
}
</style>