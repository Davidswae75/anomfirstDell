import { db, auth } from '@/firebase/fireAll'
import { collection, getDocs, getDoc, updateDoc, doc, deleteDoc, onSnapshot, addDoc, query, where, orderBy } from 'firebase/firestore'

export const state = () => ({
    alerts : {
        PopUp : false,
        text : ''
    },
    loading : false,
    comments : [],


})

export const getters = {
    changingPopUp(state){
        return state.alerts.PopUp
    },
    changingText(state){
        return state.alerts.text
    },
    changingLoading(state){
        return state.loading
    },
    gettingComments(state){
        return state.comments
    },
  
}
export const mutations = {
    PopUpChange(state){
        state.alerts.PopUp = !state.alerts.PopUp
    },
    TextChange(state, { texts }){
        state.alerts.text = texts
    },
    LoadingChange(state){
        state.loading = !state.loading
    },
    getComment(state, comments){
        state.comments.push(comments)
    },

}
export const actions = {
    changePop({dispatch, commit, state}){
        commit('PopUpChange')
        commit('TextChange', { texts : `You can move on now can't you....and you should`})
    },
    async addComments({dispatch, commit, state}, { comment, params }){
        commit('LoadingChange')
        const colref = collection(db,'isshes')
        const currentUserDoc = doc(db, 'users', )
          
    
        
        await addDoc(colref, {
            Comment : comment,
        })
        .then(() => {
            this.$router.push("/doneSh")
            console.log(comment, 'and i have added this document')
            console.log(state.loading)
         
            setTimeout(() => {
                commit('LoadingChange')
                commit('PopUpChange')
            }, 2000);
        })
    },
    async getComments({dispatch, commit, state}){
        const colref = collection(db, 'isshes')
        onSnapshot(colref, (snapshots => {
            snapshots.docs.forEach(doc => {
                const currentDocComment = doc.data().Comment
                const docRef = doc.id
                
                if(currentDocComment){
                    commit('getComment', currentDocComment)

                }
                console.log(currentDocComment)
            })
        }))
    },

       
}