<template>
    <div class="col" :class="[`col-span-${colSpan}`]" :style="{marginRight:gutter+'px'}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        colSpan:{}
    },
    data(){
        return {
            gutter:0
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped lang="scss">
    .col{
        width: 100%;
        @for $n from 1 through 24{
            &.col-span-#{$n} {
                width: ($n/24) * 100%;
            }
        }
    }
</style>