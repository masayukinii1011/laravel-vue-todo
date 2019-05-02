<template>
  <div>
      <div class="input-group">
        <input type="text" class="form-control" placeholder="タスクを入力してください" v-model="new_todo">
        <span class="input-group-btn"><button class="btn btn-success" type="button" v-on:click="addTodo">タスクを登録する</button></span>
      </div>
      <table class="table">
        <tr>
          <th>ID</th>
          <th>タスク名</th>
          <th>完了ボタン</th>
				</tr>
    		<tr v-for="todo in todos" v-bind:key="todo.id">
      		<td>{{ todo.id }}</td>
      		<td>{{ todo.title }}</td>
      		<td><button class="btn btn-primary" v-on:click="deleteTodo(todo.id)">完了</button></td>
    		</tr>
      </table>
  </div>
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