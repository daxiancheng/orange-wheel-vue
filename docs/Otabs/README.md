---
title: Tabs  
---
# Tabs 标签页

## 简单用法 
</br>

<ClientOnly>
  <Otabs/>
</ClientOnly>

## 代码示例
```
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
```
## 参数说明

| 参数           | 含义          | 类型                | 值                    |
| ------------- |:-------------:|:-------------------:|---------------:       |
| selected      | 绑定默认显示的o-tabitem的name            | String     | o-tabitem的name值|
| name  | 绑定o-tabitem的name   | String     |任意             |

