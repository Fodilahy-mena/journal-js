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

let listArray = [
    "Title: WHO waiting for evidence on Madagascar's herbal coronavirus cure" +'\n\n' +

    "Content: The World Health Organization has yet to receive any data or information about the effectiveness of a herbal cure for Covid-19 promoted by Madagascar's government, the UN health body has said. President Andry Rajoelina has been pushing products containing extracts of the artemisia plant as a treatment for the virus."
    ,

    "Title: George Floyd death: 'Stop the pain', brother tells US Congress"
    +'\n\n' +
    "Content: The brother of the African American man whose death in police custody has sparked global protests, has urged the US Congress to pass reforms on police brutality and 'stop the pain'."
,
    "Title: The Forgotten Story of How 13 Black Men Broke the Navy’s Toughest Color Barrier" +'\n\n' +
    "Content: Sam Barnes racked his brain one chilly morning in January 1944, wondering what he might have done wrong. Barnes, a popular African American petty officer working at Great Lakes Naval Training Station in Illinois, had been in the Navy for 15 months and had never been disciplined. Why, he wondered, was he being ordered to the white side of the segregated station, a command usually reserved for sailors who were in trouble?"
];

const list = () => {
 	let randomIndex = Math.floor(Math.random() * listArray.length);
 	let string = listArray[randomIndex];
 	const myLists = `"${string}"`;
 	return myLists;
 };

// This is ok!

 let menu = Number(prompt(chooseFromMenu()));

  if (menu === 1) {
      for (let i = 0; i < 3; i++) {
          alert(list());
      }
  } else {
          console.error('Only enter a number between 1 and 5:');
     }

