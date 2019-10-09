<template>
    <div class="collapseitem">
        <div class="colltitle" @click="isopen">{{title}}</div>
        <div class="collcontent" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'Ocollapseitem',
    props:{
        title:{
            type:String,
            required:true
        },
        name:{
            type:String,
            required:true
        }
    },
    data(){
        return {
            open:false
        }
    },
    inject:['eventBus'],
    methods:{
        isopen(){
            if(this.open){
                this.eventBus.$emit('removename',this.name)
            }else{
                this.eventBus.$emit('addname',this.name)
            }
        }
    },
    mounted(){
         this.eventBus && this.eventBus.$on('selectname', (names) => {
        if (names.indexOf(this.name) >= 0) {
          this.open = true
        } else {
          this.open = false
        }
      })
    }
}
</script>

<style scoped lang="scss">
    .colltitle{
        padding: 0.5em 1em;
    }
    .collcontent{
        padding: 0.5em 1em;
        text-align: justify;
    }
</style>