# Codex 執行指令：部署奧銳任務箱 MVP 官網

請執行以下工作，除必要帳號授權外不要要求使用者手動修改程式：

1. 建立新的 GitHub repository，建議名稱：`aurui-mission-case`。
2. 將本資料夾全部內容提交到 `main` 分支。
3. 檢查所有 HTML、CSS、JavaScript、API function、內部連結、metadata、canonical、robots.txt 與 sitemap.xml。
4. 讀取 `site-config.json`，請使用者只提供：
   - 正式網域
   - 品牌收件信箱
   - 正式法人名稱
   - 聯絡電話
5. 更新 `site-config.json` 後執行 `python configure.py`。
6. 將專案匯入 Vercel：
   - Framework Preset：Other
   - Build Command：留空
   - Output Directory：留空
7. 在 Vercel 設定：
   - `RESEND_API_KEY`
   - `INQUIRY_TO_EMAIL`
   - `INQUIRY_FROM_EMAIL`
8. 部署 Production，測試：
   - 首頁與所有 clean URL
   - Mobile 導覽
   - 表單寄送與 Reply-To
   - 404
   - robots.txt
   - sitemap.xml
9. 綁定正式網域並設定 www／非 www 單一版本與 HTTPS。
10. 提供最終 Production URL、部署 commit SHA 與尚待補入的真實案例圖片清單。

限制：
- 不得新增「100%非紅」「國軍認證」「軍規認證」「國防部指定」等無證據宣稱。
- 不得把網站改成一般商品商城。
- 不公開 Pelican 全系列價格。
- 保留專案型 CTA：「提交設備清單」「申請專案評估」。
