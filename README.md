<p align="center">
    <img alt="logo" src="http://oss.dev33.cn/sa-admin/admin-logo-150.png" width="150" height="150" style="margin-bottom: 10px;">
</p>
<h2 align="center" style="margin: 30px 0 30px;font-weight: bold;font-size:40px;">sa-admin v2.4.2</h2>
<h4 align="center">一个多窗口后台模板，流畅、易上手、提高生产力</h4>
<h4 align="center">
	<a href="https://github.com/click33/sa-admin"><img src="https://img.shields.io/badge/sa--admin-v2.4.2-2B9939"></a>
	<a href="https://github.com/click33/sa-admin"><img src="https://img.shields.io/badge/language-html-2B9939"></a>
	<a href="https://github.com/click33/sa-admin/stargazers"><img src="https://img.shields.io/github/stars/click33/sa-admin"></a>
	<a href="https://github.com/click33/sa-admin/watchers"><img src="https://img.shields.io/github/watchers/click33/sa-admin"></a>
	<a href="https://github.com/click33/sa-admin/network/members"><img src="https://img.shields.io/github/forks/click33/sa-admin"></a>
	<a href="https://github.com/click33/sa-admin/issues"><img src="https://img.shields.io/github/issues/click33/sa-admin.svg"></a>
	<a href="https://github.com/click33/sa-admin/blob/master/LICENSE"><img src="https://img.shields.io/github/license/click33/sa-admin.svg"></a>
</h4>



## 优点 😘
- 上手简单：提供完整彻底的封装，不用修改一行源代码即可轻松集成
- 示例全面：提供大量常见增删改查示例，提高你的生产力
- 演示地址：[http://sa-admin.dev33.cn](http://sa-admin.dev33.cn)
- 如果比较熟悉vue单页应用，[点我访问vue单页版](https://github.com/click33/sa-vue-admin)

## 需求提交
- 我们深知一个优秀的项目需要海纳百川，[点我在线提交需求](http://sa-app.dev33.cn/wall.html?name=sa-admin)
- 开源不易，求鼓励，**点个`star`吧**

## 框架选型
- JS引擎：[Vue @2.6.10](https://cn.vuejs.org/)
- UI框架：[Element-UI @2.13.0](https://element.eleme.cn/#/zh-CN)
- web弹层：[layer @3.1.1](http://layer.layui.com/)
- 切页动画：[Swiper @4.5.0](https://www.swiper.com.cn/)
- 即使以上几个框架你都没接触过，只要你认真阅读一遍文档说明，也可以快速上手本模板

## 功能
- 基础
	- 架构：基于iframe，无后台代码，纯html模板，可方便的适配任何后端语言
	- 模板：提供大量常见示例，以及各种表单的书写方式，助你快速CRUD
	- 菜单：支持一、二、三级菜单，并开放一系列接口方便的使用js操作菜单
	- 折叠：折叠或收缩菜单，并且监听窗口大小变化，在拉伸窗口时自动折叠或收缩菜单，自动响应式
	- 搜索：智能索引，快捷搜索打开某个菜单
	- 切换：集成swiper动画，滑动、淡入、方块、3D流、3D翻转，五种高大上切换动画，任你选择！
	- 主题：目前保留八种主题：蓝色、绿色、白色、灰色、灰色-展开、pro钛合金、沉淀式黑蓝、简约式灰蓝（切换主题时，可自动保存你的喜好，下次打开时仍然有效）
	- 便签：弹出窗口便签，一个临时小便签，可记录一些临时资料
	- 全屏：可以在全屏/非全屏之间自由切换
- tabbar栏：
	- 卡片堆积：多卡片自动堆积，与菜单双向关联，切换tab卡时自动显示左侧菜单
	- 拖动手势：tab卡支持拖拽手势，上拖新窗口打开、下拽悬浮打开、左拽快速关闭
	- 双击全屏：当卡片属于悬浮状态时，双击标题区域可以快速全屏，再次双击取消全屏
	- 右键菜单：在tab上右击，可以：刷新、复制、关闭、关闭其它、关闭所有、悬浮打开、新窗口打开、取消
	- 双击菜单：双击tabbar空白处，可以显示添加新tab窗口
	- 保留高度：切换卡片时，可自动保留上个卡片的滚动条高度
- 开放接口
	- 开放一系列api，助你方便的使用js操作tabbar栏，具体请查看集成文档
	- 锚链：tab切换自动更改hash锚链，同时监听锚链改变tab，可灵活的用鼠标前后键切换tab窗口 （如不需要此功能可在初始化时关闭）
	- 窗口：可在初始化时，设置是否显示tabbar栏，来控制它是多窗口还是单窗口，具体见使用文档
	- 更新：功能不断更新中... 你有好的想法也可以告诉我，加群一起交流吧
	- 文档：使用说明，见文档


## 疑问
##### vue、element-ui、layer我都没用过，可以用这个模板吗 ?

首先你要明白，模板分为两部分（index.html框架与框架内的模板页）
如果你只使用index.html框架部分，可以不必掌握vue等技术，使用时甚至你都不用改动源码， 只重写几个属性函数就可以集成到你的项目中，
如果你要使用框架内的模板页，则需要对vue等框架有一定的了解
	
##### 为什么是iframe，而不是SPA ?

现在前端开发比较主流的三种方式：服务器渲染、前后端分离、SPA
+ 服务器渲染：类似于jsp、asp、php等所有借助后端语言渲染视图的技术，这也是比较传统的一种方式
+ 前后端分离：脱离后端语言，只写html，就像是在写一个静态站，与服务器的交互全部走ajax
+ SPA：在前后端分离的基础上更进一步，借助gulp、webpack等构件工具将项目打包成单页应用的一种方式

**本模板** 正是采用的第2种方式（so：本模板可能无法满足重度SPA患者）(喜欢vue单页的同学可以点击上方的vue单页版)
1. 前后端分离，让我们脱离了后端语言的@include指令，不用为了代码的模块化再到处搜索xx技术如何热更新代码
2. 不使用webpack、gulp等构建工具也可以写代码，不必再费尽心机搭建一个代码编译环境
3. 网站头部底部等公共部分代码的复用是我们使用构建工具的主要目的，但是我们借助iframe标签，轻松巧妙的化解了这个难题，借助iframe， 让网站成为一个真正意义上的多窗口应用 （大多数服务器渲染方式每次切换窗口会造成窗口刷新，SPA将代码都塞到了一个页面中的方式使得我们写代码时变得瞻前顾后）
4. 返璞归真，像写静态站一样来写后台，一个html编辑器就可以强Lu所有代码，尝试一下，相信我，你会爱上这种开发模式的


## 贡献代码
1. 在github上fork一份到自己的仓库
2. clone自己的仓库到本地电脑
3. 在本地电脑修改、commit、push
4. 提交pr（点击：New Pull Request）
5. 等待合并

## 建议贡献的地方
- 更多登录模板
- 修复源码现有bug，或增加新的实用功能（比如：流畅的tab左右拖拽排序）
- 更多demo示例：比如针对element-ui一些复杂组件的示例，或者其它一些常见js库的集成使用
- 如果更新实用功能，可在文档友情链接处留下自己的推广链接

## QQ群
QQ交流群：[782974737 点击加入](https://jq.qq.com/?_wv=1027&k=5DHN5Ib)

## 截图

![截图](http://oss.dev33.cn/sa-admin/xc/xc-1.png)
![截图](http://oss.dev33.cn/sa-admin/xc/xc-2.png)
![截图](http://oss.dev33.cn/sa-admin/xc/xc-3.png)

见演示说明地址


