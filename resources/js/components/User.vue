<template>
    <div>
        <p>User</p>
        <p>I'm a user component.</p>
        <router-view></router-view>
        <router-link to="/user/profile">Go to Profile</router-link>
        <router-link to="/user/posts">Go to Posts</router-link>
        <router-link to="/">Go to Example</router-link>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
