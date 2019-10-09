---
title: Layout
---
# Layout 默认布局
## 简单用法
</br>

<ClientOnly>
  <Olayout/>
</ClientOnly>

## 代码示例
```
<o-container class="rowmargin" style="height:400px">
    <o-header class="color3" style="height:60px">header</o-header>
    <o-main class="color4">main</o-main>
    <o-footer class="color3" style="height:60px">footer</o-footer>
</o-container>
<o-container class="rowmargin" style="height:400px">
    <o-header class="color3" style="height:60px">header</o-header>
    <o-container>
        <o-asider class="color5" style="width:140px">aside</o-asider>
        <o-main class="color4">main</o-main>
    </o-container>
    <o-footer class="color3" style="height:60px">footer</o-footer>
</o-container>
<o-container class="rowmargin" style="height:400px">
    <o-asider class="color5" style="width:140px">aside</o-asider>
    <o-container>
        <o-header class="color3" style="height:60px">header</o-header>
        <o-main class="color4">main</o-main>
        <o-footer class="color3" style="height:60px">footer</o-footer>
    </o-container>
</o-container>
```