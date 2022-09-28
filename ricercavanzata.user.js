// ==UserScript==
// @name         Ricerca Avanzata Ticket
// @namespace    https://www.zucchetti.it
// @version      0.4
// @description  Aggiunge opzioni alla ricerca ticket
// @author       GALNIC
// @match        https://www.zucchetti.it/areariservata/*
// @require      http://ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js

// ==/UserScript==

//Aggiunge le opzioni per Anno Da
waitForKeyElements ("#SHHHQBQMFR option[value=2022]", AddOption_1);
//Aggiunge le opzioni per Anno A
waitForKeyElements ("#XLQXYQQTSG option[value=2022]", AddOption_2);
//Aggiunge le opzioni per Centro Servizi
waitForKeyElements ("#MQCQNKQMGB option[value='PAOW']", AddOption_3);

//Funzioni per aggiungere opzioni vere e proprie

function AddOption_1 (jNode) {
    jNode.before ('<option value="2016">2016</option>');
    jNode.before ('<option value="2017">2017</option>');
    jNode.before ('<option value="2018">2018</option>');
    jNode.before ('<option value="2019">2019</option>');
}

function AddOption_2 (jNode) {
    jNode.before ('<option value="2016">2016</option>');
    jNode.before ('<option value="2017">2017</option>');
    jNode.before ('<option value="2018">2018</option>');
    jNode.before ('<option value="2019">2019</option>');
}

function AddOption_3 (jNode) {
    jNode.before ('<option value="HRPOR">Portale HR</option>');
    jNode.before ('<option value="GRUMA">Risorse Umane</option>');
    jNode.before ('<option value="BP024">HRZ MILANO</option>');
    jNode.before ('<option value="PAOMN">Paghe Omnia</option>');
    jNode.before ('<option value="PRPWF">Presenze Project e Workflow</option>');
    jNode.before ('<option value="GPRWF">Presenze Infinity</option>');
    jNode.before ('<option value="AGODI">OMNIA - Ago Infinity</option>');
    jNode.before ('<option value="HDSAP">Sistemisti Applicativi</option>');
    jNode.before ('<option value="DATIN">System integration</option>');
    jNode.before ('<option value="HDSI">MyZ Support</option>');
}
