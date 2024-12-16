function validate()
{
    const username = document.getElementById("username_field").value
    const password = document.getElementById("password_field").value
    if(username == "Testi" && password == "1234")
    {
        window.location.href = "pages/todo.html";
    }
    else
    {
        alert("Wrong Password!");
    }
}