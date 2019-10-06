<template>
    <div class="toast" :class="position">
        <div class="message">
            <slot></slot>
        </div>
        <span @click="clickclose" v-if="handclose">关闭</span>
    </div>
</template>

<script>
export default {
    name:'Otoast',
    props:{
        position:{
            type:String,
            default:'top'
        },
        handclose:{
            type:Boolean,
            default:false
        },
        autoclose:{
            type:Boolean,
            default:true
        },
        autotime:{
            type:Number,
            default:2000
        }
    },
    methods:{
        close(){
            this.$el.remove()
            this.$emit('close')
            this.$destroy()
        },
        eautoclose(){
            if(this.autoclose){
                setTimeout(()=>{
                this.close()
            },this.autotime)
            }
            
        },
        clickclose(){
            if(this.handclose){
                this.close()
            }
        }
    },
    mounted(){
        this.eautoclose()
    }
}
</script>

<style scoped lang="scss">
    .toast{
        display: flex;
        background-color: #333;
        position: fixed;
        border-radius: 4px;
        color: #ffffff;
        .message{
            padding: 0.5em 1em;
            max-width: 250px;
            text-align: center;
        }
        span{
            padding: 0.5em 1em;
            border-left: 1px solid #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
        &.top{
            top: 10px;
            left: 50%;
            transform: translate(-50%);
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
        &.bottom{
            bottom: 10px;
            left: 50%;
            transform: translate(-50%);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
        }
        &.center{
            top:50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
    }
</style>