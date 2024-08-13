import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDSjzpeQ1WCL0Q7gqnngJXuLitbapRqFNQ',
  authDomain: 'blog-pires.firebaseapp.com',
  projectId: 'blog-pires',
  storageBucket: 'blog-pires.appspot.com',
  messagingSenderId: '668609647251',
  appId: '1:668609647251:web:9ce9294ee46e309893b366',
  measurementId: 'G-3CYVV2C6MG',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, app };
