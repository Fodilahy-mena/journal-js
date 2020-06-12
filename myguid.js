// // happy quotes
// const happyQuotes = [
// 	[
// 		'Amateurs look for inspiration;',
// 		'We have to be honest about what we want',
// 		'All my life, I kept waiting for things to get better',
// 		'Accidents happen',
// 		'Either be a good parent',
// 	],
// 	[
// 		'the rest of us just',
// 		'and take risks rather than lie to ourselves',
// 		'But a funny thing happened while I was waiting for the world to change',
// 		'Our bones shatter, our skin splits, our hearts break',
// 		'to your career or ',
// 	],
// 	[
// 		'get up and go to work.',
// 		'and make excuses to stay in our comfort zone.',
// 		"Because I didn't change it.",
// 		'We burn, we drown, we stay alive.',
// 		'just give your dream up for adoption.',
// 		'get up and go to work.',
// 		'and make excuses to stay in our comfort zone.',
// 		"Because I didn't change it.",
// 		'We burn, we drown, we stay alive.',
// 		'just give your dream up for adoption.',
// 		'get up and go to work.',
// 		'and make excuses to stay in our comfort zone.',
// 		"Because I didn't change it.",
// 		'We burn, we drown, we stay alive.',
// 		'just give your dream up for adoption.',
// 	],
// ];
// const sadQuotes = [
// 	[
// 		'It made me realize that Beatrice had changed;',
// 		"Don't mistake me for a friend",
// 		'With the Smithies, it was different',
// 		'One of the hallmarks of social wellness',
// 		'Only by binding together',
// 	],
// 	[
// 		'that she did not spoke her mind',
// 		'because I sometimes',
// 		'was sometimes no telling where one of them',
// 		'is being inclusive, not exclusive,',
// 		'as a single force',
// 	],
// 	[
// 		'it was not the real deal.',
// 		'choose to be friendly.',
// 		'began and the others left off.',
// 		'with our friendship.',
// 		'will we remain strong and unconquerable.',
// 	],
// ];
// const generateQuote = (quotesArray) => {
// 	let randomIndex1 = Math.floor(Math.random() * quotesArray[0].length);
// 	let randomIndex2 = Math.floor(Math.random() * quotesArray[1].length);
// 	let randomIndex3 = Math.floor(Math.random() * quotesArray[2].length);
// 	let string1 = quotesArray[0][randomIndex1];
// 	let string2 = quotesArray[1][randomIndex2];
// 	let string3 = quotesArray[2][randomIndex3];
// 	const generatedQuote = `Generated quote : "${string1} ${string2} ${string3}"`;
// 	return generatedQuote;
// };
// let continueProgram = 'yes';
// while (continueProgram === 'yes') {
// 	let numberOfQuotes = Number(prompt('How many quotes do you want to generate? (1min, 5max)'));
// 	while (numberOfQuotes < 0 || numberOfQuotes > 5) {
// 		numberOfQuotes = Number(prompt('How many quotes do you want to generate? (1min, 5max)'));
// 	}
// 	let typeOfQuote = prompt('Which set of quotes do you want to use? (happy or sad)');
// 	while (typeOfQuote !== 'happy' && typeOfQuote !== 'sad') {
// 		typeOfQuote = prompt('Which set of quotes do you want to use? (happy or sad)');
// 	}
// 	let alertText = '';
// 	if (typeOfQuote === 'happy') {
// 		for (let i = 0; i < numberOfQuotes; i++) {
// 			alertText += '\n' + generateQuote(happyQuotes) + '\n';
// 		}
// 	} else {
// 		for (let i = 0; i < numberOfQuotes; i++) {
// 			alertText += '\n' + generateQuote(sadQuotes) + '\n';
// 		}
// 	}
// 	alert(alertText);
// 	continueProgram = prompt('Do you want to run the program again? (yes, no)');
// }
// alert('Thank you for using my quote generator ❤️');

//2nd try

let array1 = ["You", "maybe", "alone", "becomes"];
let array2 = ["Really", "But", "everything", "suppose"];
let array3 = ["Rabbit", "carrot", "his", "all"];
const generateQuote = () => {
let randomIndex1 = Math.floor(Math.random() * array1.length);
let randomIndex2 = Math.floor(Math.random() * array2.length);
let randomIndex3 = Math.floor(Math.random() * array3.length);

let string1 = array1[randomIndex1];
let string2 = array2[randomIndex2];
let string3 = array3[randomIndex3];

let myQuote = `${string1} ${string2} ${string3}`;
return myQuote;
}

 let numberOfQuotes = Number(prompt("Enter a number of time you want to generate a random quoate:"));
 if (numberOfQuotes >= 1 && numberOfQuotes <= 5) {
     for (let i = 0; i < numberOfQuotes; i++) {
         alert(generateQuote());
     }
 } else {
         console.error('Only enter a number between 1 and 5:');// To check if the number is between 1 and 5
     }