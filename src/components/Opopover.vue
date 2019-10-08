<template>
  <div class="popover" ref="popover">
    <div class="button-wrapper" @click="showpopover" ref="button">
      <slot></slot>
    </div>
    <div class="content-wrapper" v-if="isshowpopover" ref="content" :class="{top:position ==='top'}">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "popover",
  props:{
      position:{
          type:String,
          validator:function(value){
              return ['top','bottom','left','right'].indexOf(value) !==-1
          }
      }
  },
  data() {
    return {
      isshowpopover: false
    };
  },
  methods: {
    showpopover(e) {
        if(this.$refs.button.contains(e.target)){
            if(!this.isshowpopover){
                this.isshowpopover = true
                console.log('這是按鈕')
                this.$nextTick(()=>{
                    this.sefposition()
                    document.addEventListener('click',this.onclickdocument)
                })
                
            }else{
                this.isshowpopover = false
            }
        }
    },
    onclickdocument(e){
        if(this.$refs.popover.contains(e.target)) return
        console.log('這是document')
        this.isshowpopover = false
        document.removeEventListener('click',this.onclickdocument)
    },
    sefposition(){
        let {button,content} = this.$refs
        let {width,height,left,top} = button.getBoundingClientRect()
        let {width:width2,height:height2,left:left2,top:top2} = content.getBoundingClientRect()
        console.log(width,height,left,top,width2,height2,left2,top2)
        let position = {
            top:{
                top:top2-(height + height2 + 10 + window.scrollY),
                left:left+window.scrollX + 0
            }
        }
        content.style.top = position[this.position].top + 'px'
        content.style.left = position[this.position].left + 'px'
    }
  },
  mounted(){
      
  }
};
</script>

<style scoped lang="scss">
.button-wrapper {
  display: inline-block;
}
.content-wrapper {
  max-width: 240px;
  border: 1px solid #999;
  word-break: break-all;
  text-align: justify;
  padding: 0.5em;
  border-radius: 4px;
  background-color: #fff;
  filter: drop-shadow(0 2px 2px #999);
  position: absolute;
  &.top::before{
      content: '';
      display: block;
      border: 10px solid transparent;
      border-top-color:#999; 
      border-bottom: none;
      top: 100%;
      width: 0;
      height: 0;
      position: absolute;
  }
  &.top::after{
      content: '';
      display: block;
      border: 10px solid transparent;
      border-top-color:#fff; 
      border-bottom: none;
      top: calc(100% - 1px);
      width: 0;
      height: 0;
      position: absolute;
  }
}
</style>