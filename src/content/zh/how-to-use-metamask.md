---
title: '如何使用 MetaMask：逐步教程 2026'
description: '完整的 MetaMask 教程，涵盖钱包设置、备份助记词、发送和接收加密货币、连接 BSC 网络及安全最佳实践。'
keywords: '如何使用MetaMask, MetaMask教程, MetaMask设置, MetaMask BSC'
category: 'education'
slug: 'how-to-use-metamask'
date: 2026-04-30
updated: 2026-04-30
related:
  - 'best-crypto-wallet'
  - 'what-is-erc20'
  - 'how-to-buy-usdt'
cta:
  title: '用 MetaMask 消费虚拟卡'
  subtitle: '将你的 ETH 和代币转换为 Visa 卡 — 无需银行账户。'
schemaType: 'product'
rating: 4.8
ratingCount: 1200
faqs:
  - question: 'MetaMask 安全吗？'
    answer: 'MetaMask 是非托管钱包，私钥存储在你的设备上，不会上传到任何服务器。只要你妥善保管助记词、不连接可疑网站、定期撤销代币授权，安全性是有保障的。大额资产建议配合硬件钱包使用。'
  - question: 'MetaMask 助记词丢失了怎么办？'
    answer: '助记词是恢复钱包的唯一方式。如果丢失，你将永远无法恢复钱包中的资产。MetaMask 服务器不存储你的助记词，没有任何人能帮你找回。务必将助记词写在纸上并存放在安全的物理位置。'
  - question: '如何将 BSC 网络添加到 MetaMask？'
    answer: '点击 MetaMask 顶部的网络选择器，选择「添加网络」，然后手动输入 BSC 主网参数：RPC URL 为 https://bsc-dataseed.binance.org/，Chain ID 为 56，货币符号为 BNB，区块浏览器为 https://bscscan.com。保存后即可在 BSC 网络上操作。'
  - question: '为什么我的交易一直卡在待处理状态？'
    answer: '通常是因为 Gas 费设置过低导致矿工优先处理其他交易。你可以在 MetaMask 的 Activity 标签中找到待处理交易，点击「加速」提高 Gas 费来推动确认，或点击「取消」放弃这笔交易。'
  - question: 'MetaMask 怎么给虚拟卡充值？'
    answer: '在 uCards 等虚拟卡平台选择充值网络（ETH 或 BSC），复制平台提供的充值地址，然后在 MetaMask 中点击 Send 粘贴地址并输入金额即可。交易确认后几分钟内虚拟卡余额就会更新。uCards 支持从 MetaMask 直接充值 USDT。'
---

## 什么是 MetaMask？

MetaMask 是全球最受欢迎的非托管加密货币钱包，月活跃用户超过 3000 万。由 Consensys 开发，MetaMask 允许你管理基于以太坊的代币、与去中心化应用（dApp）交互并安全存储数字资产 — 无需信任第三方保管你的私钥。

MetaMask 提供浏览器扩展（Chrome、Firefox、Brave、Edge）和移动应用（iOS、Android）。本教程涵盖你需要了解的所有入门知识。

## 安装 MetaMask

### 浏览器扩展（桌面端）

1. 访问 **metamask.io** — 始终使用官方网站以避免钓鱼
2. 点击 **"Download"** 并选择你的浏览器（Chrome、Firefox、Brave 或 Edge）
3. 点击 **"Add to Chrome"**（或你浏览器的对应按钮）
4. 在提示时确认安装
5. MetaMask 狐狸图标将出现在浏览器工具栏中

### 移动应用

1. 打开 **App Store**（iOS）或 **Google Play 商店**（Android）
2. 搜索 **"MetaMask"** — 验证开发者是 "MetaMask"（Consensys）
3. 下载并安装应用
4. 打开 MetaMask 开始设置

**警告：** 只从官方渠道下载 MetaMask。假冒的 MetaMask 应用和扩展是常见的钓鱼手段。

## 创建你的钱包

安装 MetaMask 后，按以下步骤创建新钱包：

