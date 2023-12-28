const prompt = require ("prompt-sync")();

function logResponseBody (jsonBody)
{
    console.log (jsonBody);
}

function callbackFn (result)
{
    result.json().then (logResponseBody);
}

var sendObj = {
    method: "GET"
};

let route = "http://localhost:3000?termNumber=";

while (true)
{
    let termNumber = prompt ('>>> ');
    if (termNumber < 1)
    {
        break;
    }
    
    fetch (route + String (termNumber), sendObj).then (callbackFn)
}