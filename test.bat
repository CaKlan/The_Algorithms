git branch main | ^
git checkout main | ^
git pull origin main && ^
git add . && ^
git commit -m "main release" && ^
git push origin main && ^
cd ./algorithms ^
echo %~dp0/algorithms/book/release.bat

