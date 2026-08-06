# 奧銳任務箱｜MVP 官網

靜態網站 + Vercel Serverless Function，無需 Node 建置流程。

## 部署到 Vercel
1. 將整個資料夾上傳到新的 GitHub repository。
2. 在 Vercel 選擇 Import Project，Framework Preset 選 Other。
3. Build Command 留空，Output Directory 留空。
4. 加入環境變數：
   - `RESEND_API_KEY`
   - `INQUIRY_TO_EMAIL`
   - `INQUIRY_FROM_EMAIL`（須為 Resend 已驗證網域的寄件地址）
5. 目前 canonical、robots.txt 與 sitemap.xml 使用 `aurui-mission-case.vercel.app`；取得正式網域後更新 `site-config.json` 並執行 `python3 configure.py`。

## 尚待設定／替換
- 正式網域（目前使用 Vercel Production 網址）
- `RESEND_API_KEY`
- `INQUIRY_FROM_EMAIL`（Resend 已驗證網域的寄件地址）
- 真實案例圖片與箱體配置照片
- 公司法人名稱、統編、地址、電話（目前不公開）
- 經銷／供貨身分之合約允許用語

## 注意
「非紅供應鏈」依每案 BOM 與供應商文件確認；網站不得宣稱 100% 非紅、國軍認證或軍規認證，除非有完整證明。
