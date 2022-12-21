function show_bodypart(id) {
    //Masterplan: switch:id case:variable = nummer -> document.getElement...."https://.... + variable"
    // optional: switch case mit variablen und einem veränderbaren link ganz unten
    // next step: anstelle von buttons koordinatenfelder definieren


    //andere Buttons nicht mehr markiert
    //https://www.w3schools.com/howto/howto_js_tabs.asp am 21.12.22
    let temp_deactive = document.getElementsByClassName("button_bodypart");
    for (j = 0; j < temp_deactive.length; j++) {
        temp_deactive[j].className = temp_deactive[j].className.replace(" active", "");
    }


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

            //Button markieren
            event.currentTarget.className += " active";
            break;

        case "hals":
            document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00033.jpg");
            document.getElementById('symp_hals').style.visibility = 'visible';
            event.currentTarget.className += " active";
            break;

        case "arm":
            document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00034.jpg");
            document.getElementById('symp_arm').style.visibility = 'visible';
            event.currentTarget.className += " active";
            break;

        case "bauch":
            document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00035.jpg");
            document.getElementById('symp_bauch').style.visibility = 'visible';
            event.currentTarget.className += " active";
            break;

        case "unterleib":
            document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00036.jpg");
            document.getElementById('symp_unterleib').style.visibility = 'visible';
            event.currentTarget.className += " active";
            break;

        case "hand":
            document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00037.jpg");
            document.getElementById('symp_hand').style.visibility = 'visible';
            event.currentTarget.className += " active";
            break;

        case "bein":
            document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00038.jpg");
            document.getElementById('symp_bein').style.visibility = 'visible';
            event.currentTarget.className += " active";
            break;

        case "fuss":
            document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00039.jpg");
            document.getElementById('symp_fuss').style.visibility = 'visible';
            event.currentTarget.className += " active";
            break;

        case "haut":
            document.getElementById("bild").setAttribute("src", "https://res01.dcmservice.de/widgets/anatomicus/img/anatomicus/man_body_00031.jpg");
            document.getElementById('symp_haut').style.visibility = 'visible';
            event.currentTarget.className += " active";
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

    //andere Buttons nicht mehr markiert
    let temp_deactive = document.getElementsByClassName("button_bodypart");
    for (j = 0; j < temp_deactive.length; j++) {
        temp_deactive[j].className = temp_deactive[j].className.replace(" active", "");
    }

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

    //andere Buttons nicht mehr markiert
    let temp_deactive = document.getElementsByClassName("button_bodypart");
    for (j = 0; j < temp_deactive.length; j++) {
        temp_deactive[j].className = temp_deactive[j].className.replace(" active", "");
    }

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


