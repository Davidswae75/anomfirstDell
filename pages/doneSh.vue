<template>
  <div class="bg-trans d-flex align-center">
    <VRow justify="center" style="" align="center">
        <VCol cols="10">
            <VCard color="#ffffff48" class="d-flex align-center" min-height="300px"  flat>
                <VCardText class="text-h3 white--text text-center">
                    Your shits is sent <br>
                    Thanks mate
                </VCardText>
            </VCard>
        </VCol>
        <VCol cols="10">
            <VBtn @click="goback" block class="pink lighten-4 text-uppercase rounded-md" height="40" depressed dark>write more heathen</VBtn>
        </VCol>
        <VCol cols="10">
            <VBtn @click="Logout" block color="pink lighten-4" depressed outlined class="text-uppercase rounded-md" height="40">Get out</VBtn>
        </VCol>
     

    </VRow>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        ...mapActions({ logoutD : 'authentication/loggingOut'}),
        Logout(){
            this.logoutD()
        },
        goback(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>

</style>