const express = require('express')
const app = express()
const path = require('path')
const port = 3000
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname);
app.use(express.static(path.join(__dirname, 'css')));

let data = {
    "response": "success",
    "id": "70",
    "name": "Batman",
    "powerstats": {
        "intelligence": "100",
        "strength": "26",
        "speed": "27",
        "durability": "50",
        "power": "47",
        "combat": "100"
    },
    "biography": {
        "full-name": "Bruce Wayne",
        "alter-egos": "No alter egos found.",
        "aliases": [
            "Insider",
            "Matches Malone"
        ],
        "place-of-birth": "Crest Hill, Bristol Township; Gotham County",
        "first-appearance": "Detective Comics #27",
        "publisher": "DC Comics",
        "alignment": "good"
    },
    "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
            "6'2",
            "188 cm"
        ],
        "weight": [
            "210 lb",
            "95 kg"
        ],
        "eye-color": "blue",
        "hair-color": "black"
    },
    "work": {
        "occupation": "Businessman",
        "base": "Batcave, Stately Wayne Manor, Gotham City; Hall of Justice, Justice League Watchtower"
    },
    "connections": {
        "group-affiliation": "Batman Family, Batman Incorporated, Justice League, Outsiders, Wayne Enterprises, Club of Heroes, formerly White Lantern Corps, Sinestro Corps",
        "relatives": "Damian Wayne (son), Dick Grayson (adopted son), Tim Drake (adopted son), Jason Todd (adopted son), Cassandra Cain (adopted ward)\nMartha Wayne (mother, deceased), Thomas Wayne (father, deceased), Alfred Pennyworth (former guardian), Roderick Kane (grandfather, deceased), Elizabeth Kane (grandmother, deceased), Nathan Kane (uncle, deceased), Simon Hurt (ancestor), Wayne Family"
    },
    "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/639.jpg"
    }
}

let abom = {
    "response": "success",
    "id": "1",
    "name": "A-Bomb",
    "powerstats": {
        "intelligence": "38",
        "strength": "100",
        "speed": "17",
        "durability": "80",
        "power": "24",
        "combat": "64"
    },
    "biography": {
        "full-name": "Richard Milhouse Jones",
        "alter-egos": "No alter egos found.",
        "aliases": [
            "Rick Jones"
        ],
        "place-of-birth": "Scarsdale, Arizona",
        "first-appearance": "Hulk Vol 2 #2 (April, 2008) (as A-Bomb)",
        "publisher": "Marvel Comics",
        "alignment": "good"
    },
    "appearance": {
        "gender": "Male",
        "race": "Human",
        "height": [
            "6'8",
            "203 cm"
        ],
        "weight": [
            "980 lb",
            "441 kg"
        ],
        "eye-color": "Yellow",
        "hair-color": "No Hair"
    },
    "work": {
        "occupation": "Musician, adventurer, author; formerly talk show host",
        "base": "-"
    },
    "connections": {
        "group-affiliation": "Hulk Family; Excelsior (sponsor), Avengers (honorary member); formerly partner of the Hulk, Captain America and Captain Marvel; Teen Brigade; ally of Rom",
        "relatives": "Marlo Chandler-Jones (wife); Polly (aunt); Mrs. Chandler (mother-in-law); Keith Chandler, Ray Chandler, three unidentified others (brothers-in-law); unidentified father (deceased); Jackie Shorr (alleged mother; unconfirmed)"
    },
    "image": {
        "url": "https://www.superherodb.com/pictures2/portraits/10/100/10060.jpg"
    }
}

juan = data['biography']
app.get('/', function(req, res) {
    for (const [key, value] of Object.entries(juan)) {
        console.log(key);
        if (typeof(value) == 'string') {
            console.log(value)
        }
        else{
            value.forEach(element => {
                console.log(element)
            });
        }
    }
    res.render(__dirname + "/pruab.html", {name:abom["biography"], image:abom["image"]});
});

app.listen(port, () => {
  console.log(`Example app listening on posrt ${port}`)
})