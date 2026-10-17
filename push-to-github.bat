@echo off
setlocal enabledelayedexpansion
set PATH=C:\Users\sadiy\AppData\Local\Programs\Git\cmd;C:\Users\sadiy\AppData\Local\Programs\nodejs;%PATH%

cls
echo ========================================================
echo   MM FABRICATION - One-Click GitHub Repository Uploader
echo ========================================================
echo.
echo This script will initialize your Git repository, bundle all
echo files, and push them directly to your GitHub account.
echo.
echo --------------------------------------------------------
echo STEP 1: First, make sure you created a NEW repository on GitHub:
echo         1. Open https://github.com/new
echo         2. Name your repo: mm-fabrication
echo         3. Keep it Public or Private
echo         4. Do NOT check 'Add README' or '.gitignore'
echo         5. Click 'Create repository'
echo --------------------------------------------------------
echo.
set /p REPO_URL="Enter your GitHub Repository URL (e.g. https://github.com/your-username/mm-fabrication.git): "

if "%REPO_URL%"=="" (
    echo [ERROR] No repository URL provided. Exiting.
    pause
    exit /b 1
)

echo.
echo [1/5] Initializing Git repository...
git init
git branch -M main

echo [2/5] Staging project files...
git add .

echo [3/5] Creating initial commit...
git commit -m "Initial commit: MM FABRICATION Cinematic Textile Website"

echo [4/5] Linking to GitHub remote...
git remote remove origin >nul 2>&1
git remote add origin %REPO_URL%

echo [5/5] Pushing to GitHub (main branch)...
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================================
    echo   SUCCESS! Your code is now live on GitHub!
    echo   Repository: %REPO_URL%
    echo ========================================================
    echo Next step: Connect this repo to Vercel for instant live hosting!
) else (
    echo.
    echo [NOTE] If GitHub asked for login credentials, sign in with your browser or personal access token.
)

echo.
pause
