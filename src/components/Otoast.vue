<template>
    <div class="toast center">
        <div class="message">
            <slot></slot>
        </div>
        <span @click="clickclose">关闭</span>
    </div>
</template>

<script>
export default {
    name:'Otoast',
    props:{},
    methods:{
        close(){
            this.$el.remove()
            this.$emit('close')
            this.$destroy()
        },
        autoclose(){
            setTimeout(()=>{
                this.close()
            },2000)
        },
        clickclose(){
            this.close()

        }
    },
    mounted(){
        // this.autoclose()
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