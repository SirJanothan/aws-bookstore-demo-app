@ECHO OFF

if "%~1"=="" (
ECHO Error: missing commit message
EXIT /b
)

ECHO Installing packages
call npm install

ECHO Building application
CALL npm run build

IF %ERRORLEVEL% NEQ 0 (
ECHO Error: Application failed to compile
EXIT /b
)

CALL git commit -am %1

CALL git push origin master