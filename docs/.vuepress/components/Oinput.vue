<template>
  <div class="inputvue">
    <o-input v-model="value" class="view"></o-input>
    <o-input v-model="value" class="view" disabled></o-input>
    <o-input v-model="value" messageType="error" class="view"></o-input>
    <o-input v-model="value" messageType="success" class="view"></o-input>
  </div>
</template>

<script>
import input from '../../../src/components/Oinput.vue'
export default {
    components:{
        'o-input':input
    },
    data(){
        return {
            value:'orange'
        }
    }
};
</script>

<style scoped>
.view {
  margin: 4px 4px;
}
</style>