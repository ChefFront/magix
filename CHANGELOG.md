## 3.8.8
1. 调整`proxy`的算法
2. 修复节点上属性重复的`bug`
3. 修复`mx-vframe`根节点的临界情况，事件即满足父又满足子选择器的情况，明确子只能处理`$`绑定
4. 删除事件缓存，在`dom diff`的情况下不适用
5. 换一种事件缓存算法
6. 支持`slot`
7. 检测节点重名的`id`，增强提示

## 3.8.7
1. 增强`View.merge`，同样的事件进行`merge`而不是覆盖
2. 调整特殊属性的处理，进行前置到节点判断
3. 调整`input`,`textarea`,`option`标签的处理
4. 修复`reused key`不同的`key`指向同一个节点的问题

## 3.8.6
1. 修正`tipRouter`在`view`嵌套的情况下，`view`中提前`resolve`导致子`view`不触发提示的`bug`
2. 调整`leaveConfirm`参数
3. 修正`@`引用数据，原始类型也要使用`占位`方案，保持数据类型
4. 调整`mx-event`与选择器事件绑定的处理顺序
5. 开放`@`输出数据，增加`translate`获取相应的数据

## 3.8.5
1. `dom diff`增加删除判断
2. 如果`view`有`assign`方法，全权交与`view`更新，不再更新属性
3. 原生使用`isEqualNode`方法，虚拟`dom`使用`outer.html`快速跳过相同的节点
4. 字符串`html`到`vdom`使用`substring`方法，解决`slice`方法导致的浏览器长时间垃圾回收的问题
5. `Magix.State`中`set`方法返回`this`方便连续调用
6. 支持异步更新
7. 节点比较的情况下，首次渲染及后续有变化时都要`endUpdate`
8. 不再维护`vrdom`，鸡肋
9. 重构`updater`中的`digest`方法，减少函数调用
10. 修正`vframe`正渲染或销毁`view`后，`dom update`更新时，访问`view`不存在的`bug`
11. 修正刷新时，`view`内只有某一个`view`有变化，且未实现`assign`方法，销毁无法重建的`bug`

## 3.8.4
1. 防止虚拟`dom`解析时的死循环
2. 修复虚拟、真实节点下，同一个类型、参数的组件销毁后无法重新生成的`bug`
3. 调用生成`html`的函数时，传递`viewId`
4. 增加静态标签标识，`diff`时快速跳过
5. 修改节点创建时，并不是所有的节点都有`innerHTML`的`bug`
6. 打包文件支持入口文件指定启用的模块

## 3.8.3
1. 增加虚拟与真实节点的比较
2. 修复部分情况不引起变化,导致后续无法渲染的`bug`
3. 增加简易的标签嵌套检查
4. 属性、`input`及`textarea`的值设置也要反转义,妹的

## 3.8.2
1. `vdom`更新`textnode`时要转义实体字符
2. 组件如果有`assign`方法,则每次刷新都要调用,除非该组件没有参数及`html`未改变
3. 如果组件没有参数且`html`没改变,则不更新
4. 更新节点时,尽可能的使用已存在的同类型的组件,而不是销毁重建`node.compare.key`

## 3.8.1
1. `increment`尽可能的保留旧元素
2. 同类型组件节点需要更新属性，但可保留`style`和`class`
3. 调整`id`保留算法
4. 修改`view`继承时参数传递
5. 增加`vdom`比对
6. 在`magix`未启动时，部分结果不缓存，如`Router.parse`的结果
7. 缓存`Proxy`的结果，用以值相等的比较

## 3.8.0
1. 默认`es6`语法
2. 增加模板对象的检测
3. 完善事件的传播停止，支持向`view`的根节点绑定事件
4. 明确同一节点事件的直接绑定与选择器绑定先后执行顺序
5. `vframe`对象增加缓存
6. 移除`eventShortCtrl`打包项
7. 修正在`vframe`销毁时，应从节点上移除相应的标识
8. 修正、完善`d.ts`文件
9. `inside`返回`boolean`
10. 移除`view`上的`prerender rendered`事件，使用`domready`代替
11. `document`增加`attrschange attrschanged`事件
12. 精简`dom`操作相关的代码，删除闭合标签，浏览器会自动处理
13. 调整`dom diff`，不包含子节点的`vframe`销毁时不移除`dom`

