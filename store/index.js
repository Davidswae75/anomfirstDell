//     import  { db, auth }  from '@/firebase/fireAll'
//     import { addDoc, collection, getDocs, } from 'firebase/firestore'

// export const state = () => ({
//     user: false,
//     loading: false,
//     alert: false,
//     alertT: '',
// })

// export const getters = {
//     changesStates(state){
//         return state.alert 
//     },
//     changeText(state){
//         return state.alertT
//     }
// }
// export const mutations = {
//     userChange(state, payloadU){
//         state.user = payloadU;

//     },
//     loadingChange(state, payloadL){
//         state.loading = payloadL
//         console.log(payloadL)
//     },
//     alertChange(state){
//         state.alert = !state.alert
//     },
//     alertText(state, { msg }){
//         state.alertT = msg
//         console.log(msg)
//     }
// }
// export const actions = {
//     settingDoc({dispatch, commit, state}, payload){
//         commit('loadingChange',  true, )
//             console.log('this is an action')
//         commit('alertChange')
//         console.log(state.alert)
//         commit('alertText', {msg: 'this is awesome and very awesome indeed'});
        
//     }
// }