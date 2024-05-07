    // Funzione per salvare il nome in localStorage
    function saveName() {
        var name = document.getElementById("nameInput").value;
        localStorage.setItem("savedName", name);
        document.getElementById("savedName").innerText = name;
    }

    // Funzione per rimuovere il nome da localStorage
    function clearName() {
        localStorage.removeItem("savedName");
        document.getElementById("savedName").innerText = "";
    }

    // Funzione per aggiornare il contatore di tempo in sessionStorage
    function updateTimeCounter() {
        var counter = sessionStorage.getItem("timeCounter");
        if (counter === null) {
            counter = 0;
        } else {
            counter = parseInt(counter);
        }
        counter++;
        sessionStorage.setItem("timeCounter", counter);
        document.getElementById("timeCounter").innerText = counter;
    }

    // Aggiorna il contatore di tempo ogni secondo
    setInterval(updateTimeCounter, 1000);

    // Mostra il nome salvato all'avvio della pagina, se presente
    var savedName = localStorage.getItem("savedName");
    if (savedName !== null) {
        document.getElementById("savedName").innerText = savedName;
        document.getElementById("nameInput").value = savedName;
    }

    // Mostra il contatore di tempo all'avvio della pagina, se presente
    var timeCounter = sessionStorage.getItem("timeCounter");
    if (timeCounter !== null) {
        document.getElementById("timeCounter").innerText = timeCounter;
    }