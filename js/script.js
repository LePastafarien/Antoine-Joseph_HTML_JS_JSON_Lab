const url = "https://lepastafarien.github.io/JSON_Jet_Fighter/Jet_Fighter.json";

let getJetJsonData = () => fetch(url)
    .then((response) => response.json());

getJetJsonData().then(console.log)

let getNames = () => getJetJsonData()
            .then(json => json.map((j) => j.name));

getNames().then((names) => names.join(", ")).then(console.log);

let getManufacturer = () => getJetJsonData()
            .then(json => json.map((j) => j.manufacturer));

getManufacturer().then((manufacturers) => manufacturers.join(", ")).then(console.log);

let getOrigin_Country = () => getJetJsonData()
            .then(json => json.map((j) => j.origin_country));

getOrigin_Country().then((origin_countries) => origin_countries.join(", ")).then(console.log);

let getImage_Link = () => getJetJsonData()
            .then(json => json.map((j) => j.image));

getImage_Link().then((image_links) => image_links.join(", ")).then(console.log);


let text = "<h1>Jet Fighter</h1><table><tr><th>Name</th><th>Manufacturer</th><th>Origin Country</th><th>Image</th></tr><tr>";

getNames().then((names) => {
    for (let name of names) {
        console.log(name);
        text+=("<td> " + String(name) + "</td>");
    }
    text += ("</tr><tr>");
});

getManufacturer().then((manufacturers) => {
    for (let manufacturer of manufacturers) {
        console.log(manufacturer);
        text += ("<td> " + manufacturer + "</td>");
    }
    text += ("</tr><tr>");
});

getOrigin_Country().then((origin_countries) => {
    for (let origin_country of origin_countries) {
        console.log(origin_country);
        text += ("<td> " + origin_country + "</td>");
    }
    text += ("</tr><tr>");
});

getImage_Link().then((image_links) => {
    for (let image_link of image_links) {
        console.log(image_link);
        text += ("<td> " + image_link + "</td>");
    }
    text += ("</tr><table>");
});

console.log(text);

document.getElementById("content").innerHTML = text;