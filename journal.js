// console.log('it works');

// This is the menu list!

const generateGreeting = () => {
    let greeting = "Welcome to my journal!";
    const generateGreeting = `${greeting}`;
    return generateGreeting;
}
const generateChoose1 = () => {
    let choose1 = "Choose(1) for list of all entries.";
    const generateChoose1 = `${choose1}`;
    return generateChoose1;
}
const generateChoose2 = () => {
    let choose2 = "Choose(2) for adding a new entry.";
    const generateChoose2 = `${choose2}`;
    return generateChoose2;
}
const generateChoose3 = () => {
    let choose3 = "Choose(3) to quit.";
    const generateChoose3 = `${choose3}`;
    return generateChoose3;
}
const generateChoose4 = () => {
    let choose4 = "Choose(4) to delete the last entry.";
    const generateChoose4 = `${choose4}`;
    return generateChoose4;
}
function chooseFromMenu() {
    var newLine = "\r\n"
    var msg = generateGreeting();
    msg += newLine;
    msg += generateChoose1();
    msg += newLine;
    msg += generateChoose2();
    msg += newLine;
    msg += generateChoose3();
    msg += newLine;
    msg += generateChoose4();
    const chooseFromMenu = `${msg}`;
    return chooseFromMenu;
}
// I can write this menu list in a consise way like this:
// const chooseFromMenu = `Welcome to my journal! 
// Choose (1) for list of all entries.
// Choose (2) for adding a new entry.
// Choose (3) to quit.
// Choose (4) to delete the last entry.
// Choose (5) to delete a specific entry by its index.
// `;

// This is the object array
let journalLists = [
    {
        Title: "WHO waiting for evidence on Madagascar's herbal coronavirus cure.",
        Content: "The World Health Organization has yet to receive any data or information about the effectiveness of a herbal cure for Covid-19 promoted by Madagascar's government, the UN health body has said. President Andry Rajoelina has been pushing products containing extracts of the artemisia plant as a treatment for the virus."
    },
    {
        Title: "George Floyd death: 'Stop the pain', brother tells US Congress.",
        Content: "The brother of the African American man whose death in police custody has sparked global protests, has urged the US Congress to pass reforms on police brutality and 'stop the pain'."
    },
    {
        Title: "The Forgotten Story of How 13 Black Men Broke the Navy’s Toughest Color Barrier",
        Content: "Sam Barnes racked his brain one chilly morning in January 1944, wondering what he might have done wrong. Barnes, a popular African American petty officer working at Great Lakes Naval Training Station in Illinois, had been in the Navy for 15 months and had never been disciplined. Why, he wondered, was he being ordered to the white side of the segregated station, a command usually reserved for sailors who were in trouble?"
    }
];


// This is my origin code in the exam or the first method that I did!

// let menu = Number(prompt(chooseFromMenu())); // Show the user the menu list 

// if (menu === 1) { //This is the code block of the first list or choice
//       for (let i = 0; i < journalLists.length; i++) {
//         alert(journalLists[i].Title +'\n\n'+ journalLists[i].Content);
//       }
// } else if (menu === 2) { //This is the code block of the second list or choice
//         yourEntryTitle = prompt("Enter your jornal title:");
//         yourEntryContent = prompt("Enter your jornal content:");
//         askForEntry = prompt("Do you want to see your entry? (say yes or no!)");
//         let checking = 'yes';
//         if (askForEntry === checking) {
//         let whichEntry = prompt('Which entry do you want? (please write "title" for the title "content" for the content and "both" if you want to see both:)');
//         if (whichEntry === "title") {
//                 alert(yourEntryTitle);
//         } else if (whichEntry === "content") {
//                 alert(yourEntryContent);
//         } else if (whichEntry === "both") {
//                  alert(yourEntryTitle + '\n\n' + yourEntryContent);
//      } 
//    }
// } else if (menu === 3) { //This is the code block of the third list or choice
//        alert('Thank you for joinig my journal today ! ☺ ❤️ ♪');
// } else if (menu === 4) { // This is the code block of the fourth list or choice also the first bonus
//     journalLists.pop();
//     for (let i = 0; i < journalLists.length; i++) {
//         alert(journalLists[i].Title +'\n\n'+ journalLists[i].Content);
//       }
// }

// Here is the second method to do it!

let menu = Number(prompt(chooseFromMenu())); // Show the user the menu list 

while (menu !== 3) {
    switch (menu) {
        case 1: //This is the code block of the first list or choice
            for (let i = 0; i < journalLists.length; i++) {
                let givenEntryString = `Title: ${journalLists[i].Title}
                
Content: ${journalLists[i].Content}`;
                alert(givenEntryString);
            }
            break;
        case 2: //This is the code block of the second list or choice
            const yourEntryTitle = prompt("Enter your jornal title:");
            const yourEntryContent = prompt("Enter your jornal content:");
            let usersEntry = {
                Title: yourEntryTitle,
                Content: yourEntryContent,
            };
            journalLists.push(usersEntry);
            break;
        case 4: //This is the code block of the fourth list or choice
            const journalListsDeleted = journalLists.pop();
            alert(`We have deleted the last entry iside of journalLists: ${journalListsDeleted.Title}`);
            break;
        case 5: //This is the code block of the fith list or choice
            let whichIndexToDelete = Number(prompt(`Enter the entry's index to delete (1 to ${journalLists.length})`));
            let deleteFromEntry = journalLists.splice(whichIndexToDelete--, 1);
            alert(`This is what you have deleted recentelly: ${deleteFromEntry[0].Title}`);
            break;
        default:
            alert(`Make sure that you have chosen one of those choices: (1, 2, 3, 4, 5)`);

    }
    menu = Number(prompt(chooseFromMenu())); // Reshow the user the menu list 
}
alert('Thank you for joinig my journal today ! ☺ ♪'); //This is the end of the program if the user entered the third choice