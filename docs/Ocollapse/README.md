---
title: Collapse  
---
# Collapse 折叠面板

## 简单用法 
</br>

<ClientOnly>
  <Ocollapse/>
</ClientOnly>

## 代码示例
```
<o-collapse :openshow.sync="openshow" single>
    <o-collapse-item title="标题一" name="1">我是卡片的内容我是卡片的内容</o-collapse-item>
    <o-collapse-item title="标题二" name="2">我是卡片的内容我是卡片的内容</o-collapse-item>
    <o-collapse-item title="标题三" name="3">我是卡片的内容我是卡片的内容</o-collapse-item>
</o-collapse>
//设置默认开启的item
 openshow:['1']
```
## 参数说明

| 参数           | 含义          | 类型                | 值                    |
| ------------- |:-------------:|:-------------------:|---------------:       |
| openshow      | 设置默认开启的item            | Array     |o-collapse-item的name值作为数组元素 |
| single      | 设置是否只能单个开启，默认为false         | Boolean     | true,false|

