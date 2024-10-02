import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAkistPxXirW_WuGEt_ImD4fsLj1-3xppU',
  authDomain: 'todosapp-7200a.firebaseapp.com',
  projectId: 'todosapp-7200a',
  storageBucket: 'todosapp-7200a.appspot.com',
  messagingSenderId: '541066359506',
  appId: '1:541066359506:android:4a0449af3ce8aba1d9730b',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
