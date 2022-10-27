function part1()
{
var date = prompt("Введіть дату:");
const regex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

if(regex.test(date))
{
    alert("Вірний формат дати.");
}
else
{
    alert("Невірний формат дати.");
}

}

function part2()
{
    var telephone = prompt("Введіть номер телефон:");
    //варіант /*/^\+380\d{3}\d{2}\d{2}\d{2}$/*/ підходить, щоб додати розділюючі символи, можна скоротити до /^\+380\d{9}/
    const regex = /^\+380\d{9}/; 

    if(regex.test(telephone))
    {
        alert("Вірний формат телефону.");
    }
    else
    {
        alert("Невірний формат телефону.");
    }
}

function part3()
{
    var data = prompt("Введіть дані:");
    const regex1 = /\-/; 
    const regex2 = /\_/;

    if(regex1.test(data) && regex2.test(data))
    {
        alert("Рядок містить тире і підкреслювання.");
    }
    else if (regex1.test(data))
    {
        alert("Рядок містить тире.");
    }
    else if (regex2.test(data))
    {
        alert("Рядок містить підкреслювання.");
    }
    else
    {
        alert("Рядок не містить тире і підкреслювання.");
    }
}