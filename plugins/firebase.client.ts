import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getRemoteConfig, getValue, fetchAndActivate } from "firebase/remote-config"
// import Services from '~/services'


export default defineNuxtPlugin((nuxtApp) => {
    const config = useRuntimeConfig()
        //  console.log('config',config)
    const firebaseConfig = {
        
  apiKey: "AIzaSyAlsYgQM_Cx6JLGqiYKi3b7MPj9dzz5QHo",
  authDomain: "onescore---sports-live-score.firebaseapp.com",
  projectId: "onescore---sports-live-score",
  storageBucket: "onescore---sports-live-score.appspot.com",
  messagingSenderId: "823355145417",
  appId: "1:823355145417:web:cdaa7d856abeef0321a118",
  measurementId: "G-NWW2160ZLM",

    };

    const app = initializeApp(firebaseConfig)
   
    const auth = getAuth(app)
    const remoteConfig = getRemoteConfig(app);

    fetchAndActivate(remoteConfig)
    .then(() => {
     
          const value = getValue(remoteConfig, 'topleague_football' );
             console.log(value)
    })  
    .catch((err) => {
      // Handle any errors here
    });

    
    nuxtApp.vueApp.provide('auth', auth)
    nuxtApp.provide('auth', auth)
     
    nuxtApp.vueApp.provide('remoteConfig', remoteConfig)
    nuxtApp.provide('remoteConfig', remoteConfig)


      // Set Remote Config settings
    remoteConfig.settings = {
        fetchTimeoutMillis: 60 * 1000, // 1 minute in milliseconds
        minimumFetchIntervalMillis: 15 * 60 * 1000, // 15 minutes in milliseconds
    }
  
        // remoteConfig.defaultConfig = Services;


})