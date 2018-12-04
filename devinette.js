alert("Bienvenue dans ce jeu de devinette !");
var démarrer = true;

do
{
    var solution = Math.floor(Math.random() * 100) + 1;
    var difficulter = "";
    var retry = "";

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

    		for  (var hp = 0; hp <= 10;)
    		{	
    			if (nombre === solution)
    			{
                    alert("Bravo, vous avez réussi à trouver le nombre caché qui était bien "+ solution + " en " + hp + " essaies");
    				break;
    			}

    				else if ((nombre < solution) && ( nombre > 1))
    				{
                        hp++;
                        nombre = Number(prompt(nombre + " est trop petit \nRetentez votre chance"));
    				}

    				else if ((nombre > solution) && ( nombre < 100))
    				{
                        hp++;
                        nombre = Number(prompt(nombre + " est trop grand \nRetentez votre chance"));
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

        while ((retry !== "oui") && (retry !== "non"))
        {
            var retry = prompt("Voulez-vous recommencer?\nOui / Non");
            retry = retry.toLowerCase();
        }

        if (retry == "non")
        {
            démarrer = false;
        }

    	break;

    	case "normal" :
            alert("Vous avez choisis la difficulter " + difficulter);
            alert("Vous avez 7 essaies");

    		var nombre = 0;

    		while ((nombre < 1) || (nombre > 100))
    		{
    			nombre = Number(prompt("Trouvez un nombre entre 1 et 100"));
    		}

    		for  (hp = 0; hp <= 7;)
    		{	
    			if (nombre === solution)
                {
                    alert("Bravo, vous avez réussi à trouver le nombre caché qui était bien "+ solution + " en " + hp + " essaies");
                    break;
                }
                     else if ((nombre < solution) && ( nombre > 1))
                    {
                        hp++;
                        nombre = Number(prompt(nombre + " est trop petit \nRetentez votre chance"));
                    }

                    else if ((nombre > solution) && ( nombre < 100))
                    {   
                        hp++;
                        nombre = Number(prompt(nombre + " est trop grand \nRetentez votre chance"));
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

        while ((retry !== "oui") && (retry !== "non"))
        {
            retry = prompt("Voulez-vous recommencer?\nOui / Non");
            retry = retry.toLowerCase();
        }

        if (retry == "non")
        {
            démarrer = false;
        }

    	break;

    	case "difficile" :
            alert("Vous avez choisis la difficulter " + difficulter);
            alert("Vous avez 5 essaies");

        	var nombre = 0;

        	while ((nombre < 1) || (nombre > 100))
        	{

        		nombre = Number(prompt("Trouvez un nombre entre 1 et 100"));

        	}
        	for  (var hp = 0; hp <= 5;)
        	{	
        		if (nombre === solution)
                {
                    alert("Bravo, vous avez réussi à trouver le nombre caché qui était bien "+ solution + " en " + hp + " essaies");
                    break;
                }

                    else if ((nombre < solution) && ( nombre > 1))
                    {
                        hp++;
                        nombre = Number(prompt(nombre + " est trop petit \nRetentez votre chance"));
                    }

                    else if ((nombre > solution) && ( nombre < 100))
                    {
                        hp++;
                        nombre = Number(prompt(nombre + " est trop grand \nRetentez votre chance"));
                    }

                else
                {
                    alert("Attention ! vous êtes en dehors de l'intervalle 1 à 100");
                    nombre = Number(prompt("Trouvez un nombre entre 1 et 100 \nRetentez votre chance"));
                }

                if (hp === 3)
                {
                    alert("Attention il vous reste un dernier essaie !");
                }

                if (hp === 4)
                {
                    alert("Vous avez atteint la limite, vous avez perdu ! \n La solution était " + solution);
                    break;
                }
            }

        while ((retry !== "oui") && (retry !== "non"))
        {
            var retry = prompt("Voulez-vous recommencer?\nOui / Non");
            retry = retry.toLowerCase();
        }

        if (retry == "non")
        {
            démarrer = false;
        }

        break;
    }
}
while (démarrer == true)
