# 光影加载问题

## 放入光影后在选择界面没有看见光影包

- **光影包可能出现损坏，需要重新下载**

  - 一些浏览器（如 Safari）默认不能正确处理压缩文件。你可以关闭 "下载后打开安全文件"（只适用于 Safari），或者使用不同的浏览器，如火狐或谷歌。

- **光影包需要解压**
  - 有些光影包甚至可能一开始就被**错误地压缩**了。在这种情况下，试着**手动解压文件**。解压后的光影文件夹结构应该是`.minecraft/shaderpacks/光影名/shaders/光影文件`。
  - 如果你不知道你的 `.minecraft` 文件夹在哪里，请在设置里打开`资源包`，点击`资源包文件夹`，再在弹出的资源管理器的地址栏修改定向至 `.minecraft` 文件夹。

- **光影包被放置在错误的文件夹中**

  - 请检查你的光影包放置路径是否正确。

## 开光影后没有效果

- **光影包读取出现问题**

  - 尝试将光影包解压之后再加载。有时光影包可能被有问题的压缩，或者光影包文件中含有无法读取的中文名说明文件，导致光影在压缩包状态下无法被正常读取。
  - 若使用的光影 API 是 `Iris` ，则应切换为其它光影如 `BSL` 、 `Complementary Shader` 等。该 API 本身就不兼容许多光影，也不适合作为大多数入门玩家的第一选择。
  - 若同时伴随着左下角的`一大串报错`，同时在切换光影界面的底部看到显卡型号为 `Intel 核显` ，应前往显卡驱动面板，**启用独立显卡运行 MC 。** 不理解的可直接百度`如何启用独立显卡` 。
  - 若读取时提示`需要更新 OptiFine Z1` ，而 OptiFine 已发布的最新版**远低于**该版本时，意味着着色器可能只支持 `1.16.5 G7 及以上`的 OptiFine。如果你是 1.12.2 玩家，可以尝试通过添加 [AdvancedShader]() 模组来解决问题。

## 开光影后游戏崩溃

- 有**两种原因**：`游戏进程崩溃`，和 `Java 虚拟机崩溃`。这两种类型都会产生一个崩溃日志文件，而这个崩溃日志对于诊断问题是**绝对必要**的。

  - `游戏进程崩溃`会把这个文件放在`.minecraft/crash-reports/crash-(date)-(time)-(client or server).txt`；
  - `Java虚拟机崩溃`会把这个文件放在`.minecraft/hs_err_pid(number).log`。
- 如果你不知道你的崩溃原因，请检查这两个文件。如果你有一个以上的崩溃日志，而你不知道哪一个是正确的，请删除所有现有的崩溃日志并再次启动游戏。当它第二次崩溃时，将只有一个崩溃日志在两个地方之一。如果你看不懂，请将它发到求助频道寻求帮助。
- 对于`游戏进程崩溃`，如果崩溃日志显示 `java.lang.NoSuchFieldError: field_191308_b`，而你的版本是 `1.12.2`，那么有**两种方法**可以解决这个问题：
  - 更新到最新的 OptiFine 版本。你需要在 OptiFine 的下载页面上点击 "显示所有版本"，以便找到 1.12.2 的版本。
  - 删除光影包内的`/shaders/entity.properties`。你需要解压缩光影的压缩文件，以便修改其内容。如果你的崩溃日志没有提到这两个特定的错误，那么请在求助频道中上传日志并询问它。
- 对于 `Java 虚拟机崩溃`，请打开崩溃日志并在顶部搜索关键词。如果提到了**antio6axx.dll**，那么你需要将你的 AMD 驱动降级到 `20.4.2` 版本。此外，截至2022年11月末，如果`AMD显卡`的用户在**加载一些光影时**游戏崩溃，可以优先尝试将显卡驱动降回`22.6.1`或`22.5.1`版本。如果降级不能解决你的问题，或者问题是其他东西，那么请在主聊天频道中上传日志并询问它。

## 游戏未崩溃，但画面看起来不正常

- **所有光影都不保证加载了就能正常使用。** 有时，它可能与你的显卡、图形驱动或其他已安装的 Mod 不兼容。
- 调试光影时，首先要寻找的是的 `invalid programs` 错误。如果一个光影编译失败，当你启用该光影包时，你会在聊天菜单中看到 `invalid programs`。然而，它不会告诉你实际问题是什么。对于这一点，你需要查看你的日志文件。
  - 如果你安装了Forge，这可以在`.minecraft/logs/fml-client-latest.log`中找到。
  - 否则，就去`.minecraft/logs/latest.log`。
- 把这个日志文件上传到主聊天频道，我们会帮你找出问题所在。如果可以，最好**重启客户端，加载一次光影后关闭再上传你的日志。** 这样，有问题的将是你日志文件中的最后一个，错误信息也不容易被其他的信息掩盖，更容易被找到。
- 注意：如果你的聊天记录显示 `OpenGL Error`，你可以忽略这一点，这与无效的程序无关。（如果这些信息打扰了你，你可以通过 `视频设置 > 其他 > 显示GL错误` 来禁用它们，但隐藏GL错误不会隐藏无效的程序错误）。
- 如果你没有任何无效的程序，接下来要检查的是 Mods。试着只用 `OptiFine + 纯净版本` 来运行光影包，而不使用其他东西，不要启动 Forge 版本。如果它正常了，那就可能是 Mod 的问题了。幸运的是，大多数Mod都有配置选项，可以让你在不删除整个 Mod 的情况下禁用有问题的 Mod 功能。配置文件可以在`.minecraft/config`中找到。
- 在 1.13 以上版本中，Forge 配置文件被分成`客户端`、`服务器`和`普通`配置文件。不是每个 Mod 都会有所有这三个文件。在遇到问题时，应优先打开`客户端配置文件`。如果 Mod 没有客户端的配置文件，再试试`普通配置文件`。**不要尝试通过修改服务器配置文件来修复这个问题。**