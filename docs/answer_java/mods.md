# 模组兼容问题

## Advanced Rocketry

将 _**overworldSkyOverride**_ 设置为 **false**。

## Astral Sorcery

### 1.12.2及更早版本

在 _**weakSkyRenders**_ 中添加 **0**。它应该看起来像这样：
`S:weakSkyRenders <
    0
 >`

### 1.15.x

在 _**weakSkyRenders**_ 中添加 **0**。它应该看起来像这样:
`weakSkyRenders = [ 0 ]`

### 1.16.x

在 _**skyRenderingConstellations**_ 中添加 **"minecraft:overworld"**。它应该看起来像这样：
`skyRenderingConstellations = [ "minecraft:overworld" ]`

## Better End

如果它导致你使用的光影包出现问题，请在 **_config/betterend/client.json_**中把 `customSky [default: true]`设置为 **false**。

## Better Foliage（1.12）

不一定会崩溃，但在某些光影包中会导致树叶断裂。要解决这个问题，你需要去确定主界面的 _Mods -> Better Foliage -> Shader Configuration_ 是否与你的光影包的 _**block.properties**_ 文件中的指定值相匹配。
注意：_**block.properties**_可以包含多个MC版本的ID，所以一定要为你的MC版本使用正确的ID。如果你不确定要使用什么ID，请询问光影包的创作者。

## Betweenlands

将 _**use_shader**_ 设置为 **false**。注意：这将解决一些渲染问题，但维度本身可能没有你的光影包的工作效果。

## Botania

将****_**fancySkybox.enable**_ 和 _**shaders.enabled**_ 设置为 **false**。

## COFH核心（1.15以上）

将 _**Render Area Effect Block Breaking**_ 设置为 **false**。

## Computer Craft Tweaked

将 _**monitor_renderer**_ 设置为 "gui.computercraft:config.peripheral.monitor_renderer.vbo"。

## Extended Days

将 **_覆盖天空渲染_** 设置为 **false**。

## Litematica

将 _**Visuals -> enableRendering**_ 设置为 **false**。

## Psi

- 1.12

   将 **_B: "Use Shaders "_** 设置为 **false**。
- 1.15+

   将 **_useShaders_** 设置为 **false**。

## Rats

在 _**视频设置 -> 性能**_ 中关闭 _**快速渲染**_。

## SnowRealMagic

在 _**视频设置 -> 光影**_ 中打开 _**传统照明**_。

## The Midnight Mod

将 **_rift_shaders_** 设置为 **false**。注意：这将解决一些渲染问题，但维度本身可能没有你的光影包的工作效果。

## Thermal Dynamics

在你的游戏中添加 Unifine：[https://www.curseforge.com/minecraft/mc-mods/unifine](https://www.curseforge.com/minecraft/mc-mods/unifine)

## 最后

如果你已经排除了上述所有的 Mod，那么找出问题 Mod 的下一步就是进行**二分法搜索**。

- 将你的 _Mods_ 分成 _**2**_ 组
- 测试这两组，并**保留仍有问题的那一组**
- **重复**，直到只剩下一个 Mod（和它的前置 Mod ）
- **反馈给管理组**，以便于我们将它添加进这里
