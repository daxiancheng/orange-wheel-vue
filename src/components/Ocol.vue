<template>
    <div class="col" :class="[`col-span-${colSpan}`,`phone-span-${phone}`]" :style="{marginRight:gutter+'px'}">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props:{
        colSpan:{
            type:String,
            default:'0'
        },
        phone:{
            type:String,
            default:'0'
        }
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
        @media (max-width: 768px) {
            @for $n from 1 through 24{
            &.phone-span-#{$n} {
                width: ($n/24) * 100%;
            }
        }
        }
    }
</style>