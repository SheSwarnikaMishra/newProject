import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"
export const database = getDatabase(app);

const firebaseConfig = {
    apiKey: "AIzaSyChTiJUFQMa0-23PWYJkyU9RKT_ZvJRcrs",
    authDomain: "minuszero-database.firebaseapp.com",
    projectId: "minuszero-database",
    storageBucket: "minuszero-database.appspot.com",
    messagingSenderId: "630648358638",
    appId: "1:630648358638:web:4cfffa9301cb40e05e15ff",
    measurementId: "G-XV1PVS0757"
  };



  const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);