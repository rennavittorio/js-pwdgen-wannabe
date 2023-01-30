//Esercizio JS

// 1. Chiedere nome all'utente
    //1.1 Dichiarare var firstName
    //1.2 Assegnare a var valore richiesto ed immesso da utente
    let firstName = prompt('inserisci qui il tuo nome');
    console.log('il nome inserito è:', firstName);

// 2. Chiedere cognome all'utente
    //2.1 Dichiarare var firstName
    //2.2 Assegnare a var valore richiesto ed immesso da utente
    let lastName = prompt('inserisci qui il tuo cognome');
    console.log('il cognome inserito è:', lastName);

// 3. Chiedere colore preferito all'utente
    //3.1 Dichiarare var firstName
    //3.2 Assegnare a var valore richiesto ed immesso da utente
    let preferredColor = prompt('inserisci qui il tuo colore preferito');
    console.log('il colore inserito è:', preferredColor);

// 4. Chiedere un numero all'utente
    //4.1 Dichiarare var firstName
    //4.2 Assegnare a var valore richiesto ed immesso da utente
    let randomNumber = prompt('inserisci qui un numero di quattro cifre');
    console.log('il numero inserito è:', randomNumber);

//5. Mostrare sulla pagina il risultato della concatenazione di: <nome><cognome><colorePreferito><numero> (es. GianlucaLomarcoRosso108)
    // 5.1 Dichiarare var newPswUser
    // 5.2 Assegnare a var valori concatenati inseriti da utente
    const newPswUser = firstName + lastName + preferredColor + randomNumber;
    console.log('la nuova psw generata è:', newPswUser);

    // 5.3 Richiamare elemento HTML da modificare
    const currentPsw = document.getElementById('generated-psw');
    console.log('l\'attuale psw è:', currentPsw.innerHTML);
    // 5.4 Modificare elemento HTML inserendo a schermo il valore generato
    currentPsw.innerHTML = newPswUser;
    console.log('la nuova psw scelta è:', currentPsw.innerHTML);




//N.B. Dichiarare una var e assegnare valore possono essere svolte assieme (i.e. 'inizializzare')