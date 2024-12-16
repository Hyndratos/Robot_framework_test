*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}    http://127.0.0.1:5500/Login.html
${Browser}      edge
*** Test Cases ***
Login with correct Username and Password
    Open Browser    ${URL}    ${Browser}
    Input Text    id=username_field    Testi
    Input Password    id=password_field    1234
    Click Button    id=login_button
Make first todo
    Click Button    id=addButton
    Input Text    id=todo-item-0    Make a sandwich
Make second todo
    Click Button    id=addButton
    Input Text    id=todo-item-1    Make a sandwich
Make thirt todo
    Click Button    id=addButton
    Input Text    id=todo-item-2    Make a sandwich