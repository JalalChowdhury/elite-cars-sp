import { useState, useEffect } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup, updateProfile, getIdToken, signOut } from "firebase/auth";
import initializeFirebase from '../Pages/Login/Firebase/firebase.initialize';
import { supabase } from '../DB/supabaseClient';


// initialize firebase app
initializeFirebase();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);



    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = { email, displayName: name };
                setUser(newUser);
                // save user to the database
                saveUser(email, name);

                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
                logout();
                history.replace('/login');
            })
            .catch((error) => {
                setAuthError(error.message);
                // console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    const checkUserAbailability = async (email) => {
        console.log("ck email ", email);
        let { data, error } = await supabase
            .from("users")
            .select("*")
            .eq('email', email)
        if (error) {
            console.log("error", error);
        }
        else {
            console.log("data from supabase", data);
            if (data.length === 0) {
                return false;
            }
            else return true;

        }
    }
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then(async (result) => {

                console.log("result : ", result);
                const userData = result.user;
                let { data, error } = await supabase
                    .from("users")
                    .select("*")
                    .eq('email', userData.email)
                if (error) {
                    console.log("error", error);
                }
                else {
                    console.log("data from supabase", data);
                    if (data.length === 0) {
                        saveUser(userData.email, userData.displayName);
                    }
                   
                }
                //   if(checkUserAbailability(userData.email)===false){
                //     saveUser(userData.email, userData.displayName);
                //   }
                console.log("ck avail ", checkUserAbailability(userData.email));
                setAuthError('');
                const destination = location?.state?.from || '/';
                history.replace(destination);
            }).catch((error) => {
                setAuthError(error.message);
            }).finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])
    // try no.-1-->Sol
    const fetchAdmin = async () => {
        let { data, error } = await supabase
            .from("users")
            .select("*")
            .match({
                email: user.email,
                role: "admin"
            })
        if (error) {
            console.log("error", error);
        }
        else {
            console.log(data);
            if (data.length >= 1) {
                setAdmin(true);
            }
            else{
                setAdmin(false)
            }
            console.log("Check Admin", admin);

        }
    };
    useEffect(() => {
        fetchAdmin();
    }, [user.email])




    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    // try no.-2
    const saveUser = async (email, displayName) => {
        const user = { email, displayName };
        let { data, error } = await supabase
            .from("users")
            .insert(user)
            .single();
        if (error) {
            console.log(error);
        }
        else {
            alert("Login Successfully");
        }
    }
    // try no.-1-->Sol

    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        signInWithGoogle,
        logout,
    }
}

export default useFirebase;