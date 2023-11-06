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

getNames().then((names) => {
    document.write("<ul>");
    for (let name of names) {
        document.write("<li> " + name + "</li>");
    }
    document.write("</ul>");
});