## 3.7.0
1. 支持类做为`mixin`
2. 修复`body`中查询结果不能设置`vframeId`的问题
3. `State`增加`diff`方法
4. 增加`htmlchanged`事件
5. 解析事件参数时，传递当前节点做为`this`的指向
6. 不兼容的事件`htmlchange`升级
7. 修复当删除某个`boolean`属性时，未更新节点属性的`bug`

## 3.6.0
1. 完善注释文档
2. 局部更新view时不反复触发created事件
3. htmlchange增加vId，指示是从哪个view触发的html变化
4. 非兼容升级：view参数传递时，需要判断属性中是否有该名称的属性
5. 修改webpack版本下的G_IsFunction函数
6. 增强invokeView方法
7. 开放require及define方法，以便更好的跨类库

## 3.5.3
1. 增加事件的检测，DEBUG模式下提示开发者相应的解决方案
2. 增加改变路径修改网页title的功能
3. 增加url rewrite功能
4. 增强模板，增加调试模式
5. 增加dom增量更新功能，默认不启用，需要定制
6. 修复mx-view变化时，要强制更新节点内的模板
7. 调整不输出界面的view的处理，如销毁时不还原html
8. 保护事件信息对象防止在外部修改
9. 解决模板中引用数据同一个对象生成多个key的问题
10. 事件写法支持`<%@item%>`传递数据对象

## 3.5.2
1. 修改state监听
2. 修改打包，任意模块都可以放在外部修改，路径相对模板文件
3. 原则上不再支持ie8-的浏览器
4. 模板去除不必要的换行及添加引号处理

## 3.5.1
1. 修改移除事件监听的判断
2. 修改打包，由原来的文件+需求改成统一按需求打包
3. 重构代码，把共用代码尽要能的放在tmpl里

## 3.5.0
1. 增加DEBUG，减少打包后的文件体积
2. 增加数据保护，对于路由、bag中的数据为只读，不能回写
3. 增加静默更新路由
4. 增加State对象，与location类似，可存储任意数据。
5. 改变原来的observe成observeLocation，因与observeState对应

## 3.4.7
1. 修改提示路由在pushState的情况下，漏掉通过api修改url未提示的bug
2. updater拆分出局部刷新实现，后期可以根据情况实现不同的渲染

## 3.4.6
1. 修改父子化vframe时的事件处理，一直向上冒泡，可能会匹配重名的情况，优化直接的处理

## 3.4.5
1. 修改直出情况下view-attr传递数据
2. 完善d.ts文件

## 3.4.4
1. 调整内置的view
2. 支持事件写mx-owner
3. 向类库选择器增加invokeView方法
4. 增加layerVframe选项

## 3.4.3
1. view-attr增加camelcase
2. 增强打包工具，更易订制

## 3.4.2
1. 修复在不包含router模块的情况下，部分代码仍然存在的问题

## 3.4.0
1. 删除mx-init节点属性传递参数的方式
2. 参数传递统一使用view-attr的方式
3. d.ts监听地址栏参数使用对象时，params非必选

## 3.3.2
1. 改进d.ts文件
2. 修复托管资源销毁bug

## 3.3.1
1. 调整view销毁代码
2. capture反复捕获同一个对象时，之前捕获的并不销毁
3. 增加d.ts文件

## 3.3.0
1. 重写选择器事件，与普通事件保持一致，这样才能在事件冒泡处理上行为一致
2. 离开页面提醒，改进历史记录的处理，分普通的路由和锁定url的路由
3. 阻止页面离开由原来肯定阻止改为条件阻止
4. 模板中增加对mx-view参数编码

## 3.2.3
1. 修复alter某些情况下未传递id的bug
2. 添加在同一个view中，重复id的提示

## 3.2.2
1. 修改添加样式的实现
2. 修改updater的细节处理，移除$fk
3. 修复mixins的细节处理，解决深回调队列的问题


## 3.2.1
1. 支持对话框关闭时的修改检测，并提示用户
2. 选择器事件支持绑定到根节点
3. 向document派发htmlchange事件
4. 修复在派发url变化事件时，子view先渲染好，导致重复渲染的问题

## 3.2.0
1. 支持 选择器绑定的事件仅在当前view生效
2. 改进的动态查找vframe
3. webpack支持动态加载的配置