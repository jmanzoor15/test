<template>
    <div class="bg-white">
        <p>topleague_football-from firebase: {{ topleague_football }}</p> 
        <p>sportsBaseUrl-from firebase: {{ sportsBaseUrl }}</p> 
         <p>api_auth-from firebase: {{ api_auth }}</p> 
   
    </div>
  </template>
  
  <script setup>
  import { getValue, fetchAndActivate } from 'firebase/remote-config';
  //  const { data: matchData } = await useFetch(`/api/test`);

  const nuxtApp = useNuxtApp();
  const remoteConfig = nuxtApp.$remoteConfig;
  
  const topleague_football = ref({});
  const sportsBaseUrl = ref('');
  const api_auth = ref({});

  
   fetchAndActivate(remoteConfig)
  .then(() => {
      const value = getValue(remoteConfig, 'topleague_football');
      topleague_football.value = JSON.parse(value._value).data;
      const value1 = getValue(remoteConfig, 'sportsBaseUrl');
      sportsBaseUrl.value = value1._value;
      const value2 = getValue(remoteConfig, 'api_auth');
      api_auth.value = JSON.parse(value2._value);
    }) .catch ((err) => {
      console.error('Error fetching remote config:', err);
    });
  


  
  </script>
  

  <style scoped>
 
          
  </style>