***from Baritone官方文档***
# [Prefix  前缀](https://github.com/cabaletta/baritone/blob/1.19.4/USAGE.md#prefix)

Baritone's chat control prefix is `#` by default. In Impact, you can also use `.b` as a prefix. (for example, `.b click` instead of `#click`)  
默认情况下，Baritone 的聊天控制前缀为 `#`。在 Impact 中，您还可以使用 `.b` 作为前缀。（例如，`.b click` 而不是 `#click`）

Baritone commands can also by default be typed in the chatbox. However if you make a typo, like typing "gola 10000 10000" instead of "goal" it goes into public chat, which is bad, so using `#` is suggested.  
默认情况下，男中音命令也可以在聊天框中键入。但是，如果您输入了错误，例如键入 “gola 10000 10000” 而不是 “goal”，它会进入公共聊天，这很糟糕，因此建议使用 `#`。

To disable direct chat control (with no prefix), turn off the `chatControl` setting. To disable chat control with the `#` prefix, turn off the `prefixControl` setting. In Impact, `.b` cannot be disabled. Be careful that you don't leave yourself with all control methods disabled (if you do, reset your settings by deleting the file `minecraft/baritone/settings.txt` and relaunching).  
要禁用直接聊天控制（无前缀），请关闭 `chatControl` 设置。要禁用带有 `#` 前缀的聊天控制，请关闭 `prefixControl` 设置。在 Impact 中，无法禁用 `.b`。请注意，不要在禁用所有控制方法的情况下禁用自己（如果禁用，请通过删除文件 `minecraft/baritone/settings.txt` 并重新启动来重置设置）。

# [For Baritone 1.2.10+, 1.3.5+, 1.4.2+](https://github.com/cabaletta/baritone/blob/1.19.4/USAGE.md#for-baritone-1210-135-142)
男中音 1.2.10+， 1.3.5+， 1.4.2+

Lots of the commands have changed, BUT `#help` is improved vastly (its clickable! commands have tab completion! oh my!).  
许多命令都发生了变化，但 `#help` 有了很大的改进（它的可点击！命令有 Tab 键补全！哦，我的天啊！

Try `#help` I promise it won't just send you back here =)  
试试 `#help` 我保证它不会只是把你送回这里 =）

"wtf where is cleararea" -> look at `#help sel`  
“wtf where is cleararea” -> 查看 `#help sel`

"wtf where is goto death, goto waypoint" -> look at `#help wp`  
“wtf where is goto death， goto waypoint” -> 看看 `#help wp`

just look at `#help` lmao  
看看 `#help` 笑死我了

