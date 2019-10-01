<template>
   <o-button-group @click="pagebtn">
      <o-button>«</o-button>
     <o-button iconName="left" iconPosition="left">上一页</o-button>
      <o-button v-show="btns[0]!==1">...</o-button><o-button v-for="btn in btns" :class="{active:btn === currentBtn}" :key="btn+'1'">{{btn}}</o-button><o-button v-show="btns[4]!==maxPage">...</o-button>
      <o-button iconName="right" iconPosition="right">下一页</o-button>
      <o-button>»</o-button>
    
  </o-button-group>
</template>

<script>
export default {
    name:'pagesbtn',
    data(){
        return {
             btns:[1,2,3,4,5],
             currentBtn:1,
             maxPage:50
        }
    },
    methods:{
        pagebtn(e){
            let currentp = parseInt(e.target.innerText)
            let len = this.btns.length-1
            if(currentp){
                this.currentBtn = currentp
                if(currentp === this.btns[len]){
                  this.btns.shift()
                  this.btns.push(this.btns[len-1]+1)
                }else if(currentp === this.btns[0] && currentp!==1){
                  this.btns.pop()
                  this.btns.unshift(this.btns[0]-1)
                }
            }else{
              if(e.target.innerText==='下一页'){
                 document.querySelector('.active').nextSibling.click()
              }else if(e.target.innerText==='上一页'){
                  document.querySelector('.active').previousSibling.click()
              }else if(e.target.innerText==='«'){
                this.currentBtn = 1
                this.btns=[1,2,3,4,5]
              }else if(e.target.innerText==='»'){
                this.currentBtn = this.maxPage
                this.btns = [this.maxPage-4,this.maxPage-3,this.maxPage-2,this.maxPage-1,this.maxPage]
              }
            }
           
        }
    }
};
</script>

<style scoped>
.pagesbtn{
  display: flex;
}
.active{
    background-color: #eee;
}
</style>

