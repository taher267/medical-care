import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyD4TSoJhq9SnNm2agziNBpH-A_o7bLWdAk",
  authDomain: "medical-care-136ef.firebaseapp.com",
  projectId: "medical-care-136ef",
  storageBucket: "medical-care-136ef.appspot.com",
  messagingSenderId: "604806698816",
  appId: "1:604806698816:web:e49d45ecc4c8d57cd7cca5",
  measurementId: "G-12E6B2J81C",
};

// {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID,
//   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
// };
const app = () => initializeApp(firebaseConfig);
export default app;
