alert("Bienvenue dans ce jeu de devinette !");

    var solution = Math.floor(Math.random() * 100) + 1;
    var difficulter = "";

    while ((difficulter !== "facile") && (difficulter !== "normal") && (difficulter !== "difficile"))
    {
    	difficulter = prompt("Choissisez la difficulter: " + "\n facile / normal / difficile");
        difficulter = difficulter.toLowerCase();
    }

    switch (difficulter)
    {

    	case "facile":
            alert("Vous avez choisis la difficulter " + difficulter);
            alert("Vous avez 10 essaies");

    		var nombre = 0;

    		while ((nombre < 1) || (nombre > 100))
    		{
    			nombre = Number(prompt("Trouvez un nombre entre 1 et 100"));
    		}

    		for  (var hp = 1; hp <= 9;)
    		{	
    			if (nombre === solution)
    			{
                    alert("Bravo, vous avez réussi à trouver le nombre caché qui était bien "+ solution + " en " + hp + " essaies");
    				break;
    			}

    				else if ((nombre < solution) && ( nombre > 1))
    				{
                        nombre = Number(prompt(nombre + " est trop petit \nRetentez votre chance"));
                        hp++;
    				}

    				else if ((nombre > solution) && ( nombre < 100))
    				{
                        nombre = Number(prompt(nombre + " est trop grand \nRetentez votre chance"));
                        hp++;
    				}

        			else
        			{
                    alert("Attention ! vous êtes en dehors de l'intervalle 1 à 100");
                    nombre = Number(prompt("Trouvez un nombre entre 1 et 100 \nRetentez votre chance"));
    				}

    			if (hp === 8)
    			{
                    alert("Attention il vous reste un dernier essaie !");
    			}

    			if (hp === 9)
    			{
                    alert("Vous avez atteint la limite, vous avez perdu ! \n La solution était " + solution);
    				break;
    			}	
    		}
       case "normal" :
            alert("Vous avez choisis la difficulter " + difficulter);
            alert("Vous avez 7 essaies");

    		var nombre = 0;

    		while ((nombre < 1) || (nombre > 100))
    		{
    			nombre = Number(prompt("Trouvez un nombre entre 1 et 100"));
    		}

    		for  (hp = 1; hp <= 6;)
    		{	
    			if (nombre === solution)
                {
                    alert("Bravo, vous avez réussi à trouver le nombre caché qui était bien "+ solution + " en " + hp + " essaies");
                    break;
                }
                     else if ((nombre < solution) && ( nombre > 1))
                    {
                        nombre = Number(prompt(nombre + " est trop petit \nRetentez votre chance"));
                        hp++;
                    }

                    else if ((nombre > solution) && ( nombre < 100))
                    {
                        nombre = Number(prompt(nombre + " est trop grand \nRetentez votre chance"));
                        hp++;
                    }

                    else
                    {
                        alert("Attention ! vous êtes en dehors de l'intervalle 1 à 100");
                        nombre = Number(prompt("Trouvez un nombre entre 1 et 100 \nRetentez votre chance"));
                    }

                if (hp === 5)
                {
                    alert("Attention il vous reste un dernier essaie !");
                }

                if (hp === 6)
                {
                    alert("Vous avez atteint la limite, vous avez perdu ! \n La solution était " + solution);
                    break;
                }
    		}
