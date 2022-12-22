<template>
    <div class="bg-trans d-flex flex-column justify-center align-center">
  

        <div style="width: 100%; overflow: visible">
            <VRow justify="center" style="">
                <VCol cols="10">
                    <VCard color="#ffffff48" class="d-flex align-center" min-height="100px"  flat>
                        <VCardText class="text-h3 white--text text-center">
                            Anomalies
                        </VCardText>
                    </VCard>
                </VCol>
            </VRow>
                <VRow justify="center">
                    <VCol cols="10" style="min-height: 500px; border: 1px solid black; background :#ffffff48;  border-image: linear-gradient(90deg, purple,red) 1">
                        <VRow justify="center">
                            <VCol cols="10" v-for="(doci, i) in gettingComments" :key="i" > 
                                <VCard color="grey lighten-3" class="d-flex align-start rounded-lg carding" min-height="100px"  flat>
                                    <VCardText class="text-h6 grey--text text-start">
                                       <span>
                                        {{ doci }}
                                       </span>
                                    </VCardText>
                                    <span class="spa red--text d-flex align-center justify-center">
                                       <v-icon class="" @click="deleted(doci)" fab icon>mdi-close</v-icon>
                                    </span>
                                </VCard>
                            </VCol>
                         
                        </VRow>
                    </VCol>
                </VRow>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data(){
        return{
            alert: true,
        }
    },
    computed: {
        ...mapGetters({ gettingComments : 'fireData/gettingComments'})
    },
    async created(){
        await this.getComments()
    },
    methods: {
        ...mapActions({ getComments : 'fireData/getComments', deletingDoc : 'fireData/deletingDoc'}),
        deleted(doc){
            this.deletingDoc(doc)
        }
    }
}
</script>

<style scoped>
.red{
    overflow: visible;
}

</style>