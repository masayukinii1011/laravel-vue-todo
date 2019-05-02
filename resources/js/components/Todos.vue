<template lang="pug">
div
  div.input-group
    input.form-control(type="text" placeholder="タスクを入力してください" v-model="new_todo")
    span.input-group-btn
      button.btn.btn-success(type="button" v-on:click="addTodo") タスクを登録する
    table.table
      tr
        th ID
        th タスク名
        th 完了ボタン
      tr(v-for="todo in todos" v-bind:key="todo.id")
        td {{ todo.id }}
        td {{ todo.title }}
        td
          button.btn.btn-primary(v-on:click="deleteTodo(todo.id)") 完了
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