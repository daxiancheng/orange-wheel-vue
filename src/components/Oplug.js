import Otoast from './Otoast.vue'

let currentToast
export default{
    install(Vue,options){
        Vue.prototype.$Otoast = function(message,toastOptions){
            if(currentToast){
                currentToast.close() //每一次都是把前面的去掉，生成新的dom
            }
            currentToast = creatToast({
                Vue,
                message,
                propsData: toastOptions,
                onclose:()=>{
                    currentToast = null
                }
            })
        }
    }
}

function creatToast({Vue,message,propsData,onclose}){
    let constructor = Vue.extend(Otoast)
    let vm = new constructor({propsData})
    vm.$slots.default = [message]
    vm.$mount()
    vm.$on('close',onclose)
    document.body.appendChild(vm.$el)
    return vm
}