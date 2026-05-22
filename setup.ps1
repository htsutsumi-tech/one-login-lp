# One Login LP - Setup Script
# Node.js が必要です。未インストールの場合は先にインストールしてください。
# https://nodejs.org/en/download (LTS推奨)

Write-Host "=== One Login LP セットアップ ===" -ForegroundColor Cyan

# Node.js チェック
try {
    $nodeVersion = node --version
    Write-Host "Node.js: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "Node.js が見つかりません。https://nodejs.org からインストールしてください。" -ForegroundColor Red
    exit 1
}

# 依存関係インストール
Write-Host "`n依存関係をインストール中..." -ForegroundColor Yellow
npm install

# 開発サーバー起動
Write-Host "`n開発サーバーを起動します (http://localhost:3000)" -ForegroundColor Green
npm run dev
