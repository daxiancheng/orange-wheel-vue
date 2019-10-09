<template>
     <div style="display:flex;">
      <o-popover position="top" style="margin-right:10px;" trigger="hover">
        <o-button>按钮hovertop</o-button>
        <template v-slot:content>
          <div>
            我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容
          </div>
        </template>
      </o-popover>
      <o-popover position="bottom" style="margin-right:10px;">
        <o-button>按钮clickbottom</o-button>
        <template v-slot:content>
          <div>
            我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容
          </div>
        </template>
      </o-popover>
      <o-popover position="left" style="margin-right:10px;">
        <o-button>按钮clickleft</o-button>
        <template v-slot:content>
          <div>
            我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容
          </div>
        </template>
      </o-popover>
      <o-popover position="right" style="margin-right:10px;">
        <o-button>按钮clickright</o-button>
        <template v-slot:content>
          <div>
            我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容我是卡片的内容
          </div>
        </template>
      </o-popover>
    </div>
</template>

<script>
import button from "../../../src/components/Obutton.vue";
import popover from "../../../src/components/Opopover.vue";
export default {
    components:{
        'o-popover':popover,
        'o-button':button
    }
}
</script>

<style scoped>

</style>