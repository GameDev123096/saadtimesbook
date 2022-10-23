import firebase from 'firebase'
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyAvY3H-VQzMTjCQNXOgfCUt8_5tsCuHqPU",
  authDomain: "wlib-a0dea.firebaseapp.com",
  databaseURL: "https://wlib-a0dea-default-rtdb.firebaseio.com",
  projectId: "wlib-a0dea",
  storageBucket: "wlib-a0dea.appspot.com",
  messagingSenderId: "996092245156",
  appId: "1:996092245156:web:627705df8de81a13b9a231"
};
// Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 export default firebase.firestore();