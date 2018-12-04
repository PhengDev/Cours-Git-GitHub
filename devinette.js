alert("Bienvenue dans ce jeu de devinette !");

    var solution = Math.floor(Math.random() * 100) + 1;
    var difficulter = "";

    while ((difficulter !== "facile") && (difficulter !== "normal") && (difficulter !== "difficile"))
    {
    	difficulter = prompt("Choissisez la difficulter: " + "\n facile / normal / difficile");
        difficulter = difficulter.toLowerCase();
    }
