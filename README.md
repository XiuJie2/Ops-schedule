# 訂閱续期和排班管理系統

这是一个部署在 Cloudflare Workers 上的完整运维管理系统，提供：
- 用户认证（登录/注册）
- 排班管理
- 机房检核清单
- 訂閱管理（到期提醒）
- 排除日期管理
- 响应式UI（Tailwind CSS + Font Awesome）

## 技术栈

- **运行时**: Cloudflare Workers (JavaScript ES2022+)
- **UI框架**: Tailwind CSS (CDN)
- **图标**: Font Awesome 6 (CDN)
- **部署**: Wrangler CLI v4.x

## 本地开发

### 前置要求

1. 安装 Node.js 18+
2. 安装 Wrangler CLI:
   ```bash
   npm install -g wrangler
   ```
3. 登录 Cloudflare:
   ```bash
   wrangler login
   ```

### 安装依赖

```bash
npm install
```

### 本地运行

```bash
npm run dev
```

访问 http://localhost:8787

## 部署到 Cloudflare Workers

### 部署命令

```bash
npm run deploy
```

或直接使用:

```bash
wrangler deploy
```

### GitHub Actions 自动部署

本项目已配置 GitHub Actions 自动部署 (需自行添加 `CLOUDFLARE_API_TOKEN` secret):

1. 获取 Cloudflare API Token:
   - 访问 https://dash.cloudflare.com/profile/api-tokens
   - 创建具有 `Worker` 和 `Pages` 权限的令牌

2. 在 GitHub 仓库中添加 Secret:
   - Settings → Secrets and variables → Actions
   - 添加 `CLOUDFLARE_API_TOKEN`

3. push 到 main 分支即可自动部署

## 项目结构

```
.
├── worker.js          # 主入口文件 (包含所有路由和页面)
├── wrangler.toml      # Wrangler 配置文件
├── package.json       # 项目依赖和脚本
├── .gitignore         # Git 忽略文件
└── README.md          # 项目文档
```

## 配置说明

### wrangler.toml 关键配置

- `main`: Worker 入口文件 (当前为 `worker.js`)
- `compatibility_date`: 兼容性日期，设为最近的日期以使用最新功能
- `compatibility_flags`: 启用了 `nodejs_compat` 以兼容 Node.js 模块

### 数据存储

当前版本使用 **内存存储** (仅在 Worker 运行期间保留数据)。生产环境建议:

1. **KV 命名空间**: 用于存储用户数据、排班信息等持久化数据
2. **D1 数据库**: 用于关系型数据存储
3. **R2 存储**: 用于文件存储 (如导出文件)

如需升级到持久化存储，请修改 `worker.js` 中的数据访问层。

## 功能特性

### 1. 用户系统
- 员工注册/登录
- 角色区分 (管理员 vs 普通员工)
- 会话管理

### 2. 排班管理
- 按日期查询排班
- 自动排除节假日
- 实时状态显示

### 3. 机房检核
- 每日检核清单
- 进度跟踪
- 历史记录
- 异常报告

### 4. 訂閱管理
- 添加/编辑/删除訂閱
- 自动计算到期日
- 提前提醒设置
- 过期检测
- 自动续订标记

### 5. 排除日期
- 节假日管理
- 特殊日期排除
- 影响排班自动计算

## 开发说明

### 修改配置后重新部署

```bash
# 开发模式 (热重载)
npm run dev

# 预览部署 (不更新 production)
wrangler deploy --staging

# 生产部署
npm run deploy
```

### 查看日志

```bash
wrangler tail
```

### 查看 Workers 仪表板

https://dash.cloudflare.com/ → Workers & Pages → 选择你的 Worker

## 故障排除

### 部署失败: "Could not detect a directory containing static files"

**原因**: 缺少 `wrangler.toml` 配置文件

**解决**: 确保 `wrangler.toml` 文件存在于项目根目录，且包含 `main = "worker.js"`

### 内存数据丢失

**原因**: Worker 无状态，重启后内存数据清空

**解决**: 迁移到 KV 或 D1 数据库 (参考 Cloudflare 文档)

### 环境变量设置

在 `wrangler.toml` 的 `[vars]` 部分添加:

```toml
[vars]
API_KEY = "your-secret-key"
ADMIN_IDS = "user1,user2"
```

## 优化建议 (未来)

1. **持久化存储**: 将内存数据迁移到 D1 或 KV
2. **缓存策略**: 使用 Cache API 缓存静态资源
3. **性能优化**: 内联关键 CSS，减少 CDN 依赖
4. **安全性**: 实现 CSRF 保护，API 限流
5. **监控**: 集成 Logpush 到外部日志系统
6. **测试**: 添加单元测试和 E2E 测试

## License

MIT
