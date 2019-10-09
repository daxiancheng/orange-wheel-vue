---
title: Button
---
# Button 按钮

## 简单用法 
</br>

<ClientOnly>
  <Obutton/>
</ClientOnly>

## 代码示例
```
<o-button iconName="setting" loading @click="isloading = !isloading">按钮</o-button>
<o-button iconName="setting">按钮</o-button>
<o-button iconName="setting" iconPosition="right">按钮</o-button>
<o-button iconName="zan" iconPosition="right">按钮</o-button>
<o-button-group>
        <o-button iconName="left">上一页</o-button>
        <o-button>按钮</o-button>
        <o-button iconName="right" iconPosition="right">下一页</o-button>
</o-button-group>
<o-page-button></o-page-button>
```
## 参数说明

| 参数           | 含义          | 类型                | 值                    |
| ------------- |:-------------:|:-------------------:|---------------:       |
| iconName      | 要使用的icon的名字            | String     |left,right,setting,zan |
| iconPosition  | icon居左还是居右，默认左  | String     |left,right             |
| loading       | 是否需要添加loading，默认false   |  Boolean | loading|

