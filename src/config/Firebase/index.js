import {getAuth, initiallizeApp} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBsIrrKgnCqn55jrCgiYh-EV-wQmrBvDTg',
  authDomain: 'mydoctor01-bcdae.firebaseapp.com',
  projectId: 'mydoctor01-bcdae',
  storageBucket: 'mydoctor01-bcdae.appspot.com',
  messagingSenderId: '401762625647',
  appId: '1:401762625647:web:79b2b05b8071a23535059a',
};

const Fire = initiallizeApp(firebaseConfig);
const Auth = getAuth(Fire);
export default Auth;

// firebase.initializeApp({
//   apiKey: 'AIzaSyBsIrrKgnCqn55jrCgiYh-EV-wQmrBvDTg',
//   authDomain: 'mydoctor01-bcdae.firebaseapp.com',
//   projectId: 'mydoctor01-bcdae',
//   storageBucket: 'mydoctor01-bcdae.appspot.com',
//   messagingSenderId: '401762625647',
//   appId: '1:401762625647:web:79b2b05b8071a23535059a',
// });