1. 在欢迎界面点击 **"Get Started"**
2. 选择 **"Create a new wallet"**（仅当从备份恢复时才使用 "Import wallet"）
3. **创建强密码** — 保护你当前设备上的钱包
   - 使用至少 12 个字符，包含大小写字母、数字和符号
   - 此密码在本地加密你的钱包数据 — 它不是你的助记词
4. **观看安全视频**，了解你的 Secret Recovery Phrase
5. 点击 **"Click here to reveal secret words"** 查看你的 12 词助记词

### 最重要的一步：备份你的助记词

你的 Secret Recovery Phrase（助记词）是钱包的主密钥。如果丢失，你将永远失去对资金的访问。如果别人得到它，他们可以偷走一切。

**务必：**

- 写在纸上
- 存放在安全的物理位置（保险柜、密码箱）
- 考虑使用金属备份板以防火灾/水损
- 书写时仔细核对每个词

**切勿：**

- 以数字方式保存（截图、备忘录应用、云存储）
- 与任何人分享 — 永远不要
- 在除 MetaMask 之外的任何网站或应用中输入
- 存放在他人可能找到的地方

6. **确认你的助记词**，按正确顺序选择单词
7. 点击 **"Confirm"** — 你的钱包已创建完成

## 了解 MetaMask 界面

### 账户视图

主屏幕显示：

- **账户名和地址**：点击复制你的完整以太坊地址
- **余额**：你账户中 ETH 和代币的总价值
- **代币列表**：显示你持有的 ETH 和任何 ERC20 代币
- **Buy、Send、Swap 按钮**：管理资产的快捷操作

### 关键图标

- **账户图标**（右上角）：切换账户、创建新账户、导入账户
- **网络选择器**（顶部中央）：在以太坊、BSC 和其他网络之间切换
- **Activity 标签**：查看交易历史
- **Settings**（右上角菜单）：配置安全偏好、已连接站点、高级选项

## 接收加密货币

要接收 ETH 或 ERC20 代币：

1. 点击 MetaMask 顶部的**账户名**复制你的地址
2. 你的以太坊地址格式为：`0x1234...abcd`（42 个字符，以 `0x` 开头）
3. 将此地址分享给发送方
4. 或点击 **"Receive"** 显示发送方可扫描的二维码

**重要提示：** 以太坊地址不区分大小写，但分享前务必验证完整地址。某些代币需要特定网络 — 确保发送方使用正确的网络。

## 发送加密货币

要发送 ETH 或 ERC20 代币：

1. 在主屏幕点击 **"Send"**
2. **粘贴接收方地址**或扫描二维码
3. **输入金额**
4. **查看交易详情：**
   - 接收方地址
   - 金额
   - Gas 费估算
   - 总成本
5. 点击 **"Confirm"** 发送
6. 交易将显示在 Activity 标签中，状态为待处理
7. 网络确认后，状态将变为 "Confirmed"

### 了解 Gas 费用

每笔以太坊交易需要以 ETH 支付 Gas 费：

- **Gas limit**：交易可消耗的最大 Gas 单位
- **Gas price（Gwei）**：每单位 Gas 的价格 — 随网络需求波动
- **总费用**：Gas limit x Gas price（以 ETH 和美元显示）

MetaMask 自动估算适当的 Gas 费用。对于时效性强的交易，你可以提高 Gas 价格以获得更快的确认。

## 连接到 BSC（币安智能链）

默认情况下，MetaMask 连接到以太坊主网。要使用 BSC，需要手动添加：

### 逐步 BSC 设置

1. 点击 MetaMask 顶部的**网络选择器**
2. 点击 **"Add network"**
3. 点击 **"Add a network manually"**（在底部）
4. 输入以下 BSC 主网详情：

| 字段               | 值                                |
| ------------------ | --------------------------------- |
| Network name       | BNB Smart Chain                   |
| New RPC URL        | https://bsc-dataseed.binance.org/ |
| Chain ID           | 56                                |
| Currency symbol    | BNB                               |
| Block explorer URL | https://bscscan.com               |

5. 点击 **"Save"**
6. BNB Smart Chain 现在会出现在你的网络选择器中

