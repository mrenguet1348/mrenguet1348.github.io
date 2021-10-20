"use strict"
let const DICO_MDP = ["chat", "chien", "pates", "cochon", "poule", "canard", "vache", "TIEPHEC", "HE201992", "oie"];
let count = 0;
let password;
let fraudDetection = 0;
let continueStatus;

/**
* fonction qui récupère le mot de passe tant que le mot de passe est différent de exit
* Elle récupère le retour de la fonction verifMdp qui est soit false, soit true). 
* L'utilisateur ne peut plus entrer de mot de passe une fois qu'il y a 3 retours à false. On sort donc de la boucle.
*/
function passwordInput()//récupère le mot de passe
{
	while(password != "exit")//tant que password est différent de exit
	{
		password = prompt("Entrez un mot de passe"); // on affiche ce prompt
		continueStatus = verifMdp(password);//On envoie le password reçu à la fonction "myFonction" et on récupère la valeur de retour qui est false s'il y a détection de fraude
		if(continueStatus === false)
		{
			break;//Si faux on sort de la fonction ==> plus de possibilité d'entrer de password
		}
	}
	
}
/**
* fonction qui vérifie à l'aide d'une double boucle for 
* si oui ou non le password en entré en paramètre correspond au moins à 80% à un élément du dictionnaire
* @param {String} password -  le mot de passe entré par l'utilisateur.
* @returns {Boolean} false - le retour à la valeur fausse si la condition située dans la boucle se répète au moins 3 fois.
* @returns {Boolean} true - le retour à la valeur vrai
*/
function verifMdp(password)// fonction qui vérifie si oui ou non le password en entré corespond au moins à 80% à une entrée du dictionnaire
{
	for(i = 0; i < array.length; i++)//on parcourt la liste des mots du dico (tableau).
	{
		for(j = 0; j < array[i].length; j++)//on parcour chaque mot à l'indice i du dico. exemplesi i = 0 on parcours les lettres du mot chien
		{
			if(array[i][j] == password[j])//condition qui vérifie si la jème lettre du ième mot du dico correspond à la jème lettre du password encodé
			{
				count++;// incrémente le nombre de lettre similaire à la même position dans les deux mots
			}
		}
		pourcentage_similitude = count / array[i].length;//On divise count(nombre de lettre similaire) avec la longueur du mot du dictionnaire pour avoir le pourcentage de similitude
		if(pourcentage_similitude >= 0.8)//si plus de 80% de similitude on incrémente le compteur "fraudDetection"
		{
			fraudDetection++;
		}
		count = 0;//on remet le compteur du nombre de lettre à 0 car on passe au mot suivant.
	}
	if(fraudDetection >= 3)//Si nombre de mot similaire à au moins 80% est égale ou supérieur à trois on affiche le message et on return false
	{
		alert("« Le système a détecté une tentative de brute force. Vous êtes donc bannis du site pendant un mois. Veuillez contacter l’administrateur du site (Monsieur Noël ) en cas d’erreur. ")
		return false;
	}
	return true
}
