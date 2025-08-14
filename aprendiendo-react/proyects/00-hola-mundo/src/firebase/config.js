import { initializeApp } from "firebase/app"


const firebaseConfig = {
  apiKey: "AIzaSyBl6-TGcNEJbZlpuIIKu2eLi91Ldv-Hgro",
  authDomain: "siembra-db.firebaseapp.com",
  projectId: "siembra-db",
  storageBucket: "siembra-db.firebasestorage.app",
  messagingSenderId: "571473982087",
  appId: "1:571473982087:web:7bb27a0af5f3e20576fe22"
};

export const app = initializeApp(firebaseConfig)
