@ECHO off
if "%~1" == "" (
    echo **** PLEASE SPECIFY COMMENT FOR COMMIT ****
) else (
    @echo on

    echo *** COMMITING %1 ***
    git add --all
    git commit -m %1

    echo *** COMMITED %1 ***
    echo *** PUSHING TO REMOTE SERVER ***

    git push -u origin master
    echo *** DONE !!! ***
)