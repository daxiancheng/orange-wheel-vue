<template>
  <div>
    <o-tab :selected.sync="selected">
      <o-tabhead>
        <o-tabitem name="festival">国庆</o-tabitem>
        <o-tabitem name="sport">体育</o-tabitem>
        <o-tabitem name="culture">人文</o-tabitem>
      </o-tabhead>
      <o-tabbody>
        <o-tabcontent name="festival">国庆 相关信息</o-tabcontent>
        <o-tabcontent name="sport">体育 相关信息</o-tabcontent>
        <o-tabcontent name="culture">人文 相关信息</o-tabcontent>
      </o-tabbody>
    </o-tab>
  </div>
</template>

<script>
import tab from "../../../src/components/Otab.vue";
import tabhead from "../../../src/components/Otabhead.vue";
import tabitem from "../../../src/components/Otabitem.vue";
import tabcontent from "../../../src/components/Otabcontent.vue";
import tabbody from "../../../src/components/Otabbody.vue";
export default {
    components:{
        'o-tab':tab,
        'o-tabhead':tabhead,
        'o-tabitem':tabitem,
        'o-tabbody':tabbody,
        'o-tabcontent':tabcontent
    },
    data(){
        return {
            selected:'festival'
        }
    }
};
</script>

<style scoped>
</style>