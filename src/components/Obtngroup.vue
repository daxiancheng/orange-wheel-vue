<template>
    <div class="button-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:'Obtngroup'
}
</script>

<style scoped>
    .button-group{
        display:flex;
    }
    .button-group>.btn{
        border-radius: 0;
    }
    .button-group>.btn:not(:first-child){
        margin-left: -1px;
    }
    .button-group>.btn:first-child{
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
    }
    .button-group>.btn:last-child{
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
    }
</style>