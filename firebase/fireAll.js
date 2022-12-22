import { initializeApp } from 'firebase/app'
import { 
    getAuth,
} from 'firebase/auth'
import {
    getFirestore,
} from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBAByFByPMR_xxIsWy3m3MxlnVjJ8-ix-g",
    authDomain: "anom-dd01a.firebaseapp.com",
    projectId: "anom-dd01a",
    storageBucket: "anom-dd01a.appspot.com",
    messagingSenderId: "1069610467905",
    appId: "1:1069610467905:web:474009c00b951aacc57cc0"
  };

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);
export const db = getFirestore(app)


