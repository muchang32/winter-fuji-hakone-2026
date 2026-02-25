# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1prHsX_9O65OkRfSTtA37RKYUMjBgkYux

## 本地開發 (Run Locally)

**Prerequisites:**  Node.js

1. 安裝套件：
   ```bash
   npm install
   ```
2. 建立 `.env` 檔案，並填入以下環境變數（請參考原有配置）：
   ```env
   VITE_GOOGLE_SCRIPT_URL=...
   VITE_GOOGLE_SHEET_URL=...
   ```
3. 啟動開發伺服器：
   ```bash
   npm run dev
   ```

## GitHub Pages 自動部署

本專案已配置 GitHub Actions 工作流，只要將首頁推送到 `main` 分支便會自動部署。

### 部署環境變數設定

因為編譯時需要載入環境變數，請在 GitHub 的儲存庫設定中加入對應的 Secrets：

1. 前往存放庫的 **Settings** > **Secrets and variables** > **Actions**。
2. 點擊 **New repository secret**，將以下變數與其對應的值加入：
   - `VITE_GOOGLE_SCRIPT_URL`
   - `VITE_GOOGLE_SHEET_URL`
3. 儲存後，下一次 Push 到 `main` 時，GitHub Actions 會讀取這些 Secrets 來進行編譯並發布。
4. 別忘了到 **Settings** > **Pages** 中，將 **Build and deployment** > **Source** 設為 **GitHub Actions**。
