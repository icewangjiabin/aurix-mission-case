# 奧銳任務箱｜MVP 官網

靜態網站 + Vercel Serverless Function，無需 Node 建置流程。

## 部署到 Vercel
1. 將整個資料夾上傳到新的 GitHub repository。
2. 在 Vercel 選擇 Import Project，Framework Preset 選 Other。
3. Build Command 留空，Output Directory 留空。
4. 加入環境變數：
   - `RESEND_API_KEY`
   - `INQUIRY_TO_EMAIL=aurix.cases@gmail.com`
   - `INQUIRY_FROM_EMAIL=奧銳任務箱 <website@aurix.com.tw>`（須先由 Resend 驗證 aurix.com.tw）
5. 正式網域已設定為 `aurix.com.tw`；部署後確認 `www.aurix.com.tw` 301 轉址至主網域。

## 尚待替換
- 真實案例圖片與箱體配置照片
- 公司法人名稱、統編、地址、電話
- 經銷／供貨身分之合約允許用語

## 注意
「非紅供應鏈」依每案 BOM 與供應商文件確認；網站不得宣稱 100% 非紅、國軍認證或軍規認證，除非有完整證明。
