<template>
    <div class="inputBox">
       <label>用户名：<input type="text" :disabled="disabled" class="inputvalue" :value="value" 
       @change="$emit('change',$event.target.value)"
       @input="$emit('input',$event.target.value)"
       @focus="$emit('focus',$event.target.value)"
       @blur="$emit('blur',$event.target.value)"
       ></label>
       <template v-if="messageType==='success'">
           <o-icon icon="success"></o-icon>
           <span>{{successMessing}}</span>
       </template>
       <template v-if="messageType==='error'">
           <o-icon icon="error"></o-icon>
           <span>{{errorMessage}}</span>
       </template>
    </div>
</template>

<script>
export default {
    props:{
        value:{},
        messageType:{
            type:String,
            default:'normal'
        },
        disabled:{
            type:Boolean,
            default:false
        }
    },
    data(){
        return {
            successMessing:'验证通过',
            errorMessage:'验证失败'
        }
    }
}
</script>

<style scoped>
    .inputBox{
        font-size: 14px;
        color: #333;
    }
    .inputvalue{
        padding: 0.5em 0 0.5em 0.5em;
        border-radius: 4px;
        outline: none;
        border: 1px solid #999;
        color: #333;
    }
    .inputvalue:hover{
        border: 1px solid orange;
    }
    .inputvalue:focus{
        box-shadow: inset 0px 1px 2px rgba(153, 153, 153, 0.5); 
    }
    .inputvalue:disabled{
        border: 1px solid#ddd;
        color: #ddd;
        cursor: not-allowed;
        background-color: #fff;
    }
</style>