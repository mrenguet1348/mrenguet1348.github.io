const array = ["chien", "chat", "cheval", "mouton", "canard"];
let count = 0;
let pass;
let fraudDetection = 0;
let continueStatus;

function passInput()
{
	while(pass != "exit")
	{
		pass = prompt("Entrez un mot de passe");
		continueStatus = myFunction(pass);
		if(continueStatus === false)
		{
			break;
		}
	}
	
}

function myFunction(pass)
{
	for(i = 0; i < array.length; i++)
	{
		for(j = 0; j < array[i].length; j++)
		{
			if(array[i][j] == pass[j])
			{
				count++;
			}
		}
		pourcentage_similitude = count / array[i].length;
		if(pourcentage_similitude >= 0.8)
		{
			fraudDetection++;
		}
		count = 0;
	}
	if(fraudDetection >= 3)
	{
		alert("Bien essayé mais vous avez été détecté!\nLes forces de l'ordre on été prévenues")
		return false;
	}
}


