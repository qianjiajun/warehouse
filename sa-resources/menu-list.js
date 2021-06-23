// 一个菜单可以包括的所有属性 
// {
// 	id: '12345',		// 菜单id, 必须唯一
// 	name: '用户中心',		// 菜单名称, 同时也是tab选项卡上显示的名称
// 	icon: 'el-icon-user',	// 菜单图标, 参考地址:  https://element.eleme.cn/#/zh-CN/component/icon
//	info: '管理所有用户',	// 菜单介绍, 在菜单预览和分配权限时会有显示 
// 	url: 'sa-html/user/user-list.html',	// 菜单指向地址
// 	parent_id: 1,			// 所属父菜单id, 如果指定了一个值, sa-admin在初始化时会将此菜单转移到指定菜单上 
// 	is_show: true,			// 是否显示, 默认true
// 	is_blank: false,		// 是否属于外部链接, 如果为true, 则点击菜单时从新窗口打开 
// 	childList: [			// 指定这个菜单所有的子菜单, 子菜单可以继续指定子菜单, 至多支持三级菜单
// 		// .... 
// 	],
//	click: function(){}		// 点击菜单执行一个函数 
// }

// 定义菜单列表 
var menuList = [
	// {
	// 	id: '131231',
	// 	name: '文档说明',
	// 	info: 'sa-admin使用文档',
	// },
	{
		id: '01',
		name: '用户管理',
		icon: 'el-icon-user',
		info: '对用户列表、添加、统计等等...',
		childList: [{
				id: '01-01',
				name: '用户列表',
				icon: 'el-icon-document-remove',
				url: 'sa-html/user/user-list.html'
			},
			{
				id: '01-02',
				name: '用户添加',
				icon: 'el-icon-plus',
				url: 'sa-html/user/user-add.html'
			}
		]
	},
	{
		id: '02',
		name: '各种示例',
		icon: 'el-icon-search',
		info: '增删改查各种常用组件示例',
		childList: [{
				id: '02-01',
				name: '查询参数示例',
				url: 'sa-html/case/query-p-case.html'
			},
			{
				id: '02-02',
				name: '表格显示示例',
				url: 'sa-html/case/query-table-case.html'
			},
			{
				id: '02-03',
				name: '表单提交示例',
				url: 'sa-html/case/submit-form.html'
			},
			{
				id: '02-11',
				name: '在线表单构建',
				url: 'https://mrhj.gitee.io/form-generator/#/'
			},
		]
	},
	//  ========= jq22搜集 ================
	{
		id: '99',
		name: 'jq22搜集',
		icon: 'el-icon-link',
		info: '示例：外部链接',
		childList: [{
				id: '99-01',
				name: '大屏展示',
				icon: 'el-icon-link',
				info: '大屏展示页',
				childList: [{
						id: '99-01-01',
						name: '大屏1',
						url: 'http://www.jq22.com/demo/estszjcmoban202008030007/'
					}, // 原作者：http://www.jq22.com/jquery-info23260
					{
						id: '99-01-02',
						name: '大屏2',
						url: 'http://www.jq22.com/demo/estjkdsj202007301414/'
					}, // 原作者：http://www.jq22.com/jquery-info23247
					{
						id: '99-01-03',
						name: '大屏3',
						url: 'http://www.jq22.com/demo/jquerygndsjmoban202007212350/'
					}, // 原作者：http://www.jq22.com/jquery-info23239
					{
						id: '99-01-04',
						name: '大屏4',
						url: 'http://www.jq22.com/demo/jqueryEchartsny202006151033/'
					}, // 原作者：http://www.jq22.com/jquery-info23114
					{
						id: '99-01-05',
						name: '大屏5',
						url: 'http://www.jq22.com/demo/echartsdindanmoban202007302202/'
					}, // 原作者：http://www.jq22.com/jquery-info23202
					{
						id: '99-01-06',
						name: '大屏6',
						url: 'http://www.jq22.com/demo/echartssjmoban202005210009/'
					}, // 原作者：http://www.jq22.com/jquery-info23047
					{
						id: '99-01-07',
						name: '大屏7',
						url: 'http://www.jq22.com/demo/echartsdsj202002251026/'
					}, // 原作者：http://www.jq22.com/jquery-info22826
					{
						id: '99-01-08',
						name: '大屏8',
						url: 'http://www.jq22.com/demo/echartswldsj201912112223/'
					}, // 原作者：http://www.jq22.com/jquery-info22636
				],
			},
			{
				id: '99-02',
				name: '图片切换',
				url: 'http://www.jq22.com/demo/jQueryTpqh201804012309/'
			}, // 原作者：https://www.jq22.com/jquery-info18534
			{
				id: '99-03',
				name: '3D旋转特效',
				url: 'http://www.jq22.com/demo/jQueryCss3D201710241004/'
			}, // 原作者：https://www.jq22.com/jquery-info16495
			{
				id: '99-04',
				name: 'canvas炫酷星空',
				url: 'http://www.jq22.com/demo/warpDrive201712211120/index.html'
			}, // 原作者：https://www.jq22.com/jquery-info17456
			{
				id: '99-05',
				name: 'H5碰撞小球',
				url: 'http://www.jq22.com/demo/html5Pzxq201712242209/'
			}, // 原作者：https://www.jq22.com/jquery-info17482
			{
				id: '99-06',
				name: '网页画板',
				url: 'http://www.jq22.com/demo/Mapping201802252341/'
			}, // 原作者：https://www.jq22.com/jquery-info18172
			{
				id: '99-07',
				name: '简约富文本编辑器',
				url: 'http://www.jq22.com/demo/jquery-notebook-master/'
			}, // 原作者：https://www.jq22.com/jquery-info345
			{
				id: '99-08',
				name: '水滴特效',
				url: 'http://www.jq22.com/demo/jquery-shuidi20151123/'
			}, // 原作者：https://www.jq22.com/jquery-info4835
			{
				id: '99-09',
				name: '图片放大',
				url: 'http://www.jq22.com/demo/jQueryJpg201708110048/'
			}, // 原作者：http://www.jq22.com/jquery-info15264
			{
				id: '99-10',
				name: '3D云',
				url: 'http://www.jq22.com/demo/jquery-cloud-141217202931/'
			}, // 原作者：http://www.jq22.com/jquery-info1325
			{
				id: '99-11',
				name: '3D选择图片',
				url: 'http://www.jq22.com/demo/jquery-3d20150831/'
			}, // 原作者：http://www.jq22.com/jquery-info4000
			{
				id: '99-12',
				name: '蜘蛛纸牌',
				url: 'http://www.jq22.com/demo/jqueryspider201809140137/'
			}, // 原作者：http://www.jq22.com/jquery-info20047
			{
				id: '99-13',
				name: '大转盘',
				url: 'http://www.jq22.com/demo/jquerylocal201912122316/'
			}, // 原作者：http://www.jq22.com/jquery-info22646
			{
				id: '99-14',
				name: '旋转地球',
				url: 'http://www.jq22.com/demo/earth201810300101/'
			}, // 原作者：http://www.jq22.com/jquery-info20328
			{
				id: '99-15',
				name: '下雨动画',
				url: 'http://www.jq22.com/demo/html5-canvas-rain201710252014/'
			}, // 原作者：http://www.jq22.com/jquery-info16518
			{
				id: '99-16',
				name: '绚丽星空',
				url: 'http://www.jq22.com/demo/jQuery3dxk201710142249/'
			}, // 原作者：http://www.jq22.com/jquery-info16294
			{
				id: '99-17',
				name: '3d波浪墙',
				url: 'http://www.jq22.com/demo/voxels-liquid201704112355/'
			}, // 原作者：http://www.jq22.com/jquery-info13400
			{
				id: '99-18',
				name: '元素周期表',
				url: 'http://www.jq22.com/demo/jquery-3D20151113/'
			}, // 原作者：http://www.jq22.com/jquery-info4710

			{
				id: '99-19',
				name: '旋转相册',
				url: 'http://www.jq22.com/demo/tikm202006072243/'
			}, // 原作者：http://www.jq22.com/jquery-info23116
			{
				id: '99-20',
				name: '装逼专用',
				url: 'http://www.jq22.com/demo/canvaslxy202003192234/'
			}, // 原作者：http://www.jq22.com/jquery-info22793
			{
				id: '99-21',
				name: '3D粒子文字',
				url: 'http://www.jq22.com/demo/3dwz201912102124/'
			}, // 原作者：http://www.jq22.com/jquery-info22631
			{
				id: '99-22',
				name: '多面立方体',
				url: 'http://www.jq22.com/demo/threelft201905080117/'
			}, // 原作者：http://www.jq22.com/demo/threelft201905080117/

			{
				id: '99-23',
				name: '常见配色',
				url: 'http://www.jq22.com/demo/jQueryColour202008050020/'
			}, // 原作者：http://www.jq22.com/jquery-info23262
			{
				id: '99-24',
				name: '音量调节',
				url: 'http://www.jq22.com/demo/AdjustVolume202005122241/'
			}, // 原作者：http://www.jq22.com/jquery-info23045
			{
				id: '99-25',
				name: '重力下落',
				url: 'http://www.jq22.com/demo/gamecaisse202005220040/'
			}, // 原作者：http://www.jq22.com/jquery-info23074
			{
				id: '99-26',
				name: '表情匹配',
				url: 'http://www.jq22.com/demo/emojimatchgame201907170050/dist/'
			}, // 原作者：http://www.jq22.com/jquery-info21952


		]
	},
]