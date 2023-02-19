import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config =  {
  apiKey: "AIzaSyCcnC8kh87I3vF7W7Zgop3-MWk7EJoNU6o",
  authDomain: "netflixclonereact-16051.firebaseapp.com",
  projectId: "netflixclonereact-16051",
  storageBucket: "netflixclonereact-16051.appspot.com",
  messagingSenderId: "459685917841",
  appId: "1:459685917841:web:38a618bc6d703aa2043b30",
  measurementId: "G-3NMYQWWPMR"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment
// this so you don't get duplicate data

export { firebase };
