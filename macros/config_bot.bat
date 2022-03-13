cd %~dp0
cd ..
set /p prerfix="Prefix: "
set /p token="Token: "
echo {>config.json
echo "prefix": "%prefix%",>>config.json
echo "token": "%token%">>config.json
echo }>>config.json