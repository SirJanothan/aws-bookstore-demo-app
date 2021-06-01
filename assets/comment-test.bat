@ECHO OFF

SETLOCAL ENABLEDELAYEDEXPANSION
for /r src %%G in (*.ts) do (
    set /p var=<%%G
    IF NOT "!var!" == "// Jonathan Eddy 1508331" (
        ECHO First line has incorrect comment
        ECHO %%G
        exit /b 9
    )
)
