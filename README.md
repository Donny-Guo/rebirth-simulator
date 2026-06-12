# 重生模拟器 - AI 大乱斗

> 三款 AI 模型，同一个题目，各自发挥 —— 你更喜欢哪个版本？

一个网页版的「重生之我在 xxx 做 xxx」文字冒险小游戏。五位主角，多线分支，第一人称沉浸式体验，属性驱动爽文剧情。

## 三个版本

| 版本 | 作者模型 | 特色 |
|------|---------|------|
| [DeepSeek-V4-Pro](./DeepSeek-V4-Pro/) | DeepSeek-V4-Pro | 5 个场景（霸总/乞丐/刺客/皇帝/修仙者），存档/读档，成就系统 |
| [GLM-5.1](./glm5_1/) | GLM-5.1 | 墨韵古风 UI，系统觉醒 + 金手指，剧情回顾面板 |
| [MiniMax-M3](./minimaxM3/) | MiniMax-M3 | 纯前端单文件，古风水墨手绘，开箱即玩 |

## 项目结构

```
rebirth-simulator/
├── index.html              # 统一入口 / 版本选择页
├── DeepSeek-V4-Pro/        # DeepSeek 版
│   ├── index.html
│   ├── game.js / style.css / stories*.js
├── glm5_1/                 # GLM 版
│   ├── index.html
│   ├── data.js / engine.js / style.css
├── minimaxM3/              # MiniMax 版
│   └── index.html          # 单文件，内含全部代码
└── README.md
```

## 技术栈

- 纯前端：HTML + CSS + JavaScript，零依赖
- 无需后端、无需 Node.js、无需构建
- 所有游戏数据内嵌在 JS 文件中，浏览器直接运行

## License

MIT