Watch this [showcase video](https://youtu.be/CZkLXWo4Fg4)!  
观看此[展示视频](https://youtu.be/CZkLXWo4Fg4) ！

# [Commands  命令](https://github.com/cabaletta/baritone/blob/1.19.4/USAGE.md#commands)

[Tutorial playlist  播放列表教程](https://www.youtube.com/playlist?list=PLnwnJ1qsS7CoQl9Si-RTluuzCo_4Oulpa)

**All** of these commands may need a prefix before them, as above ^.  
**所有这些**命令之前可能需要一个前缀，如上 ^ 所示。

`help`

To toggle a boolean setting, just say its name in chat (for example saying `allowBreak` toggles whether Baritone will consider breaking blocks). For a numeric setting, say its name then the new value (like `primaryTimeoutMS 250`). It's case insensitive. To reset a setting to its default value, say `acceptableThrowawayItems reset`. To reset all settings, say `reset`. To see all settings that have been modified from their default values, say `modified`.  
要切换布尔设置，只需在聊天中说出它的名称（例如，说 `allowBreak` 切换 Baritone 是否会考虑打破区块）。对于数字设置，先说出其名称，然后说出新值（如 `primaryTimeoutMS 250`）。它不区分大小写。要将设置重置为其默认值，请说 `acceptableThrowawayItems reset` 。要重置所有设置，请说 `reset`。要查看已从默认值修改的所有设置，请说 `modified`。

Commands in Baritone:  男中音中的命令：

- `thisway 1000` then `path` to go in the direction you're facing for a thousand blocks  
    `这条路 1000` 然后朝着你面对的方向走`一`千个方块
- `goal x y z` or `goal x z` or `goal y`, then `path` to set a goal to a certain coordinate then path to it  
    `目标 x y z` 或`目标 x z` 或`目标 y`，然后`是`路径，将目标设置到某个坐标，然后是路径到它
- `goto x y z` or `goto x z` or `goto y` to go to a certain coordinate (in a single step, starts going immediately)  
    `goto x y z` 或 `goto x z` 或 `goto y` 转到某个坐标（只需一个步骤，立即开始）
- `goal` to set the goal to your player's feet  
    `goal` 将目标设置为球员的脚
- `goal clear` to clear the goal  
    `goal clear` 清除目标
- `cancel` or `stop` to stop everything, `forcecancel` is also an option  
    `取消`或`停止`停止一切， `强制取消`也是一个选项
- `goto portal` or `goto ender_chest` or `goto block_type` to go to a block. (in Impact, `.goto` is an alias for `.b goto` for the most part)  
    `转到 Portal` 或 `Goto ender_chest` 或 `Goto block_type` 以转到块。（在 Impact 中，`.goto` 在很大程度上是 `.b goto` 的别名）
- `mine diamond_ore iron_ore` to mine diamond ore or iron ore (turn on the setting `legitMine` to only mine ores that it can actually see. It will explore randomly around y=11 until it finds them.) An amount of blocks can also be specified, for example, `mine 64 diamond_ore`.  
    `“矿 diamond_ore iron_ore （Mine` ） 以开采金刚石矿石或铁矿石（启用” `合法矿山“（legitMine`） 设置以仅开采它实际可以看到的矿石。它将在 y=11 附近随机探索，直到找到它们。也可以指定区块数量，例如， `开采 64 diamond_ore`。
- `click` to click your destination on the screen. Right click path to on top of the block, left click to path into it (either at foot level or eye level), and left click and drag to select an area (`#help sel` to see what you can do with that selection).  
    `单击`以单击屏幕上的目标。右键单击块顶部的路径，左键单击以进入该块的路径（在脚部或眼睛水平），然后左键单击并拖动以选择一个区域（`#help 选择`以查看您可以对该选择做什么）。
- `follow player playerName` to follow a player. `follow players` to follow any players in range (combine with Kill Aura for a fun time). `follow entities` to follow any entities. `follow entity pig` to follow entities of a specific type.  
    `follow player playerName` 来关注玩家。 `跟随玩家`  以跟随范围内的任何玩家（与 Kill Aura 结合使用，享受欢乐时光）。`follow entities （关注实体` ） 以关注任何实体。`follow entity pig （跟随实体 pig`） 以关注特定类型的实体。
- `wp` for waypoints. A "tag" is like "home" (created automatically on right clicking a bed) or "death" (created automatically on death) or "user" (has to be created manually). So you might want `#wp save user coolbiome`, then to set the goal `#wp goal coolbiome` then `#path` to path to it. For death, `#wp goal death` will list waypoints under the "death" tag (remember stuff is clickable!)  
    `WP` 表示航点。“标签”类似于“home”（在右键单击床时自动创建）或“death”（在死亡时自动创建）或“user”（必须手动创建）。所以你可能想`保存用户 coolbiome #wp` 然后设定目标 `#wp coolbiome`，然后 `#path` 路径实现它。对于死亡，`#wp 目标死亡`将在“死亡”标签下列出路径点（请记住，东西是可点击的！
- `build` to build a schematic. `build blah.schematic` will load `schematics/blah.schematic` and build it with the origin being your player feet. `build blah.schematic x y z` to set the origin. Any of those can be relative to your player (`~ 69 ~-420` would build at x=player x, y=69, z=player z-420).  
    `build` 来构建原理图。`Build Blah.Schematic` 将加载 `Schematics/Blah.Schematic` 并以玩家的脚为原点进行构建。 `构建 blah.schematic x y z` 来设置原点。其中任何一个都可以是相对于你的玩家的（`~ 69 ~-420` 将在 x=玩家 x， y=69， z=玩家 z-420 处构建）。
- `schematica` to build the schematic that is currently open in schematica  
    `Schematica` 构建当前在 Schematica 中打开的原理图
- `tunnel` to dig and make a tunnel, 1x2. It will only deviate from the straight line if necessary such as to avoid lava. For a dumber tunnel that is really just cleararea, you can `tunnel 3 2 100`, to clear an area 3 high, 2 wide, and 100 deep.  
    `隧道`挖掘并建造隧道，1x2。它只会在必要时偏离直线，例如避免熔岩。对于实际上只是净区的较笨的隧道，您可以`开挖 3 2 100 条隧道` ，以清理 3 高、2 宽和 100 深的区域。
- `farm` to automatically harvest, replant, or bone meal crops. Use `farm <range>` or `farm <range> <waypoint>` to limit the max distance from the starting point or a waypoint.  
    `农场`自动收割、再种植或骨粉作物。使用`农场 <range>` 或`农场 <range> <waypoint>` 来限制与起点或航点的最大距离。
- `axis` to go to an axis or diagonal axis at y=120 (`axisHeight` is a configurable setting, defaults to 120).  
    `axis` 转到 y=120 处的轴或对角线轴（`axisHeight` 是可配置的设置，默认为 120）。
- `explore x z` to explore the world from the origin of x,z. Leave out x and z to default to player feet. This will continually path towards the closest chunk to the origin that it's never seen before. `explorefilter filter.json` with optional invert can be used to load in a list of chunks to load.  
    `探索 X Z` 以从 X，Z 的原点探索世界。省略 x 和 z 以默认为玩家脚。这将持续指向最接近源的 chunk，这是以前从未见过的。带有可选 INVERT 的 `ExploreFilter filter.json` 可用于加载要加载的 chunk 列表。
- `invert` to invert the current goal and path. This gets as far away from it as possible, instead of as close as possible. For example, do `goal` then `invert` to run as far as possible from where you're standing at the start.  
    `invert` 反转当前目标和路径。这会尽可能远离它，而不是尽可能接近它。例如，do `goal` then `invert` 以尽可能远离您最初站立的位置。
- `come` tells Baritone to head towards your camera, useful when freecam doesn't move your player position.  
    `come` 指示 Baritone 朝您的摄像机走去，这在 Freecam 不移动您的播放器位置时很有用。
- `blacklist` will stop baritone from going to the closest block so it won't attempt to get to it.  
    `blacklist` 将阻止 Baritone 前往最近的区块，因此它不会尝试访问该区块。
- `eta` to get information about the estimated time until the next segment and the goal, be aware that the ETA to your goal is really unprecise.  
    `预计`到达时间 要获取有关距离下一个路段和目标的估计时间的信息，请注意，到您的目标的预计到达时间确实不准确。
- `proc` to view miscellaneous information about the process currently controlling Baritone.  
    `proc` 查看有关当前控制 Baritone 的进程的杂项信息。
- `repack` to re-cache the chunks around you.  
    `repack` 重新缓存您周围的 chunk。
- `gc` to call `System.gc()` which may free up some memory.  
    `gc` 调用 `System.gc（）` 这可能会释放一些内存。
- `render` to fix glitched chunk rendering without having to reload all of them.  
    `render` 修复故障的块渲染，而无需重新加载所有块。
- `reloadall` to reload Baritone's world cache or `saveall` to save Baritone's world cache.  
    `reloadall` 重新加载 Baritone 的世界缓存，或 `saveall` 保存 Baritone 的世界缓存。
- `find` to search through Baritone's cache and attempt to find the location of the block.  
    `find` 搜索 Baritone 的缓存并尝试查找块的位置。
- `surface` or `top` to tell Baritone to head towards the closest surface-like area, this can be the surface or highest available air space.  
    `surface` 或 `top` 告诉 Baritone 朝最近的 surface like 区域前进，这可以是 surface 或最高的可用空气空间。
- `version` to get the version of Baritone you're running  
    `version` 以获取您正在运行的 Baritone 版本
- `damn` daniel  `该死的`丹尼尔

All the settings and documentation are [here](https://github.com/cabaletta/baritone/blob/master/src/api/java/baritone/api/Settings.java). If you find HTML easier to read than Javadoc, you can look [here](https://baritone.leijurv.com/baritone/api/Settings.html#field.detail).  
所有设置和文档都[在这里](https://github.com/cabaletta/baritone/blob/master/src/api/java/baritone/api/Settings.java) 。如果您发现 HTML 比 Javadoc 更容易阅读，可以查看[此处](https://baritone.leijurv.com/baritone/api/Settings.html#field.detail) 。

There are about a hundred settings, but here are some fun / interesting / important ones that you might want to look at changing in normal usage of Baritone. The documentation for each can be found at the above links.  
大约有一百个设置，但这里有一些有趣/有趣/重要的设置，您可能希望查看在 Baritone 的正常使用中更改这些设置。每个文档都可以在上面的链接中找到。

- `allowBreak`
- `allowSprint`
- `allowPlace`
- `allowParkour`
- `allowParkourPlace`
- `blockPlacementPenalty`
- `renderCachedChunks` (and `cachedChunksOpacity`) <-- very fun but you need a beefy computer  
    `renderCachedChunks` （和 `cachedChunksOpacity`） < - 非常有趣，但你需要一台强大的计算机
- `avoidance` (avoidance of mobs / mob spawners)  
    `avoidance` （躲避生物 / 刷怪笼）
- `legitMine`
- `followRadius`
- `backfill` (fill in tunnels behind you)  
    `回填` （填平您身后的隧道）
- `buildInLayers`
- `buildRepeatDistance` and `buildRepeatDirection`  
    `buildRepeatDistance` 和 `buildRepeatDirection`
- `worldExploringChunkOffset`
- `acceptableThrowawayItems`
- `blocksToAvoidBreaking`
- `mineScanDroppedItems`
- `allowDiagonalAscend`

# [Troubleshooting / common issues](https://github.com/cabaletta/baritone/blob/1.19.4/USAGE.md#troubleshooting--common-issues)  
故障排除/常见问题



## [Why doesn't Baritone respond to any of my chat commands? ](https://github.com/cabaletta/baritone/blob/1.19.4/USAGE.md#why-doesnt-baritone-respond-to-any-of-my-chat-commands) 
为什么 Baritone 不响应我的任何聊天命令？



This could be one of many things.  
这可能是许多事情之一。

First, make sure it's actually installed. An easy way to check is seeing if it created the folder `baritone` in your Minecraft folder.  
首先，确保它已实际安装。一种简单的检查方法是查看它是否在您的 Minecraft 文件夹中创建了文件夹`男中音` 。

Second, make sure that you're using the prefix properly, and that chat control is enabled in the way you expect.  
其次，确保您正确使用前缀，并且以您预期的方式启用了聊天控件。

For example, Impact disables direct chat control. (i.e. anything typed in chat without a prefix will be ignored and sent publicly). **This is a saved setting**, so if you run Impact once, `chatControl` will be off from then on, **even in other clients**. So you'll need to use the `#` prefix or edit `baritone/settings.txt` in your Minecraft folder to undo that (specifically, remove the line `chatControl false` then restart your client).  
例如，Impact 会禁用直接聊天控制。（即，在 chat 中键入的没有前缀的任何内容都将被忽略并公开发送）。 **这是一个已保存的设置** ，因此，如果您运行一次 Impact， `则 chatControl` 将从此关闭， **即使在其他客户端中也是如此** 。因此，您需要在 Minecraft 文件夹中使用 `#` 前缀或编辑`男中音/settings.txt` 来撤消该作（具体来说，删除 `chatControl false` 行，然后重新启动客户端）。

## [Why can I do `.goto x z` in Impact but nowhere else? Why can I do `-path to x z` in KAMI but nowhere else?](https://github.com/cabaletta/baritone/blob/1.19.4/USAGE.md#why-can-i-do-goto-x-z-in-impact-but-nowhere-else-why-can-i-do--path-to-x-z-in-kami-but-nowhere-else)
为什么我可以在 Impact 中使用 `.goto x z`，但在其他位置却不能？为什么我可以在 KAMI 中对 `x z 执行 -path`，但在其他位置却没有？



These are custom commands that they added; those aren't from Baritone. The equivalent you're looking for is `goto x z`.  
这些是他们添加的自定义命令;那些不是来自 Baritone。您正在寻找的等效项是 `goto x z`。