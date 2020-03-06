import app from 'firebase/app';
import 'firebase/auth';
const config = {
  apiKey: ' AIzaSyBNG1Z77PsiOycZF1r-vNTkypDJs5o2KOc',
  authDomain:  'centroanfibios.firebaseapp.com ',
  databaseURL:  'https://centroanfibios.firebaseio.com" ',
  projectId:  'centroanfibios ',
  storageBucket: ' centroanfibios.appspot.com" ',
  messagingSenderId:  '158858035191'

};
class Firebase {
  constructor() {
    app.initializeApp(config);
      this.auth = app.auth();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);


  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}
export default Firebase;