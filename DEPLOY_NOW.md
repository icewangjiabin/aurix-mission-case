# 立即部署設定

- 正式網域：`aurix.com.tw`
- 主網域：`https://aurix.com.tw`
- `www.aurix.com.tw`：301 轉址至主網域
- 公開聯絡信箱：`aurix.cases@gmail.com`
- GitHub repository：`aurix-mission-case`
- Vercel Framework Preset：`Other`
- Build Command：留空
- Output Directory：留空

## 表單環境變數

- `RESEND_API_KEY`
- `INQUIRY_TO_EMAIL=aurix.cases@gmail.com`
- `INQUIRY_FROM_EMAIL=奧銳任務箱 <website@aurix.com.tw>`

`INQUIRY_FROM_EMAIL` 不能使用 Gmail 地址。必須先在 Resend 驗證 `aurix.com.tw` 的 DNS 記錄。

完整操作要求請讀取 `CODEX_DEPLOY_PROMPT.md`。
