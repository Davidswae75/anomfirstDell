<template>
    <div class="bg-trans d-flex flex-column align-start">
        <VRow justify="end">
            <VBtn color="success" @click="logout">logout</VBtn>
            <VCol cols="9" justify-content="end">
                <VAlert
                    class="mr-2"
                    min-width="10px"
                    :value="changes"
                    border="left"
                    color="pink lighten-2"
                    dismissible
                    fade-transition
                    prominent
                    transition="fade-transition"
                >
                    <!-- You can move on now can't you....and you should -->
                    {{ text }}
                </VAlert>
            </VCol>
           </VRow>
     <VRow justify="center" align="start" class="mt-n16">
         <VCol cols="9" align-self="start">
             <VCard color="#ffffff48" class=" " flat>
                 <VCardText class="text-h4 text-center font-weight-bold">
                   <span class="textD">Your issh</span>
                 </VCardText>
             </VCard>
         </VCol>
         <VCol cols="12" align="center">
            <VForm
            lazy-validation
            ref="form"
            v-model="valid"
            >
            <VCol cols="11">
             <VTextarea
             v-model="texting"
             color="#ffffff48"
             flat
             outlined
             clearable
             height="200px"
             label="Put in your lil isshes"
             :rules="textingRules"
             counter
             />
         </VCol>
         <VCol cols="8" >
             <VBtn block @click="submitting" :loading="loading" :disabled="loading" depressed height="40" class="pink lighten-4 text-uppercase font-weight-thin grey--text" dark>submit heathen</VBtn>
         </VCol>
            </VForm>
         </VCol>
     </VRow>
    </div>
 </template>
 
 <script>
 import { mapActions, mapGetters, mapMutations } from 'vuex';
 export default {
 data(){
     return{
         valid: true,
         texting: '',
         textingRules: [v => !!v && v.length > 25 || 'keep on writing BS'],
         paramUrl: this.$route.params.id
        }
    },
    computed: {
        ...mapGetters({ changes : 'fireData/changingPopUp', loading : 'authentication/Loading', text : 'fireData/changingText' })
    },
    methods:{
       ...mapActions({ submitissh : 'authentication/submitissh', changePop : 'fireData/changePop', logoutIss : 'authentication/loggingOut', addComments : 'fireData/addComments'} ),
       submitting(){
       this.$refs.form.validate()
       if(this.$refs.form.validate()){
        this.changePop()
        const payload = {
            comment : this.texting,
            params : this.paramUrl,
        }
        this.addComments(payload)
        this.close()
        this.submitissh()
       }else{
           this.submitissh()
       }

       },
       logout(){
        this.logoutIss()
       },
       close(){
        this.$refs.form.reset()
       }
    }
 
 }
 </script>
 
 <style>
 .textD{
     color: #DDD8D8;
   }
 </style>