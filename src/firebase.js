import { initializeApp } from "firebase/app"

import {
  getAuth
} from "firebase/auth"

import {
  getFirestore
} from "firebase/firestore"

const firebaseConfig = {

  apiKey: "AIzaSyC3e60F4fOs-VfAZ31K1zPoN3GxDiZi4fc",

  authDomain: "web-app-6bc4e.firebaseapp.com",

  projectId: "web-app-6bc4e",

  storageBucket: "web-app-6bc4e.firebasestorage.app",

  messagingSenderId: "738429688523",

  appId: "1:738429688523:web:17043a41b705eb907ad94e",

  measurementId: "G-FS7ME49XQ1"

}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)

export const db = getFirestore(app)