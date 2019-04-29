<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
  <head>
    <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="csrf-token" content="{{ csrf_token() }}">
      <link rel="stylesheet" href="{{ mix('css/app.css') }}">
      <title>Laravel</title>
  </head>
  <body>
    <div id="app">
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
      		<td>@{{ todo.id }}</td>
      		<td>@{{ todo.title }}</td>
      		<td><button class="btn btn-primary" v-on:click="deleteTodo(todo.id)">完了</button></td>
    		</tr>
			</table>
      <!-- <router-view></router-view> -->
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
  </body>
</html>
