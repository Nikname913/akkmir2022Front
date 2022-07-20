import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDt04jrKR4PZM7Tr8XLrcrb1-JYATFc17Q",
  authDomain: "akkmir2022.firebaseapp.com",
  projectId: "akkmir2022",
  storageBucket: "akkmir2022.appspot.com",
  messagingSenderId: "815736325778",
  appId: "1:815736325778:web:7dbf48dd14ceac8096c84b"
}

const FBapp = initializeApp(firebaseConfig)
export default FBapp