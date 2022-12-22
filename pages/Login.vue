<template>
    <div class="bg-trans" style="">
        <daveAnom/>
        <dave-inst/>

        <div>
            <VRow justify="center">
                <VCol cols="9" class="my-3" style="border: 1px solid black; border-image: linear-gradient(90deg, purple,red) 1">
                    <VForm lazy-validation ref="form" v-model="valid" >
                    
                        <VCol cols="12">
                            <VTextField
                                    v-model="Email"
                                    label="Creature's Email"
                                    placeholder="this is a trial placeholder"
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
                            <VBtn block :loading="loadingL" :disabled="loadingL" @click="loginIn" class="pink lighten-4 text-uppercase grey--text font-weight-thin rounded-md" height="40" depressed dark>Login Heathen</VBtn>
                        </VCol>
                        
                    </VForm>
                    <VCol cols="12" class="text-center">
                        <span class="white--text">
                            Create an account <nuxt-link class="text-decoration-none" to="/register">here</nuxt-link>
                        </span>
                    </VCol>
                </VCol>
            </VRow>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
    data(){
        return{
            icon: true,
            valid: true,
            Email: '',
            emailRules: [v => !!v || 'dont stress me mate'],
            Password: '',
            passwordRules: [v => !!v && v.length > 6 || 'haha'],
        }
    },
    computed:{
        ...mapGetters({ loadingL : 'authentication/Loading'})
    },
    methods: {
        ...mapActions({ login : 'authentication/loginAccount', submitissh : 'authentication/submitissh'}),
        loginIn(){
            console.log('at the top')
            this.$refs.form.validate()
            if(this.$refs.form.validate()){
                const payload = {
                    email : this.Email,
                    password : this.Password
                }
                this.login(payload)
                console.log('from the login component')
                this.submitissh()
            }else{
                this.submitissh()
            }
        }
    }
}
</script>

<style>

</style>