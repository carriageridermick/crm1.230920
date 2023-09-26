async function apiFetch(url) {
    const response = await fetch("https://api.meteo.lt/v1/places/kaunas/forecasts/long-term");
    const final = await response.json();
    console.log(final.json);
} //funkcija kurios kodas paaiškina ją pačią

let duoMeteo = apiFetch(); //duomenysMeteo
console.log(duoMeteo);