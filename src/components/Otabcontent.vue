<template>
    <div v-if="isactive">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'tabcontent',
    props:{
        name:{
            type:String
        }
    },
    inject:['eventBus'],
    data(){
        return {
            isactive:false
        }
    },
    created(){
        this.eventBus.$on('update:selected',(select)=>{
                if(select === this.name){
                    this.isactive = true
                }else{
                    this.isactive = false
                }
            })
    }
}
</script>

<style scoped>

</style>