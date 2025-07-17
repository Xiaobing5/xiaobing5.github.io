***from https://lfwg.xpdbk.com/post/baritone%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%AE%9E%E7%94%A8%E5%91%BD%E4%BB%A4%E5%A4%A7%E5%85%A8/***
# baritone 机器人实用命令大全

February 01, 2025

[我的世界](https://lfwg.xpdbk.com/categories/%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C/) , [baritone 机器人](https://lfwg.xpdbk.com/categories/baritone%E6%9C%BA%E5%99%A8%E4%BA%BA/) , [baritone 机器人命令](https://lfwg.xpdbk.com/categories/baritone%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%91%BD%E4%BB%A4/) , [baritone](https://lfwg.xpdbk.com/categories/baritone/)

## baritone 机器人

baritone 机器人是一个开源的我的世界辅助机器人，常用于 2B2T 等无政府服务器，当然了在普通生存服玩这个机器人，分分钟满资源，腐竹追着你打。

啊，回归我们的正题！

在 2B2T 里，每天也有百余人的在线量，在出生点欺负萌新者也不会少。这种生存条件下，如果没有一套辅助机器人，好好的逃离出生地或者存活下去还真是举步维艰。我当时下载的是 Meteor 流星客户端，然而 Bing 和 Google 上对于其的介绍和指南实在是少。Baritone 这个自动探路机器人，可谓生存一大利器，能执行自动挖矿、自动铺平、自动规划路线等多种功能，但这个机器人的指令我翻遍 Github 也只见零零散散不成样子。今天便通过 Github 上的信息整理一下放到这里，希望对各位能有帮助。

Github 链接:https://github.com/cabaletta/baritone/blob/master/USAGE.md

---

和 minecraft 的指令前缀 `/` 相仿，使用机器人 Baritone，则前缀为`#`, 就和 MC 原版指令类似

## Baritone 常用指令

我们首先需要记住一个指令，那就是帮助指令`#help`。当想查询一个指令时，比如想知道`#goto` 怎么用，就可以`#help goto` 查找。而且`#help` 里还可以用鼠标点击翻页和查看

下面介绍基本指令，哈哈

`#thisway 1000` 设置一个往你面对的方向走一千格距离的目标。（不用输入完整坐标）

`#path` 行动。用`#goal <x> <y> <z>` 设定目标后需要这个指令才能动起来。（前提是`#goal`）

`#invert` 远离目标，会使你离目标越来越远。（比如那地方有凋零）

`#goal` 将当前位置设定为目标地点（比如你离开之后就可以用 **path** 准确回来了）

`#goal x y z` 或 `#goal x z` 或 `#goal y` 设置目标为一个给定的坐标（随时可以回到对应地点）

`#goal clear` 清除之前设置的目标地点 (挺有用的)

`#goto x y z` 或`#goto x z` 或`#goto y` 立即前往给定的坐标。这个指令相当于`#goal` 和`#path` 二合一了（最快的）

`#cancel` 或`#stop` 终止当前行动 (完全停止)

`#pause` 或者`#p` 暂停当前行动（和终止不同，暂停还能继续，终止就完全结束了）

`#resume` 继续之前暂停的行动（这个断点重来）

`#goto 方块ID` 前往最近的给定的方块。比如`#goto nether_portal`，是前往最近的地狱传送门。`#goto ender_chest`，是寻找最近的末影箱。注意参数必须是方块类型，比如你去找小麦种子或者钻石剑，他就会报错的，更别输入泥土（`#goto dirt`）你听我的这样会让电脑崩溃。

`#mine 方块ID` 重点功能！只要是属于方块类型都可以开采，不仅仅包含矿物。例如，

你可以`#mine diamond_ore deepslate_diamond_ore`，自动挖钻石矿和深板岩石里面的钻石矿；

量有要求，就在方块前面加上数字，`mine 数量 方块`，比如采集 64 个钻石矿，就是`#mine 64 diamond_ore deepslate_diamond_ore`。

如果你想要同时挖不同的矿石，你可以`#mine 方块ID 方块ID`，就是这样`#mine diamond_ore iron_ore`

在服务器里使用这功能一般都是作弊的，但咱又不想自己动手，怎么办呢？这时候打开采集限制功能，`#legitMine true`，这时候你只能挖眼前能看到的东西，挖出来的矿道形状就像你在随机挖掘，就掩盖作弊嫌疑了（。

## 以下是矿物列表

## 我的世界 1.21.1 矿物 ID 列表 (含远古残骸)

|矿物中文名|矿物 ID|深板岩矿物 ID|解释|
|---|---|---|---|
|煤矿|minecraft:coal_ore|minecraft:deepslate_coal_ore|普通的煤矿石，用于冶炼煤炭。|
|铁矿|minecraft:iron_ore|minecraft:deepslate_iron_ore|普通的铁矿石，用于冶炼铁锭。深板岩铁矿石在深板岩生物群系中生成。|
|铜矿|minecraft:copper_ore|minecraft:deepslate_copper_ore|普通的铜矿石，用于冶炼铜锭。深板岩铜矿石在深板岩生物群系中生成。|
|金矿|minecraft:gold_ore|minecraft:deepslate_gold_ore|普通的金矿石，用于冶炼金锭。深板岩金矿石在深板岩生物群系中生成。|
|红石矿|minecraft:redstone_ore|minecraft:deepslate_redstone_ore|普通的红石矿石，用于获得红石粉。深板岩红石矿石在深板岩生物群系中生成。|
|青金石矿|minecraft:lapis_ore|minecraft:deepslate_lapis_ore|普通的青金石矿石，用于获得青金石。深板岩青金石矿石在深板岩生物群系中生成。|
|钻石矿|minecraft:diamond_ore|minecraft:deepslate_diamond_ore|普通的钻石矿石，用于获得钻石。深板岩钻石矿石在深板岩生物群系中生成。|
|绿宝石矿|minecraft:emerald_ore||普通的祖母绿矿石，用于获得祖母绿。|
|远古残骸|minecraft:ancient_debris||在地狱深处生成的稀有矿物，用于冶炼远古合金。|

**注意:** 以上 ID 是在 Minecraft Java 版本 1.21.1 中的 ID。其他版本或游戏平台的 ID 可能略有不同。 深板岩矿物仅在深板岩生物群系中生成。 此表格仅列出了主要的矿物，并未包含所有变种 (例如，不同类型的煤矿石)。

`#click` 赋予鼠标选择指令功能。这时候左键单击方块，你就会站进方块里面；右键单击方块，就会站到方块上面，相当于不用 WASD 控制人物，而是鼠标点哪里就可以去哪里。鼠标左键按住并拖拽相当于`#sel` 功能，选出一定的范围。

`#sel` 系列功能。重要功能！用于选定区域和对选定区域的处理。配合灵魂出窍比较好用。走到第一个地方`#sel 1`，然后走到第二个地方`#sel 2` 可以通过选定两顶点框定一个长方体区域，其中选定一点时该点为玩家本人所在的位置。也可以指定坐标，如`#sel 1 x y z`。`#sel clear` 取消选区。`#sel set 指定方块ID` 将选区内填充满指定方块，如果选区内原来有非指定方块占位的话会挖掉再放指定方块。`#sel replace 被替换方块 指定方块`，将区域内被替换方块替换成指定方块。`#sel cleararea` 清空这片选区，就是把这片区域挖空。此外还有好多功能，大家可以在游戏里`#help sel` 查看。

`#follow player 玩家姓名`跟随指定玩家。`f#ollow players` 跟随指定范围内的任意玩家（一般和杀戮光环功能配合使用刷爆击杀数（）。`#follow entity 生物种类`，跟随指定种类的生物。`#follow entities` 跟随任意生物。

`#wp` 路径点功能。`#wp save 名称`建立名为指定名称的路径点，`#wp goto 名称`前往给定名称的路径点。感觉这个功能挺实用的，还可以分类贴标签等等，更多功能可以用`#help wp` 在游戏里看。

`#tunnel` 挖掘隧道，默认一个宽两个高（刚好容一个 steve 通过）。`#tunnel 高度 宽度 长度`可以挖掘自定义长宽高的隧道（其实就是个长方体了）。注意某些必要情况下挖掘的隧道可能会偏移直线，比如为了避开岩浆。

`#farm` 自动收获、种植作物，或者用骨粉催熟作物。`#farm 范围半径`收货指定范围内的农作物。

`#explore x z` 从给定坐标处向最近的没去过的区块探图，没给坐标就默认从玩家当前位置开始探。

`#come` 一般配合灵魂出窍使用，让机器人前往你当前灵魂出窍所在位置

`#blacklist` 在行动时使用，排除最近的目标。比如现在一个传送门离你 100 格远，一个传送门离你 500 格远，你用`#goto nether_portal` 前往传送门。则使用`#blacklist` 会把离你最近的 100 格的地狱门排除掉，而是前往 500 格远的那个。

`#find` 寻找方块。（简单但实用的功能）

`#surface` 或`#top` 前往表面，一般在洞穴里回地表的时候很实用（但有时候会卡住）。

## 可能问的问题

一、寻路

1. 能不能让机器人尽量少破坏方块，如果实在走不过去才破坏方块？

`#blockBreakAdditionalPenalty 数字`数字越大，机器人在寻路时越倾向于不破坏方块（太大会卡住）。

2. 怎么寻路时躲避怪物？

`#avoidance true` 开启躲避怪物，

`#mobAvoidanceRadius 数字`躲避怪物的距离 (格数)（建议 20，如果出生地凋零多就 50）

3. 当目标位置改变时，怎么停止寻路？

`#cancelOnGoalInvalidation true` 比如正在挖铁矿，当铁矿被挖下，目标消失，则停止挖矿；比如正在寻找金块，金块被别人挖下，则停止寻路（即使别人再放下也不会继续）。

4. 怎么改变寻路显示路线的线条外观（粗细颜色等）？

首先`#renderPath true` 和`#renderGoal true` 应当都是 true，

`#pathRenderLineWidthPixels 像素数`调整寻路路线显示宽度，

`#goalRenderLineWidthPixels 像素数`调整目标框线显示宽度，

`#colorCurrentPath 颜色`调整路线显示颜色，如 red，blue，green 等，

注，可能由于光影显示异常。

5. 怎么让机器人永远往目标前进，即使已经到达或者无法到达？

`#disableCompletionCheck true` 取消目标完成检查。

6. 自动寻路不能在雪地上走怎么办？

~~没办法，因为计算在雪地上的行走会使 baritone 计算量剧增。若必须在雪地中穿行，可在希望走的雪地路线上每格插上火把。~~

~~该问题详见 https://github.com/cabaletta/baritone/issues/572~~

已经可以走了且有细雪会跳过去躲过去。

---

二、挖矿

1. 自动挖矿怎么同时挖几种矿物？

`#mine 矿物1 矿物2 ……` 如`#mine diamond_ore gold_ore`，在 mine 后面打上多种矿物名称即可，中间记得空格。

2. 挖矿怎么挖某个 mod 的矿物？

`#mine 矿物名称`记得把名称打全，如`#mine pixelmon:sapphire_ore`，记得在 mod 矿物 id 前加 mod 的 id 以及冒号

3. 怎么限制挖掘高度？

`#minYLevelWhileMining 70` 最低在 y=70 高挖矿；设为 0 则是所有层都挖。

`#legitMineYLevel 70` 只在 y=70 这层挖矿；

4. 怎么让机器人不挖某种方块？

`#blocksToAvoidBreaking 方块名称1 方块名称2`

5. 怎么让机器人去捡掉落物？

`#mineScanDroppedItems true`, 允许扫描掉落物，

`#mineDropLoiterDurationMSThanksLouca 毫秒数`，设置扫描掉落物间隔 (毫秒)，调小一点。

6. 能不能只显示矿物位置，但不去自动寻路挖矿？

可以试试先用`#mine`，显示出矿物位置之后再用`#pause`，取消显示的话就`#stop`

7. 挖矿时怎么按层数顺序挖？即先挖完上面一层，再挖下面的一层。

`#buildInLayers true` 建筑时一层全部建完再建一层

`#layerOrder true`true 是从上往下建，false 是从下往上建。

这两个是建筑的设置，但在挖矿可能也适用。

8. 服务器不能用 mine，显示 “an unhandled exception occurred the error is in your game log”，但其他功能如 goto 都能用？

得先传送到其它世界一次，比如下界。

---

四、种地

1. 种地面积太大，绿色框线太多造成卡顿？

可以尝试调整以下设置，一般只第一个就可以。

`#renderGoal false`(渲染目标 - 关闭)，

`#renderGoalAnimated false`(渲染目标动画 - 关闭)，

`#renderSelectionBoxes false`(渲染选择区域 - 关闭)，

`#renderGoalXZBeacon false`(渲染目标信标柱 关闭)，

`#renderSelectionBoxesIgnoreDepth false`(不论高度都渲染目标 - 关闭)。

2. 怎么自动种植？怎么自动种植地狱疣？

`#replantCrops true` 收获作物后会重新种植。注，仙人掌和甘蔗除外，会保留让其重新生长。

`#replantNetherWart true` 收获地狱疣并重新种植。

3. 机器人都收割完了才收集掉落物？

见上面`二、挖矿 问题5`

五、其他

1. 怎么让机器人自动寻找目标后对目标右键？

`#rightClickContainerOnArrival true` 注意需要是容器，比如箱子、末影箱、熔炉，像拉杆之类的没试过不知道行不行。

2. 机器人能用鞘翅吗？

~~想多了╮(╯▽╰)╭~~ 穿好鞘翅带好烟花然后输入

`#set elytraPredictTerrain true`

`#elytrafireworkspeed 0.5`（设置烟花消耗速度让其花费少一点，不然没烟花掉岩浆）

`#goto x y(可不填) z`

`#elytra`

然后两下空格就自动起飞了

3. 机器人能自动吃东西吗？

不能，但可以搭配其他辅助

4. 在聊天框指令不加 #前缀也能实现，怎么改回来？

`#chatControl false` 如果为 true，则不用加 #前缀，在聊天框就能直接输入指令，如果为 False 就删除 baritone 下的设置 txt 就能恢复。

## 机器人设置

`#allowBreak`true/false，默认 true。是否允许破坏方块。

`#allowSprint`true/false，默认 true。是否允许疾跑。

`#allowPlace`true/false，默认 true。是否允许放置方块。

`#allowInventory`true/false，默认 false。是否允许 Baritone 将背包里的东西拿到物品栏（即 1-9 热键）。

`#assumeExternalAutoTool`true/false 默认 false。是否使用了其他自动切换工具 mod。如果 true 的话 baritone 就会禁用自己的工具自动切换功能。

`#autoTool`true/false，默认 true。是否自动切换最合适的工具。

`#blockPlacementPenalty` 数字，默认：20.0，单位为游戏刻（1tick=0.05 秒）。方块放置惩罚，即放置方块的最小间隔时间。这个 1 秒间隔的默认放置速度，主要是为了减少浪费手中有限方块的可能性。减少间隔时间增大 baritone 规划路径时的计算量。

`#blockBreakAdditionalPenalty` 数字，默认：2.0，单位 tick。方块破坏额外惩罚，即破坏方块的最小时间间隔。主要是防止失手破坏更多方块。（所以说默认情况下，最快也就一秒钟破坏 10 个方块罢了）

`#jumpPenalty` 数字，默认 2.0，单位 tick。跳跃惩罚，即按空格键的最小间隔时间。这个限制的目的是节省饥饿度。

`#walkOnWaterOnePenalty` 数字，默认 3.0，单位 tick。水上行走惩罚。因为在水面上前进非常消耗饥饿度。

`#allowWaterBucketFall`true/false，默认 true。是否允许落地水。但成功率可疑。

`#assumeWalkOnWater`true/false，默认 false。是否允许在水上行走。允许 baritone 在静止的水面上行走。（冰霜行者配备）

`#assumeWalkOnLava`true/false，默认 false。是否允许在岩浆里行走。记得喝抗火药水。

`#assumeStep`true/false，默认 false。是否上升时只能走台阶，而不是跳上去。

`#assumeSafeWalk`true/false，默认 false。是否安全行走，而非在方块边缘潜行。

`#allowJumpAt256`true/false，默认 false。是否允许在 256 格处跳跃，这个默认 false 是因为此功能曾在 constantiam 服务器（国外的一个服务器）失效了。

`#allowParkourAscend`true/false，默认 true。是否允许跑酷跳跃。前置的配置：[allowParkour true]。

`#allowDiagonalDescend`true/false，默认 false。是否允许向斜方向跳下。有点不太安全，但比 [allowParkour] 要好一点，但在地狱里会更危险。

`#allowDiagonalAscend`true/false，默认 false。是否允许斜方向跳上去。比斜方向跳下去安全多了。

`#allowDownward`true/false，默认 true。是否允许垂直挖掘。猛男垂直挖矿必选。

`#acceptableThrowawayItems` 方块，默认泥土、原石、石头、地狱岩。可接受的用于放置的一次性方块，如寻路时搭桥搭路等。

`#blocksToAvoid` 方块，默认空。避免接触的方块。

`#blocksToDisallowBreaking` 方块，默认空。禁止破坏的方块。

`#blocksToAvoidBreaking` 方块，默认工作台、熔炉、箱子、陷阱箱、告示牌。尽量避免破坏的方块。避免不了那就没办法咯。

`#avoidBreakingMultiplier` 数字，默认 0.1。破坏速度乘数，顾名思义。

`#buildIgnoreBlocks` 方块。建筑时当作空气一样忽略的方块。比如建筑文件里要求某一区域是空气，但恰好此名单里的方块就在该区域内，那么也会被忽略（而不会被清理掉）。

`#buildSkipBlocks` 方块。建筑时当作正确方块而跳过的方块。该名单上的方块在建筑文件要求的任何地方都是正确的。

`#buildSubstitutes` 映射。用法，[buildSubstitutes 原本方块 可替代方块]，例 [buildSubstitutes stone dirt,cobblestone]。设置可替换的建筑方块。建筑时会首先应用可替代方块中能用的第一个方块，记得把原本方块也写进可替代方块里。（格式应该是这样写的，但不知道为啥我自己用不了）。

`#okIfAir` 方块。建筑时列表中的方块所在的位置只允许空气存在。就是不让建。

`#buildIgnoreExisting`true/false，默认 false。是否忽略建筑范围内已存在的非空气方块。如果为 true，则不清理建造范围内原本存在的方块，而是只搭建新方块。

`#buildIgnoreDirection`true/false，默认 false。建筑时是否忽略方向。例如带釉陶瓦的方向。

`#avoidUpdatingFallingBlocks`true/false，默认 true。是否避免更新重力方块，如避免破坏未受支撑的重力方块旁边的方块，即，不会触发沙子或沙砾的坍塌。

`#allowVines`true/false，默认 false。是否启用关于藤蔓的一些高级（寻路等）功能。作者建议：建议永远不要启用，藤蔓很有可能让 baritone 陷入各种奇怪的死循环中。

`#allowWalkOnBottomSlab`true/false，默认 true。是否允许在下半砖行走，因为复杂的半砖机制会影响 baritone 的高效寻路。除非你家里到处都是下半砖，否则还是别开了。

`#allowParkour`true/false，默认 false。是否允许跑酷。非常不可靠的功能。

`#allowParkourPlace`true/false，默认 false。是否允许跑酷时放方块。比起跑酷功能，实际上很可靠。

`#considerPotionEffects`true/false，默认 true。考虑药水效果。例如你中了挖掘疲劳或有急迫效果时，在挖掘时就会自动调整。

`#sprintAscends`true/false，默认 true。允许疾跑跳上方块。

`#overshootTraverse`true/false，默认 true。如果到达目的地时不小心超过了目标方块一格，同样视作完成。一般来说当速度很快时（超过 20m/s）有帮助，免得老是跑过头而反复横跳。

`#pauseMiningForFallingBlocks`true/false，默认 true。是否在重力方块下落时等待。挖方块开路时如果遇到重力方块下落，将等到其全部停止运动再继续前进。

`#rightClickSpeed` 数字（整数），默认 4，单位 tick。鼠标右键点击最小间隔。

`#blockReachDistance` 数字，默认 4.5。能够接触的最远方块距离，就是胳膊有多长。

`#randomLooking` 数字，默认 0.01，单位度。每 tick 随机化俯仰和航偏多少度，设置为 0 则是禁用。（路径规划用的）

`#costHeuristic` 数字，默认 3.563。探路成本，baritone 寻路的一个核心参数。建议维持默认。

`#pathingMaxChunkBorderFetch` 数字（整数），默认 50。在规划的路径到达已知区域的边界前，对已加载或缓存区块外进行获取的最大次数。又一个寻路核心参数，没必要改。

`#backtrackCostFavoringCoefficient` 数字，默认 0.5，设置为 1.0 则为禁用。该功能见 https://github.com/cabaletta/baritone/issues/18

- [我的世界](https://lfwg.xpdbk.com/tags/%E6%88%91%E7%9A%84%E4%B8%96%E7%95%8C/)
- [baritone 机器人](https://lfwg.xpdbk.com/tags/baritone%E6%9C%BA%E5%99%A8%E4%BA%BA/)
- [baritone 机器人命令](https://lfwg.xpdbk.com/tags/baritone%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%91%BD%E4%BB%A4/)
- [baritone](https://lfwg.xpdbk.com/tags/baritone/)

![LEl_FENG avatar](https://lfwg.xpdbk.com/img/avatar.png)

关于 LEl_FENG

平时喜欢做一些配置，但是这些参数配置老爱被删掉，所以要放到这里.