---
title: Message 
---
# Message 消息提醒

## 简单用法 
</br>

<ClientOnly>
  <Omessage/>
</ClientOnly>

## 代码示例
```
<o-button @click="toast" class="view">按钮top</o-button>
//在js中引入并使用Oplug.js
import Vue from 'vue'
import button from "../../../src/components/Obutton";
import Oplug from "../../../src/components/Oplug.js";
Vue.use(Oplug)
//绑定一个事件
methods:{
    toast(){
      this.$Otoast(
      '我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件我是toast组件',
      {
        position:'top',
        handclose:false,
        autotime:2000,
        autoclose:true
      }
      )
    }
}
```
## 参数说明

| 参数           | 含义          | 类型                | 值                    |
| ------------- |:-------------:|:-------------------:|---------------:       |
| 方法的第一个参数      | 消息提示的文字            | String     |任意 |
| 第二个参数的position属性  | 消息提示出现的位置  | String     |top,bottom,center             |
| 第二个参数的handclose属性       | 是否需要手动关闭，默认值false   |  Boolean | true,false|
| 第二个参数的autoclose属性       | 是否需要自动关闭，默认值true   |  Boolean | true,false|
| 第二个参数的autotime属性       | 设置自动关闭的时间，默认值2s   |  Number | 任意|

