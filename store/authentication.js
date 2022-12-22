import  { db, auth }  from '@/firebase/fireAll'
import { addDoc, collection, getDocs, setDoc, doc, updateDoc} from 'firebase/firestore'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'



// for the original state value of the webapp
export const state = () => ({
    user : false,
    loading: false,
})

// for the transferring the state's properties values to the outside code
export const getters = {
    Loading(state){
        return state.loading
    }
}


// for the changing the state properties values a
export const mutations = {
    changeLoadingState(state){
        state.loading = !state.loading
    }
}

// for changing the state properties values and unlike the mutations, the action can perform asynchronous task
export const actions = {
    async createAccount({ dispatch, commit, state }, { name, email, password}){
 
        await createUserWithEmailAndPassword(auth, email, password).then(cred => {
            console.log(cred.user.uid, 'this is for register')

            // generating the document of a user through his/her uid from firebaseAuth
            const currentUserDoc = doc(db,'users', cred.user.uid)
            
            // setting a doc for the user that creates a account
            setDoc(currentUserDoc, {
                Name : name,
                Email : email,
                Password : password,
                role: 'user',
                uid : cred.user.uid
            })
            
            // change the routes to the issh page for user to send their isshes and attaching their document uid to the url
            this.$router.push(`/issh/${cred.user.uid}`);
        })
        .catch(err => {
            console.log(err.message)
        })
           
          
    },
    async loginAccount({ dispatch, commit, state}, { email, password}){

        await signInWithEmailAndPassword(auth, email, password).then(cred => {
            console.log(cred.user.uid, 'this is for login')
            console.log('from the vuex')

            this.$router.push(`/issh/${cred.user.uid}`)

        })
        .catch(err => {
            console.log(err.message)
        })
    }, 
    
    async loggingOut(){
        signOut(auth).then(() => {
            console.log('user is signed out')
            this.$router.push("/Login")
        })
    },
    submitissh({dispatch, commit, state}){
        commit('changeLoadingState')
        setTimeout(() => {
            commit('changeLoadingState')
        }, 2000);
    },
    // checkingUser({ dispatch, commit, state}){
    //     const currentUserDoc = doc(db, 'users', )
    //     currentUserDoc.exists
    // }
}