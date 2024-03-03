import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCW7ak72pYs8x44qbpvT_pXPt4mpAtly68",
  authDomain: "vue-project-a0012.firebaseapp.com",
  databaseURL: "https://vue-project-a0012-default-rtdb.firebaseio.com",
  projectId: "vue-project-a0012",
  storageBucket: "vue-project-a0012.appspot.com",
  messagingSenderId: "171813944208",
  appId: "1:171813944208:web:f5645557a71f5bc1ca1115"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;