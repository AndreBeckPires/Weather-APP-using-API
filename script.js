function fetching() {
    fetch("http://api.weatherapi.com/v1/current.json?key=a5aed5ac433c4f10af021932230306&q=Sao Paulo&aqi=no")
        .then((response) => response.json())
        .then((data) => console.log(data))// output will be the required data
        .catch((error) => console.log(error))
}

function test(){
    var input = document.getElementById("locationSelection").value;
    var requestURL = "http://api.weatherapi.com/v1/current.json?key=a5aed5ac433c4f10af021932230306&q=" + input + "&aqi=no";
    console.log(requestURL);
    fetch(requestURL)
        .then((response) => response.json())
        .then(data => {
            displayTemp(data)
          })
        .catch((error) => console.log(error));
}

function displayTemp(temp){
    var pElement = document.getElementById("temp");
    pElement.innerHTML = temp.current.temp_c + ' °C <p>Condition: ' + temp.current.condition.text + '</p>';
    var icon = document.createElement('img');
    icon.id = "condition"
    icon.src = "https:" + temp.current.condition.icon
    pElement.appendChild(icon)

}