@ECHO off
if "%~1" == "" (
    echo **** PLEASE SPECIFY COMMENT FOR COMMIT ****
) else (
    @echo on

    rem COMMITING %1
    git add --all
    git commit -m %1

    rem COMMITED %1
    rem PUSHING TO REMOTE SERVER

    git push -u origin master
    rem DONE !!!
)