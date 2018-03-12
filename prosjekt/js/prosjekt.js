function setup() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAdiBHlwk6TSyO5rdtcg8LjDzvYDXDjwiI",
        authDomain: "prosjekt-1372a.firebaseapp.com",
        databaseURL: "https://prosjekt-1372a.firebaseio.com",
        projectId: "prosjekt-1372a",
        storageBucket: "prosjekt-1372a.appspot.com",
        messagingSenderId: "1013246905839"
    };
    firebase.initializeApp(config);

    let divListe = document.getElementById("liste");

    let ref = firebase.database().ref("headphone/traadlose");

    function visTraadlose (snapshot) {
        let navn = snapshot.key;
        let pris = snapshot.val();
        divListe.innerHTML += `
              <div>
                <h4>Produkt ${navn}</h4>
                <ul>
                 <li>Bilde  : ${info.bilde}
                 <li>Produsent : ${info.produsent}
                 <li>Pris ${info.pris}
                </ul>
              </div>
            `;
    }
    ref.on("child_added", visTraadlose);

}