### 切换网络

只需点击网络选择器下拉菜单，在以下网络间选择：

- **Ethereum Mainnet** — 用于 ETH、ERC20 代币和以太坊 dApp
- **BNB Smart Chain** — 用于 BNB、BEP20 代币和 BSC dApp
- **其他网络** — 添加 Polygon、Arbitrum 或任何 EVM 兼容链

## 添加自定义代币

MetaMask 自动显示热门代币，但你可能需要手动添加自定义代币：

1. 点击代币列表底部的 **"Import tokens"**
2. **搜索**代币名称（如果是已知代币）
3. 对于自定义代币，输入**代币合约地址**
4. 代币符号和小数位数将自动填充
5. 点击 **"Add custom token"**，然后 **"Import tokens"**

你可以在 Etherscan（以太坊）或 BscScan（BSC）上找到代币合约地址。

## 连接到 dApp

MetaMask 的主要用途是与去中心化应用交互：

1. 访问 dApp 网站（如 Uniswap、Aave、OpenSea）
2. 点击 **"Connect Wallet"** 或类似按钮
3. 从钱包选项中选择 **MetaMask**
4. MetaMask 将弹出要求你**选择账户**进行连接
5. 点击 **"Next"** 然后 **"Connect"**
6. dApp 现在可以看到你的地址并请求交易（但未经你的批准无法访问你的资金）

### 管理已连接的站点

要查看或断开 dApp 连接：

1. 点击**三个点菜单**（右上角）
2. 前往 **"Connected sites"**
3. 查看所有已连接的 dApp 并断开不再使用的

## 安全最佳实践

### 基本安全措施

1. **不使用时锁定钱包。** 点击锁定图标或在 Settings 中设置自动锁定。
2. **确认前验证交易详情。** 恶意 dApp 可能试图诱骗你批准有害交易。
3. **对大额持有使用硬件钱包。** MetaMask 可与 Ledger 和 Trezor 集成。
4. **连接钱包前仔细检查 URL。** 钓鱼网站会模仿热门 dApp。
5. **将 dApp URL 加入书签**，只通过书签访问。
6. **定期撤销代币授权**，使用 Revoke.cash 等工具。
7. **永远不要在任何网站上输入助记词**，即使看起来像 MetaMask。

### 高级安全

- **为不同目的创建单独账户**（交易、dApp、持有）
- **使用专用浏览器配置文件**进行加密活动
- 在 Settings 中**启用"Show incoming transactions"**以监控异常活动
- **定期查看交易历史**

## 使用 MetaMask 为虚拟卡充值

你可以直接从 MetaMask 为虚拟信用卡充值：

1. 打开 MetaMask 并确保你在正确的网络上（以太坊或 BSC）
2. 注册 uCards 等虚拟卡平台
3. 选择卡类型并选择支付网络
4. 复制平台提供的充值地址
5. 在 MetaMask 中，点击 **"Send"** 并粘贴地址
6. 输入金额并确认交易
7. 你的虚拟卡将在几分钟内充值完成并可使用

## 常见问题排查

### 交易卡在待处理状态

- 打开 MetaMask > Activity 标签 > 点击待处理交易
- 点击 **"Speed up"** 增加 Gas 推送交易
- 或点击 **"Cancel"** 用零值交易替换它

### 代币不显示

- 使用合约地址手动添加代币
- 确保你在正确的网络上

### 忘记密码

- 在 MetaMask 欢迎界面点击 **"Import wallet"**
- 输入你的 12 词助记词
- 创建新密码

## 总结

MetaMask 是任何与以太坊、BSC 或其他 EVM 兼容网络交互的人的必备工具。虽然它需要仔细关注安全性 — 特别是助记词管理 — 但其用户友好的界面和广泛的生态系统支持使其成为 DeFi、dApp 和管理 ERC20 代币的最佳钱包。

结合 uCards 等虚拟卡平台，MetaMask 成为从加密世界到日常消费的桥梁 — 让你可以使用 ETH 和代币进行全球在线购物、订阅和服务消费。
