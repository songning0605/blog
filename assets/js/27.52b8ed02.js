(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{373:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"导读"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导读"}},[t._v("#")]),t._v(" 导读")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("Electron")]),t._v("开发客户端程序已经有一段时间了，整体感觉还是非常不错的，其中也遇到了一些坑点，本文旨在从【运行原理】到【实际应用】对"),a("code",[t._v("Electron")]),t._v("进行一次系统性的总结。【多图，长文预警～】")]),t._v(" "),a("p",[t._v("本文所有实例代码均在我的"),a("a",{attrs:{href:"https://github.com/ConardLi/electron-react",target:"_blank",rel:"noopener noreferrer"}},[t._v("github electron-react"),a("OutboundLink")],1),t._v("上，结合代码阅读文章效果更佳。另外"),a("code",[t._v("electron-react")]),t._v("还可作为使用"),a("code",[t._v("Electron + React + Mobx + Webpack")]),t._v("技术栈的脚手架工程。")]),t._v(" "),a("h2",{attrs:{id:"一、桌面应用程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、桌面应用程序"}},[t._v("#")]),t._v(" 一、桌面应用程序")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://www.conardli.top/img/electron/el_1_app.jpg",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("桌面应用程序，又称为 GUI 程序（Graphical User Interface），但是和 GUI 程序也有一些区别。桌面应用程序 将 GUI 程序从GUI 具体为“桌面”，使冷冰冰的像块木头一样的电脑概念更具有 人性化，更生动和富有活力。")])]),t._v(" "),a("p",[t._v("我们电脑上使用的各种客户端程序都属于桌面应用程序，近年来"),a("code",[t._v("WEB")]),t._v("和移动端的兴起让桌面程序渐渐暗淡，但是在某些日常功能或者行业应用中桌面应用程序仍然是必不可少的。")]),t._v(" "),a("p",[t._v("传统的桌面应用开发方式，一般是下面两种：")]),t._v(" "),a("h3",{attrs:{id:"_1-1-原生开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-原生开发"}},[t._v("#")]),t._v(" 1.1 原生开发")]),t._v(" "),a("p",[t._v("直接将语言编译成可执行文件，直接调用系统"),a("code",[t._v("API")]),t._v("，完成UI绘制等。这类开发技术，有着较高的运行效率，但一般来说，开发速度较慢，技术要求较高，例如：")]),t._v(" "),a("ul",[a("li",[t._v("使用"),a("code",[t._v("C++ / MFC")]),t._v("开发"),a("code",[t._v("Windows")]),t._v("应用")]),t._v(" "),a("li",[t._v("使用"),a("code",[t._v("Objective-C")]),t._v("开发"),a("code",[t._v("MAC")]),t._v("应用")])]),t._v(" "),a("h3",{attrs:{id:"_1-2-托管平台"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-托管平台"}},[t._v("#")]),t._v(" 1.2 托管平台")]),t._v(" "),a("p",[t._v("一开始就有本地开发和UI开发。一次编译后，得到中间文件，通过平台或虚机完成二次加载编译或解释运行。运行效率低于原生编译，但平台优化后，其效率也是比较可观的。就开发速度方面，比原生编译技术要快一些。例如：")]),t._v(" "),a("ul",[a("li",[t._v("使用"),a("code",[t._v("C# / .NET Framework")]),t._v("(只能开发"),a("code",[t._v("Windows应用")]),t._v(")")]),t._v(" "),a("li",[a("code",[t._v("Java / Swing")])])]),t._v(" "),a("p",[t._v("不过，上面两种对前端开发人员太不友好了，基本是前端人员不会设计的领域，但是在这个【大前端😅】的时代，前端开发者正在想方设法涉足各个领域，使用"),a("code",[t._v("WEB")]),t._v("技术开发客户端的方式横空出世。")]),t._v(" "),a("h3",{attrs:{id:"_1-3-web开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-web开发"}},[t._v("#")]),t._v(" 1.3 WEB开发")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("WEB")]),t._v("技术进行开发，利用浏览器引擎完成"),a("code",[t._v("UI")]),t._v("渲染，利用"),a("code",[t._v("Node.js")]),t._v("实现服务器端"),a("code",[t._v("JS")]),t._v("编程并可以调用系统"),a("code",[t._v("API")]),t._v("，可以把它想像成一个套了一个客户端外壳的"),a("code",[t._v("WEB")]),t._v("应用。")]),t._v(" "),a("p",[t._v("在界面上，"),a("code",[t._v("WEB")]),t._v("的强大生态为"),a("code",[t._v("UI")]),t._v("带来了无限可能，并且开发、维护成本相对较低，有"),a("code",[t._v("WEB")]),t._v("开发经验的前端开发者很容易上手进行开发。")]),t._v(" "),a("p",[t._v("本文就来着重介绍使用"),a("code",[t._v("WEB")]),t._v("技术开发客户端程序的技术之一【"),a("code",[t._v("electron")]),t._v("】")]),t._v(" "),a("h2",{attrs:{id:"二、electron"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、electron"}},[t._v("#")]),t._v(" 二、Electron")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://www.conardli.top/img/electron/el_2_electron.jpg",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("Electron")]),t._v("是由"),a("code",[t._v("Github")]),t._v("开发，用"),a("code",[t._v("HTML，CSS")]),t._v("和"),a("code",[t._v("JavaScript")]),t._v("来构建跨平台桌面应用程序的一个开源库。 "),a("code",[t._v("Electron")]),t._v("通过将"),a("code",[t._v("Chromium")]),t._v("和"),a("code",[t._v("Node.js")]),t._v("合并到同一个运行时环境中，并将其打包为"),a("code",[t._v("Mac，Windows")]),t._v("和"),a("code",[t._v("Linux")]),t._v("系统下的应用来实现这一目的。")]),t._v(" "),a("p",[t._v("https://electronjs.org/docs")]),t._v(" "),a("p",[t._v("https://juejin.im/post/5c67619351882562276c3162#heading-5")]),t._v(" "),a("h3",{attrs:{id:"_2-1-使用electron开发的理由："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-使用electron开发的理由："}},[t._v("#")]),t._v(" 2.1 使用Electron开发的理由：")]),t._v(" "),a("ul",[a("li",[t._v("1.使用具有强大生态的"),a("code",[t._v("Web")]),t._v("技术进行开发，开发成本低，可扩展性强，更炫酷的"),a("code",[t._v("UI")])]),t._v(" "),a("li",[t._v("2.跨平台，一套代码可打包为"),a("code",[t._v("Windows、Linux、Mac")]),t._v("三套软件，且编译快速")]),t._v(" "),a("li",[t._v("3.可直接在现有"),a("code",[t._v("Web")]),t._v("应用上进行扩展，提供浏览器不具备的能力")]),t._v(" "),a("li",[t._v("4.你是一个前端👨‍💻～")])]),t._v(" "),a("p",[t._v("当然，我们也要认清它的缺点：性能比原生桌面应用要低，最终打包后的安装包和其他文件都比较大。")]),t._v(" "),a("h3",{attrs:{id:"_2-2-开发体验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-开发体验"}},[t._v("#")]),t._v(" 2.2 开发体验")]),t._v(" "),a("p",[a("strong",[t._v("兼容性")])]),t._v(" "),a("p",[t._v("虽然你还在用"),a("code",[t._v("WEB")]),t._v("技术进行开发，但是你不用再考虑兼容性问题了，你只需要关心你当前使用"),a("code",[t._v("Electron")]),t._v("的版本对应"),a("code",[t._v("Chrome")]),t._v("的版本，一般情况下它已经足够新来让你使用最新的"),a("code",[t._v("API")]),t._v("和语法了，你还可以手动升级"),a("code",[t._v("Chrome")]),t._v("版本。同样的，你也不用考虑不同浏览器带了的样式和代码兼容问题。")]),t._v(" "),a("p",[a("strong",[t._v("Node环境")])]),t._v(" "),a("p",[t._v("这可能是很多前端开发者曾经梦想过的功能，在"),a("code",[t._v("WEB")]),t._v("界面中使用"),a("code",[t._v("Node.js")]),t._v("提供的强大"),a("code",[t._v("API")]),t._v("，这意味着你在"),a("code",[t._v("WEB")]),t._v("页面直接可以操作文件，调用系统"),a("code",[t._v("API")]),t._v("，甚至操作数据库。当然，除了完整的"),a("code",[t._v("Node API")]),t._v("，你还可以使用额外的几十万个"),a("code",[t._v("npm")]),t._v("模块。")]),t._v(" "),a("p",[a("strong",[t._v("跨域")])]),t._v(" "),a("p",[t._v("你可以直接使用"),a("code",[t._v("Node")]),t._v("提供的"),a("code",[t._v("request")]),t._v("模块进行网络请求，这意味着你无需再被跨域所困扰。")]),t._v(" "),a("p",[a("strong",[t._v("强大的扩展性")])]),t._v(" "),a("p",[t._v("借助"),a("code",[t._v("node-ffi")]),t._v("，为应用程序提供强大的扩展性（后面的章节会详细介绍）。")]),t._v(" "),a("h3",{attrs:{id:"_2-3-谁在用electron"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-谁在用electron"}},[t._v("#")]),t._v(" 2.3 谁在用Electron")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://www.conardli.top/img/electron/el_6_apps.png",alt:""}})]),t._v(" "),a("p",[t._v("现在市面上已经有非常多的应用在使用"),a("code",[t._v("electron")]),t._v("进行开发了，包括我们熟悉的"),a("code",[t._v("VS Code")]),t._v("客户端、"),a("code",[t._v("GitHub")]),t._v("客户端、"),a("code",[t._v("Atom")]),t._v("客户端等等。印象很深的，去年迅雷在发布迅雷X"),a("code",[t._v("10.1")]),t._v("时的文案：")]),t._v(" "),a("blockquote",[a("p",[t._v("从迅雷X 10.1版本开始，我们采用Electron软件框架完全重写了迅雷主界面。使用新框架的迅雷X可以完美支持2K、4K等高清显示屏，界面中的文字渲染也更加清晰锐利。从技术层面来说，新框架的界面绘制、事件处理等方面比老框架更加灵活高效，因此界面的流畅度也显著优于老框架的迅雷。至于具体提升有多大？您一试便知。")])]),t._v(" "),a("p",[t._v("你可以打开"),a("code",[t._v("VS Code")]),t._v("，点击【帮助】【切换开发人员工具】来"),a("code",[t._v("VS Code")]),t._v("客户端的界面。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://www.conardli.top/img/electron/el_5_vscode.png",alt:""}})]),t._v(" "),a("h2",{attrs:{id:"三、electron运行原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、electron运行原理"}},[t._v("#")]),t._v(" 三、Electron运行原理")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://www.conardli.top/img/electron/el_3_composition.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("Electron")]),t._v(" 结合了 "),a("code",[t._v("Chromium")]),t._v("、"),a("code",[t._v("Node.js")]),t._v(" 和用于调用操作系统本地功能的"),a("code",[t._v("API")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"_3-1-chromium"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-chromium"}},[t._v("#")]),t._v(" 3.1 Chromium")]),t._v(" "),a("p",[a("code",[t._v("Chromium")]),t._v("是"),a("code",[t._v("Google")]),t._v("为发展"),a("code",[t._v("Chrome")]),t._v("浏览器而启动的开源项目，"),a("code",[t._v("Chromium")]),t._v("相当于"),a("code",[t._v("Chrome")]),t._v("的工程版或称实验版，新功能会率先在"),a("code",[t._v("Chromium")]),t._v("上实现，待验证后才会应用在"),a("code",[t._v("Chrome")]),t._v("上，故"),a("code",[t._v("Chrome")]),t._v("的功能会相对落后但较稳定。")]),t._v(" "),a("p",[a("code",[t._v("Chromium")]),t._v("为"),a("code",[t._v("Electron")]),t._v("提供强大的"),a("code",[t._v("UI")]),t._v("能力，可以在不考虑兼容性的情况下开发界面。")]),t._v(" "),a("h3",{attrs:{id:"_3-2-node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-node-js"}},[t._v("#")]),t._v(" 3.2 Node.js")]),t._v(" "),a("p",[a("code",[t._v("Node.js")]),t._v("是一个让"),a("code",[t._v("JavaScript")]),t._v("运行在服务端的开发平台，"),a("code",[t._v("Node")]),t._v("使用事件驱动，非阻塞"),a("code",[t._v("I/O")]),t._v("模型而得以轻量和高效。")]),t._v(" "),a("p",[t._v("单单靠"),a("code",[t._v("Chromium")]),t._v("是不能具备直接操作原生"),a("code",[t._v("GUI")]),t._v("能力的，"),a("code",[t._v("Electron")]),t._v("内集成了"),a("code",[t._v("Nodejs")]),t._v("，这让其在开发界面的同时也有了操作系统底层"),a("code",[t._v("API")]),t._v("的能力，"),a("code",[t._v("Nodejs")]),t._v(" 中常用的 "),a("code",[t._v("Path、fs、Crypto")]),t._v(" 等模块在 "),a("code",[t._v("Electron")]),t._v(" 可以直接使用。")]),t._v(" "),a("h3",{attrs:{id:"_3-3-系统api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-系统api"}},[t._v("#")]),t._v(" 3.3 系统API")]),t._v(" "),a("p",[t._v("为了提供原生系统的"),a("code",[t._v("GUI")]),t._v("支持，"),a("code",[t._v("Electron")]),t._v("内置了原生应用程序接口，对调用一些系统功能，如调用系统通知、打开系统文件夹提供支持。")]),t._v(" "),a("p",[t._v("在开发模式上，"),a("code",[t._v("Electron")]),t._v("在调用系统"),a("code",[t._v("API")]),t._v("和绘制界面上是分离开发的，下面我们来看看"),a("code",[t._v("Electron")]),t._v("关于进程如何划分。")]),t._v(" "),a("h3",{attrs:{id:"_3-4-主进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-主进程"}},[t._v("#")]),t._v(" 3.4 主进程")]),t._v(" "),a("p",[a("code",[t._v("Electron")]),t._v("区分了两种进程：主进程和渲染进程，两者各自负责自己的职能。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://www.conardli.top/img/electron/el_7_process.png",alt:""}})]),t._v(" "),a("p",[a("code",[t._v("Electron")]),t._v(" 运行"),a("code",[t._v("package.json")]),t._v("的 "),a("code",[t._v("main")]),t._v(" 脚本的进程被称为主进程。一个 "),a("code",[t._v("Electron")]),t._v(" 应用总是有且只有一个主进程。")]),t._v(" "),a("p",[a("strong",[t._v("职责:")])]),t._v(" "),a("ul",[a("li",[t._v("创建渲染进程（可多个）")]),t._v(" "),a("li",[t._v("控制了应用生命周期（启动、退出"),a("code",[t._v("APP")]),t._v("以及对"),a("code",[t._v("APP")]),t._v("做一些事件监听）")]),t._v(" "),a("li",[t._v("调用系统底层功能、调用原生资源")])]),t._v(" "),a("p",[a("strong",[t._v("可调用的API:")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Node.js API")])]),t._v(" "),a("li",[a("code",[t._v("Electron")]),t._v("提供的主进程"),a("code",[t._v("API")]),t._v("（包括一些系统功能和"),a("code",[t._v("Electron")]),t._v("附加功能）")])]),t._v(" "),a("h3",{attrs:{id:"_3-5-渲染进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-渲染进程"}},[t._v("#")]),t._v(" 3.5 渲染进程")]),t._v(" "),a("p",[t._v("由于 "),a("code",[t._v("Electron")]),t._v(" 使用了 "),a("code",[t._v("Chromium")]),t._v(" 来展示 "),a("code",[t._v("web")]),t._v(" 页面，所以 "),a("code",[t._v("Chromium")]),t._v(" 的多进程架构也被使用到。 每个"),a("code",[t._v("Electron")]),t._v(" 中的 "),a("code",[t._v("web")]),t._v("页面运行在它自己的渲染进程中。")]),t._v(" "),a("blockquote",[a("p",[t._v("主进程使用 BrowserWindow 实例创建页面。 每个 BrowserWindow 实例都在自己的渲染进程里运行页面。 当一个 BrowserWindow 实例被销毁后，相应的渲染进程也会被终止。")])]),t._v(" "),a("p",[t._v("你可以把渲染进程想像成一个浏览器窗口，它能存在多个并且相互独立，不过和浏览器不同的是，它能调用"),a("code",[t._v("Node API")]),t._v("。")]),t._v(" "),a("p",[a("strong",[t._v("职责:")])]),t._v(" "),a("ul",[a("li",[t._v("用"),a("code",[t._v("HTML")]),t._v("和"),a("code",[t._v("CSS")]),t._v("渲染界面")]),t._v(" "),a("li",[t._v("用"),a("code",[t._v("JavaScript")]),t._v("做一些界面交互")])]),t._v(" "),a("p",[a("strong",[t._v("可调用的API:")])]),t._v(" "),a("ul",[a("li",[a("code",[t._v("DOM API")])]),t._v(" "),a("li",[a("code",[t._v("Node.js API")])]),t._v(" "),a("li",[a("code",[t._v("Electron")]),t._v("提供的渲染进程"),a("code",[t._v("API")])])]),t._v(" "),a("h2",{attrs:{id:"四、electron基础"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、electron基础"}},[t._v("#")]),t._v(" 四、Electron基础")]),t._v(" "),a("h3",{attrs:{id:"_4-1-electron-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-electron-api"}},[t._v("#")]),t._v(" 4.1 Electron API")]),t._v(" "),a("p",[t._v("在上面的章节我们提到，渲染进和主进程分别可调用的"),a("code",[t._v("Electron API")]),t._v("。所有"),a("code",[t._v("Electron")]),t._v("的"),a("code",[t._v("API")]),t._v("都被指派给一种进程类型。 许多"),a("code",[t._v("API")]),t._v("只能被用于主进程中，有些"),a("code",[t._v("API")]),t._v("又只能被用于渲染进程，又有一些主进程和渲染进程中都可以使用。")]),t._v(" "),a("p",[t._v("你可以通过如下方式获取"),a("code",[t._v("Electron API")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" BrowserWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("下面是一些常用的"),a("code",[t._v("Electron API")]),t._v("：")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://www.conardli.top/img/electron/el_8_api.png",alt:""}})]),t._v(" "),a("p",[t._v("在后面的章节我们会选择其中常用的模块进行详细介绍。")]),t._v(" "),a("h3",{attrs:{id:"_4-2-使用-node-js-的-api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-使用-node-js-的-api"}},[t._v("#")]),t._v(" 4.2 使用 Node.js 的 API")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://www.conardli.top/img/electron/el_9_node.png",alt:""}})]),t._v(" "),a("p",[t._v("你可以同时在"),a("code",[t._v("Electron")]),t._v("的主进程和渲染进程使用"),a("code",[t._v("Node.js API")]),t._v("，)所有在"),a("code",[t._v("Node.js")]),t._v("可以使用的"),a("code",[t._v("API")]),t._v("，在"),a("code",[t._v("Electron")]),t._v("中同样可以使用。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("shell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" os "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'os'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\ndocument"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getElementById")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'btn'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'click'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" \n  shell"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showItemInFolder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("os"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("homedir")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("有一个非常重要的提示: 原生Node.js模块 (即指，需要编译源码过后才能被使用的模块) 需要在编译后才能和Electron一起使用。")])]),t._v(" "),a("h3",{attrs:{id:"_4-3-进程通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-进程通信"}},[t._v("#")]),t._v(" 4.3 进程通信")]),t._v(" "),a("p",[t._v("主进程和渲染进程虽然拥有不同的职责，然是他们也需要相互协作，互相通讯。")]),t._v(" "),a("blockquote",[a("p",[t._v("例如：在"),a("code",[t._v("web")]),t._v("页面管理原生"),a("code",[t._v("GUI")]),t._v("资源是很危险的，会很容易泄露资源。所以在"),a("code",[t._v("web")]),t._v("页面，不允许直接调用原生"),a("code",[t._v("GUI")]),t._v("相关的"),a("code",[t._v("API")]),t._v("。渲染进程如果想要进行原生的"),a("code",[t._v("GUI")]),t._v("操作，就必须和主进程通讯，请求主进程来完成这些操作。")])]),t._v(" "),a("p",[a("img",{attrs:{src:"http://www.conardli.top/img/electron/el_10_ipc.gif",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"_4-4-渲染进程向主进程通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-渲染进程向主进程通信"}},[t._v("#")]),t._v(" 4.4 渲染进程向主进程通信")]),t._v(" "),a("p",[a("code",[t._v("ipcRenderer")]),t._v(" 是一个 "),a("code",[t._v("EventEmitter")]),t._v(" 的实例。 你可以使用它提供的一些方法从渲染进程发送同步或异步的消息到主进程。 也可以接收主进程回复的消息。")]),t._v(" "),a("p",[t._v("在渲染进程引入"),a("code",[t._v("ipcRenderer")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipcRenderer "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("异步发送：")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("channel")]),t._v(" 发送同步消息到主进程，可以携带任意参数。")]),t._v(" "),a("blockquote",[a("p",[t._v("在内部，参数会被序列化为 "),a("code",[t._v("JSON")]),t._v("，因此参数对象上的函数和原型链不会被发送。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ipcRenderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sync-render'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我是来自渲染进程的异步消息'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("同步发送：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" msg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" ipcRenderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'async-render'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我是来自渲染进程的同步消息'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("注意: 发送同步消息将会阻塞整个渲染进程，直到收到主进程的响应。")])]),t._v(" "),a("p",[t._v("主进程监听消息：")]),t._v(" "),a("p",[a("code",[t._v("ipcMain")]),t._v("模块是"),a("code",[t._v("EventEmitter")]),t._v("类的一个实例。 当在主进程中使用时，它处理从渲染器进程（网页）发送出来的异步和同步信息。 从渲染器进程发送的消息将被发送到该模块。")]),t._v(" "),a("p",[a("code",[t._v("ipcMain.on")]),t._v("：监听 "),a("code",[t._v("channel")]),t._v("，当接收到新的消息时 "),a("code",[t._v("listener")]),t._v(" 会以 "),a("code",[t._v("listener(event, args...)")]),t._v(" 的形式被调用。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  ipcMain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sync-render'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-5-主进程向渲染进程通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-主进程向渲染进程通信"}},[t._v("#")]),t._v(" 4.5 主进程向渲染进程通信")]),t._v(" "),a("p",[t._v("https://imweb.io/topic/5b13a663d4c96b9b1b4c4e9c")]),t._v(" "),a("p",[t._v("在主进程中可以通过"),a("code",[t._v("BrowserWindow")]),t._v("的"),a("code",[t._v("webContents")]),t._v("向渲染进程发送消息，所以，在发送消息前你必须先找到对应渲染进程的"),a("code",[t._v("BrowserWindow")]),t._v("对象。：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mainWindow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" BrowserWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mainId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n mainWindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("webContents"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main-msg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("ConardLi]")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("根据消息来源发送：")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("ipcMain")]),t._v("接受消息的回调函数中，通过第一个参数"),a("code",[t._v("event")]),t._v("的属性"),a("code",[t._v("sender")]),t._v("可以拿到消息来源渲染进程的"),a("code",[t._v("webContents")]),t._v("对象，我们可以直接用此对象回应消息。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  ipcMain"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'sync-render'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("sender"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main-msg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'主进程收到了渲染进程的【异步】消息！'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("渲染进程监听：")]),t._v(" "),a("p",[a("code",[t._v("ipcRenderer.on")]),t._v(":监听 "),a("code",[t._v("channel")]),t._v(", 当新消息到达，将通过"),a("code",[t._v("listener(event, args...)")]),t._v("调用 "),a("code",[t._v("listener")]),t._v("。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ipcRenderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("on")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'main-msg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("event"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" msg")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("msg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"_4-6-通信原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-通信原理"}},[t._v("#")]),t._v(" 4.6 通信原理")]),t._v(" "),a("p",[a("code",[t._v("ipcMain")]),t._v(" 和 "),a("code",[t._v("ipcRenderer")]),t._v(" 都是 "),a("code",[t._v("EventEmitter")]),t._v(" 类的一个实例。"),a("code",[t._v("EventEmitter")]),t._v(" 类是 "),a("code",[t._v("NodeJS")]),t._v(" 事件的基础，它由 "),a("code",[t._v("NodeJS")]),t._v(" 中的 "),a("code",[t._v("events")]),t._v(" 模块导出。")]),t._v(" "),a("p",[a("code",[t._v("EventEmitter")]),t._v(" 的核心就是事件触发与事件监听器功能的封装。它实现了事件模型需要的接口， 包括 "),a("code",[t._v("addListener，removeListener")]),t._v(", "),a("code",[t._v("emit")]),t._v(" 及其它工具方法. 同原生 "),a("code",[t._v("JavaScript")]),t._v(" 事件类似， 采用了发布/订阅(观察者)的方式， 使用内部 "),a("code",[t._v("_events")]),t._v(" 列表来记录注册的事件处理器。")]),t._v(" "),a("p",[t._v("我们通过 "),a("code",[t._v("ipcMain")]),t._v("和"),a("code",[t._v("ipcRenderer")]),t._v(" 的 "),a("code",[t._v("on、send")]),t._v(" 进行监听和发送消息都是 "),a("code",[t._v("EventEmitter")]),t._v(" 定义的相关接口。")]),t._v(" "),a("h3",{attrs:{id:"_4-7-remote"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-remote"}},[t._v("#")]),t._v(" 4.7 remote")]),t._v(" "),a("p",[a("code",[t._v("remote")]),t._v(" 模块为渲染进程（web页面）和主进程通信（"),a("code",[t._v("IPC")]),t._v("）提供了一种简单方法。 使用 "),a("code",[t._v("remote")]),t._v(" 模块, 你可以调用 "),a("code",[t._v("main")]),t._v(" 进程对象的方法, 而不必显式发送进程间消息, 类似于 "),a("code",[t._v("Java")]),t._v(" 的 "),a("code",[t._v("RMI")]),t._v(" 。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nremote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("dialog"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showErrorBox")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'主进程才有的dialog模块'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'我是使用remote调用的'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"http://www.conardli.top/img/electron/el_11_remote.gif",alt:""}})]),t._v(" "),a("p",[t._v("但实际上，我们在调用远程对象的方法、函数或者通过远程构造函数创建一个新的对象，实际上都是在发送一个同步的进程间消息。")]),t._v(" "),a("p",[t._v("在上面通过 "),a("code",[t._v("remote")]),t._v(" 模块调用 "),a("code",[t._v("dialog")]),t._v(" 的例子里。我们在渲染进程中创建的 "),a("code",[t._v("dialog")]),t._v(" 对象其实并不在我们的渲染进程中，它只是让主进程创建了一个 "),a("code",[t._v("dialog")]),t._v(" 对象，并返回了这个相对应的远程对象给了渲染进程。")]),t._v(" "),a("h3",{attrs:{id:"_4-8-渲染进程间通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-8-渲染进程间通信"}},[t._v("#")]),t._v(" 4.8 渲染进程间通信")]),t._v(" "),a("p",[a("code",[t._v("Electron")]),t._v("并没有提供渲染进程之间相互通信的方式，我们可以在主进程中建立一个消息中转站。")]),t._v(" "),a("p",[t._v("渲染进程之间通信首先发送消息到主进程，主进程的中转站接受到消息后根据条件进行分发。")]),t._v(" "),a("h3",{attrs:{id:"_4-9-渲染进程数据共享"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-9-渲染进程数据共享"}},[t._v("#")]),t._v(" 4.9 渲染进程数据共享")]),t._v(" "),a("p",[t._v("在两个渲染进程间共享数据最简单的方法是使用浏览器中已经实现的"),a("code",[t._v("HTML5 API")]),t._v("。 其中比较好的方案是用"),a("code",[t._v("Storage API")]),t._v("， "),a("code",[t._v("localStorage，sessionStorage")]),t._v(" 或者 "),a("code",[t._v("IndexedDB。")])]),t._v(" "),a("p",[t._v("就像在浏览器中使用一样，这种存储相当于在应用程序中永久存储了一部分数据。有时你并不需要这样的存储，只需要在当前应用程序的生命周期内进行一些数据的共享。这时你可以用 "),a("code",[t._v("Electron")]),t._v(" 内的 "),a("code",[t._v("IPC")]),t._v(" 机制实现。")]),t._v(" "),a("p",[t._v("将数据存在主进程的某个全局变量中，然后在多个渲染进程中使用 "),a("code",[t._v("remote")]),t._v(" 模块来访问它。")]),t._v(" "),a("p",[a("img",{attrs:{src:"http://www.conardli.top/img/electron/el_12_global.gif",alt:""}})]),t._v(" "),a("p",[t._v("在主进程中初始化全局变量：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mainId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nglobal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("device "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nglobal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("__dirname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" __dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nglobal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("myField "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ConardLi'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在渲染进程中读取：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ipcRenderer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'electron'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" getGlobal "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" remote"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mainId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getGlobal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mainId'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" dirname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getGlobal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'__dirname'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" deviecMac "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getGlobal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'device'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mac"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在渲染进程中改变：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getGlobal")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'myField'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'code秘密花园'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("多个渲染进程共享同一个主进程的全局变量，这样即可达到渲染进程数据共享和传递的效果。")]),t._v(" "),a("p",[t._v("文中如有错误，欢迎在评论区指正，如果这篇文章帮助到了你，欢迎点赞和关注。")])])}),[],!1,null,null,null);s.default=n.exports}}]);