// console.log('it works');

// This is ok!

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
function chooseFromMenu() {
    var newLine = "\r\n"
    var msg = generateGreeting();
    msg += newLine;
    msg += generateChoose1();
    msg += newLine;
    msg += generateChoose2();
    msg += newLine;
    msg += generateChoose3();
    const chooseFromMenu = `${msg}`;
    return chooseFromMenu;
}
// work with it

// let listArray = [
//     "Title: WHO waiting for evidence on Madagascar's herbal coronavirus cure" +'\n\n' +

//     "Content: The World Health Organization has yet to receive any data or information about the effectiveness of a herbal cure for Covid-19 promoted by Madagascar's government, the UN health body has said. President Andry Rajoelina has been pushing products containing extracts of the artemisia plant as a treatment for the virus."
//     ,

//     "Title: George Floyd death: 'Stop the pain', brother tells US Congress"
//     +'\n\n' +
//     "Content: The brother of the African American man whose death in police custody has sparked global protests, has urged the US Congress to pass reforms on police brutality and 'stop the pain'."
// ,
//     "Title: The Forgotten Story of How 13 Black Men Broke the Navy’s Toughest Color Barrier" +'\n\n' +
//     "Content: Sam Barnes racked his brain one chilly morning in January 1944, wondering what he might have done wrong. Barnes, a popular African American petty officer working at Great Lakes Naval Training Station in Illinois, had been in the Navy for 15 months and had never been disciplined. Why, he wondered, was he being ordered to the white side of the segregated station, a command usually reserved for sailors who were in trouble?"
// ];

// const list = () => {
//  	let randomIndex = Math.floor(Math.random() * listArray.length);
//  	let string = listArray[randomIndex];
//  	const myLists = `"${string}"`;
//  	return myLists;
//  };

// With object
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

//console.log(journalLists.firstList.Title + '\n\n' + journalLists.firstList.Content);
// const list = () => {
//  	let randomIndex = Math.floor(Math.random() * listArray.length);
//  	let string = listArray[randomIndex];
//  	const myLists = `"${string}"`;
//  	return myLists;
//  };

// This is ok!

 let menu = Number(prompt(chooseFromMenu()));
 let entry = "";
  if (menu === 1) {
      for (let i = 0; i < journalLists.length; i++) {
        alert(journalLists[i].Title +'\n\n'+ journalLists[i].Content);
      }
  } else {
          console.error('Please make sure of your entry:');
     }

    menu = Number(prompt(chooseFromMenu()));
     if (menu === 2) {
        yourEntryTitle = prompt("Enter your jornal title:");
        yourEntryContent = prompt("Enter your jornal content:");
   }
   let askForEntry = prompt("Do you want to see your entry? (say yes or no!)");
  // let checking entry = 'yes';
 if (askForEntry === 'yes') {
     let whichEntry = prompt('Which entry do you want? (please write "title" for the title "content" for the content and "both" if you want to see both:)');
     if (whichEntry === "title") {
        alert(yourEntryTitle);
     } else if (whichEntry === "content") {
        alert(yourEntryContent);
     } else if (whichEntry === "both") {
         alert(yourEntryTitle + '\n\n' + yourEntryContent);
     } else {
         alert("Make sure that you spelled it correctly");
     }
 	// while (whichEntry !== "title" && whichEntry !== "content" && whichEntry !== "both") {
    //     whichEntry = prompt('Which entry do you want? (please write "title" for the title "content" for the content and "both" if you want to see both:)');
    //  }
    }
    menu = Number(prompt(chooseFromMenu()));
    if (menu === 3) {
        alert('Thank you for joinig my journal! ❤️');
    }
    