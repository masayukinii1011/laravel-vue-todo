<template>
    <div>
        <p>Example</p>
        <p>I'm an example component.</p>
        <router-link to="/user">Go to User</router-link>
        
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
