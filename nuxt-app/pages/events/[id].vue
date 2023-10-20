<!-- Uses [] to create dynamic routes and put inside the parameter that we want to catch and this parameter it's going to pass inmediately through the root -->
<!-- 
<script setup>
  const route = useRoute();
  console.log(route.params.id);
</script> 
It is used to catch the route params, the useRoute method is auto imported
-->
<!-- useNuxtApp give us access to the current context, provides a way to acces shared runtime context of Nuxt, which is avaliable on both client and server side -->
<script setup>
const nuxt = useNuxtApp();
console.log(nuxt);
</script>

<template>
  <div>event id: {{ $route.params.id }}</div>
</template>
