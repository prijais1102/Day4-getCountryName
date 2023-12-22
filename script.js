async function getCountryNames()
{
    var res=await fetch("https://countriesnow.space/api/v0.1/countries");
    var data= await res.text();
    var arr= await JSON.parse(data);
    var result= arr.data;
    display(result);
}
getCountryNames();

function display(result)
{
    for(let i=0;i<result.length;i++){
        document.getElementById("country").innerHTML += `<option> ${result[i].country} </option>`
        console.log(result[i].country);
    }
}
