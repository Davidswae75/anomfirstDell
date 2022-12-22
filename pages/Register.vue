<template>
    <div class="bg-trans" style="height: 100vh; width: 100%">
        <daveAnom/>
        <dave-inst/>

        <div>
            <VRow justify="center">
                <VCol cols="9" class="my-3" style="border: 1px solid black; border-image: linear-gradient(90deg, purple,red) 1">
                    <VForm lazy-validation ref="form" v-model="valid" >
                        <VCol cols="12">
                            <VTextField
                                    v-model="Name"
                                    label="Creature's Name"
                                    :rules="nameRules"
                                    color="#DDD8D8"
                                    filled
                                    class="rounded-t-lg"
                                    />
                        </VCol>
                        <VCol cols="12">
                            <VTextField
                                    v-model="Email"
                                    label="Creature's Email"
                                    :rules="emailRules"
                                    color="#DDD8D8"
                                    filled
                                    class="rounded-t-lg"
                                
                                    />
                        </VCol>
                        <VCol cols="12">
                            <VTextField
                                    v-model="Password"
                                    label="Creatures Password"
                                    :rules="passwordRules"
                                    color="#DDD8D8"
                                    filled
                                    class="rounded-t-lg"
                                    :type="icon ? 'password' : 'text'"
                                    :append-icon="icon ? 'mdi-eye' : 'mdi-eye-off'"
                                    @click:append="icon = !icon"
                                    />
                        </VCol>
                        <VCol cols="12">
                            <VBtn block :loading="loadingR" :disabled="loadingR" @click="settingDoc" class="pink lighten-4 text-uppercase rounded-md" height="40" depressed dark>Register Heathen</VBtn>
                        </VCol>
                        
                    </VForm>
                    <VCol cols="12" class="text-center">
                        <span class="white--text">
                            Already signed in, login in <nuxt-link class="text-decoration-none" to="/login">here</nuxt-link>
                        </span>
                    </VCol>
                </VCol>
            </VRow>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
export default {
    data(){
        return{
            icon: true,
            valid: true,
            Name: '',
            nameRules: [v => !!v || 'just put anything.. i dont care'],
            Email: '',
            emailRules: [v => !!v || 'dont stress me mate'],
            Password: '',
            passwordRules: [v => !!v && v.length > 6 || 'hehe'],
        }
    },
    computed: {
        ...mapGetters({ loadingR : 'authentication/Loading'})
    },
    methods:{
        ...mapActions({creating: 'authentication/createAccount', submitissh : 'authentication/submitissh'}),
        settingDoc(){
            this.$refs.form.validate()
            if(this.$refs.form.validate()){
                const payload = {
                    name: this.Name,
                    email: this.Email,
                    password: this.Password,
                }
                this.creating(payload)
                this.submitissh()
            }else{
                this.submitissh()
            }
        },
        resetV(){
            this.$refs.form.resetValidation()
        },
        clearV(){
            this.$refs.form.reset()
        }
    }
  
}
</script>

<style>

</style>