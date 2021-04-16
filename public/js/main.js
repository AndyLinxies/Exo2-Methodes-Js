//1
let phrase = 'Bonjour tout le monde   ';
console.log(phrase.length);
//2
phrase= phrase.trim();
console.log(phrase.length);
//5
console.log(phrase.charAt(phrase.length-1));
//il lui dit d'afficher le caractère qui correspond à la longeur -1 de la phrase donc le dernier caractère
//6
//let bonjour = phrase.slice(0,7); pas conseillé
//console.log(bonjour)
//Conseillé
console.log(phrase.replace('Bonjour',''));
//On remplace Bonjour par un espace donc cest comme si on le supprimais
//
//7
//console.log(phrase.replace('','Bonjour'));
//8
console.log(phrase.replace('tout le monde',''))
;
//ou
console.log(phrase.replace(phrase,''));
//9
console.log(phrase.replace('Bonjour','string'));
//1O
console.log(Math.round(Math.random()*101));
//ou
console.log(Math.round(Math.random()*(100-1)));
//choisi entre 100 le Max et 1 le min