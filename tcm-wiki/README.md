# 中医基础理论 · 知识体系

> 系统学习中医基础理论的完整知识网站，适合入门学习与参考查阅。

## 网站结构

```
tcm-wiki/
├── index.html              # 首页（总览入口）
├── overview.html           # 知识框架总览（7大模块思维导图）
├── assets/
│   ├── css/base.css        # 全局样式
│   └── js/main.js          # 全局脚本
└── modules/
    ├── 01-yinyang.html     # 第一章：阴阳五行学说（已完成）
    ├── 02-zangxiang.html   # 第二章：藏象学说
    ├── 03-jingqi.html      # 第三章：精气血津液神
    ├── 04-jingluo.html     # 第四章：经络学说
    ├── 05-bingyin.html     # 第五章：病因与发病
    ├── 06-sizheng.html     # 第六章：四诊与辨证
    └── 07-zhize.html       # 第七章：治则与治法
```

## 部署到 GitHub Pages

### 方法一：直接上传（推荐新手）

1. 在 GitHub 创建新仓库，例如 `tcm-wiki`
2. 将本文件夹内所有文件上传到仓库根目录
3. 进入仓库 **Settings → Pages**
4. Source 选择 `main` 分支，目录选 `/ (root)`
5. 点击 Save，等待约1分钟
6. 访问 `https://你的用户名.github.io/tcm-wiki/`

### 方法二：使用 Git 命令行

```bash
# 进入项目目录
cd tcm-wiki

# 初始化 git
git init
git add .
git commit -m "初始化中医基础理论知识体系"

# 关联远程仓库（替换为你的用户名和仓库名）
git remote add origin https://github.com/你的用户名/tcm-wiki.git
git branch -M main
git push -u origin main
```

然后在 GitHub 仓库 Settings → Pages 中开启即可。

## 后续维护

### 添加/完善模块内容

每个模块页面（`modules/0X-xxx.html`）都有独立的内容区域。
找到 `<div class="topic-block">` 部分添加或修改知识点即可。

### 模块完成状态说明

| 章节 | 状态 | 说明 |
|------|------|------|
| 01-yinyang | ✅ 已完成 | 包含完整的阴阳五行深度介绍 |
| 02-zangxiang | 🔵 有内容 | 包含核心知识点，可继续扩充 |
| 03-jingqi | 🔵 有内容 | 包含核心知识点，可继续扩充 |
| 04-jingluo | 🔵 有内容 | 包含核心知识点，可继续扩充 |
| 05-bingyin | 🔵 有内容 | 包含核心知识点，可继续扩充 |
| 06-sizheng | 🔵 有内容 | 包含核心知识点，可继续扩充 |
| 07-zhize | 🔵 有内容 | 包含核心知识点，可继续扩充 |

## 技术说明

- 纯静态 HTML/CSS/JS，无需任何框架或构建工具
- 使用 Google Fonts（Noto Serif SC / Noto Sans SC）
- 所有页面共享 `assets/css/base.css` 样式
- 深色主题，仿古典墨金风格
- 响应式设计，支持手机端阅读

---

> 《黄帝内经》云：上工治未病，不治已病，此之谓也。
