---
title: Input
---
# input 输入框
## 简单用法
</br>

<ClientOnly>
  <Oinput/>
</ClientOnly>

## 代码示例
```
<o-input v-model="value"></o-input>
<o-input v-model="value" disabled></o-input>
<o-input v-model="value" messageType="error"></o-input>
<o-input v-model="value" messageType="success"></o-input>
```
## 参数说明

| 参数           | 含义          | 类型                | 值                    |
| ------------- |:-------------:|:-------------------:|---------------:       |
| value      | 默认值            | String     |任意 |
|  disabled | 是否禁用  | Boolean     |true，false             |
| messageType       | 设置输入框消息提示类型   |  String | success,error|