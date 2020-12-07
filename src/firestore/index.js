
import firebase from "firebase";
// import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
  };

firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();



const firestore = {
    add : (address) => {
        console.log('add: ', address);
        return new Promise(resolve => {
            db.collection("addresses").add({
                name: "Ada Lovelace",
                addressLine: "1234 Here Lane",
                city: "Oakland",
                state: "CA",
                zipCode: "12323"
            })
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
                resolve(docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
                resolve(error);
            });
        })
    }
}

export default firestore;