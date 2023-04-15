git branch main | ^
git checkout main | ^
git pull origin main && ^
git add . && ^
git commit -m "main release" && ^
git push origin main && ^
call %~dp0algorithms\book\release.bat

