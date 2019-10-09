---
title: Grid
---
# Grid 网格系统
## 简单用法
</br>

<ClientOnly>
  <Ogrid/>
</ClientOnly>

## 代码示例
```
<o-row>
    <o-col v-for="list in 3" :key="list+1" >{{list}}</o-col>
</o-row>
<o-row gutter="20">
    <o-col v-for="list in 3" :key="list+1">{{list}}</o-col>
</o-row>
<o-row>
    <o-col col-span="2">2</o-col>
    <o-col col-span="22">22</o-col>
</o-row>
<o-row gutter="20">
    <o-col col-span="2" phone="20">2</o-col>
    <o-col col-span="22" phone="4">22</o-col>
</o-row>
```
## 参数说明

| 参数           | 含义          | 类型                | 值                    |
| ------------- |:-------------:|:-------------------:|---------------:       |
| gutter      | 网格之间是否添加空隙           | String     |任意数字 |
|  colSpan | 网格所占宽度，默认平均分配  | String    |1-24           |
| phone       | 响应式布局，设置手机上的宽度   |  String | 1-24|