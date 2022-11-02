import {initializeApp} from "firebase/app";
import {getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider,
    createUserWithEmailAndPassword,
signInWithEmailAndPassword} from "firebase/auth"

    import {
        getFirestore,
        doc,
        getDoc, //get document data (access the document data)
        setDoc, //set document data (set document data)
    } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCcBHERc-uDHW6Lxiv1MLb7u-SuqA6EHjA",
    authDomain: "react-course-project-2fa10.firebaseapp.com",
    projectId: "react-course-project-2fa10",
    storageBucket: "react-course-project-2fa10.appspot.com",
    messagingSenderId: "104507902759",
    appId: "1:104507902759:web:a934d7f45d77399f26f702"
  };
  
  // Initialize Firebase
  const firebaseapp = initializeApp(firebaseConfig);
  const googleprovider=new GoogleAuthProvider();
  const facebookprovider= new FacebookAuthProvider();
  facebookprovider.setCustomParameters({
    prompt:"select_account"
  });

  googleprovider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth=getAuth();

  //we call it sign in with google because provider here is the googleprovider, 3ashan feeh other providers
//   like facebook masalan we beyb2a esmaha FacebookAuthprovider().
  export const signInWithGooglePopup=() => signInWithPopup(auth,googleprovider);
  export const signinWithGoogleRedirect=()=> signInWithRedirect(auth,googleprovider);

  export const signInWithFacebookPopup=()=>  signInWithPopup(auth,facebookprovider);

  export const db=getFirestore();

  export const createUserDocumentFromAuth=async(
    userAuth,
    otherprops)=>{

        const userDocRef=doc(db,'Project Users',userAuth.uid);

        // console.log(userDocRef);

        const userSnapShot=await getDoc(userDocRef);
        // console.log(userSnapShot.exists());

        if(!userSnapShot.exists()){
            const {displayName,email}=userAuth;
            const createdAt=new Date();
            try {
                await setDoc(userDocRef,{
                    email,
                    createdAt,
                    ...otherprops,
                });
            } catch (error) {
                console.log("error creating user",error.message);
            }
        }
        
        return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword= async (email,password) => {
        if (!email || !password) {
            return;
        }

        return await createUserWithEmailAndPassword(auth,email,password);
  }

  export const signinAuthUserWithEmailAndPassword= async (email,password) => {
    if (!email || !password) {
        return;
    }

    return await signInWithEmailAndPassword(auth,email,password);
}