---
title: Popover  
---
# Popover 气泡卡片

## 简单用法 
</br>

<ClientOnly>
  <Opopover/>
</ClientOnly>

## 代码示例
```
<o-popover position="right" trigger="hover">
    <o-button>按钮clickright</o-button>
    <template v-slot:content>
        <div>
            我是卡片的内容我是卡片的内容我是卡片的内容
        </div>
    </template>
</o-popover>
```
## 参数说明

| 参数           | 含义          | 类型                | 值                    |
| ------------- |:-------------:|:-------------------:|---------------:       |
| position      | 气泡卡片出现的位置            | String     | left,right,top,bottom|
| trigger      | 设置点击或悬浮事件，默认是click           | String     | click,hover|

