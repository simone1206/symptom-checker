function show_bodypart(id) {
    //Masterplan: switch:id case:variable = nummer -> document.getElement...."https://.... + variable"
    // next step: switch case mit variablen und einem veränderbaren link ganz unten
    // optinal: anstelle von buttons koordinatenfelder definieren

    // next step: variable ansicht? if ansicht = vorn -> switch case mit id vorne else -> switch case mit id hinten ??
    // next step: mit bildern von frau wiederholen -> link mit variable ändern? -> oder ohne anklicken bei frau??

    /*    if (document.getElementsByClassName('symptom-content')[0].style.visibility === 'visible'){
            document.getElementsByClassName('symptom-content')[0].style.visibility = 'hidden';
        }*/


    //andere offene Symptomlisten wieder ausblenden
    //https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown am 20.12.22
    let symptoms = document.getElementsByClassName("symptom-content");
    let i;
    for (i = 0; i < symptoms.length; i++) {
        let openSymptoms = symptoms[i];
        openSymptoms.style.visibility = 'hidden';
    }

    //https://stackoverflow.com/questions/47517769/javascript-creating-a-switch-case-based-on-the-id-of-the-button-clicked am 19.12.22
    switch (id) { //id vorne: 31-39 hinten:41-48
        case "kopf":
            // Körperteil blau markiert
            document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00032.jpg");

            //entsprechende Symptome dazu anzeigen
            document.getElementById('symp_kopf').style.visibility = 'visible';
            break;

        case "hals":
            document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00033.jpg");
            document.getElementById('symp_hals').style.visibility = 'visible';
            break;

        case "arm":
            document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00034.jpg");
            document.getElementById('symp_arm').style.visibility = 'visible';
            break;

        case "bauch":
            document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00035.jpg");
            document.getElementById('symp_bauch').style.visibility = 'visible';
            break;

        case "unterleib":
            document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00036.jpg");
            document.getElementById('symp_unterleib').style.visibility = 'visible';
            break;

        case "hand":
            document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00037.jpg");
            document.getElementById('symp_hand').style.visibility = 'visible';
            break;

        case "bein":
            document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00038.jpg");
            document.getElementById('symp_bein').style.visibility = 'visible';
            break;

        case "fuss":
            document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00039.jpg");
            document.getElementById('symp_fuss').style.visibility = 'visible';
            break;

        case "haut":
            document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00031.jpg");
            document.getElementById('symp_haut').style.visibility = 'visible';
            break;
    }

    //document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_000" + variable + ".jpg");


    //körperteile und entsprechende bildnummern
    //kopf: 32
    //hals:33
    //arm: 34
    //bauch: 35
    //unterleib: 36
    //hand:37
    //bein:38
    //fuss:39
    /* "back"
    (this.hoverZone("#head", 41),
        this.hoverZone("#neck", 42),
        this.hoverZone("#arms", 43),
        this.hoverZone("#back", 44),
        this.hoverZone("#abdomen", 45),
        this.hoverZone("#hands", 46),
        this.hoverZone("#legs", 47),
        this.hoverZone("#feet", 48));*/


}

//geschlecht wählen
function select_gender(id) {

    //andere offene Symptomlisten wieder ausblenden
    let symptoms = document.getElementsByClassName("symptom-content");
    let i;
    for (i = 0; i < symptoms.length; i++) {
        let openSymptoms = symptoms[i];
        openSymptoms.style.visibility = 'hidden';
    }

    // noch machen: button ausgewählt farbe bleiben
    if (id == "male") {
        document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00001.jpg");
    } else if (id == "female") {
        document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomica/woman_body_00001.jpg");
    }

}

// körper drehen
function turn_body() {

    //andere offene Symptomlisten wieder ausblenden
    let symptoms = document.getElementsByClassName("symptom-content");
    let i;
    for (i = 0; i < symptoms.length; i++) {
        let openSymptoms = symptoms[i];
        openSymptoms.style.visibility = 'hidden';
    }

    //mann
    if (document.getElementById("bild").src === "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00001.jpg") {
        document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00016.jpg");
    } else if (document.getElementById("bild").src === "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00016.jpg") {
        document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00001.jpg");
    }

    //frau
    else if (document.getElementById("bild").src === "https://res01.dcmservice.de/widgets/anatomicus/img/anatomica/woman_body_00001.jpg") {
        document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomica/woman_body_00016.jpg");
    } else if (document.getElementById("bild").src === "https://res01.dcmservice.de/widgets/anatomicus/img/anatomica/woman_body_00016.jpg") {
        document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomica/woman_body_00001.jpg");
    } else {
        document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00016.jpg");
    }
}


