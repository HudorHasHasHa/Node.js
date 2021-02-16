const os = require('os');
const fs = require('fs');

// console.log(os);
console.log('Platform: ', os.platform());
console.log('Arch: ', os.arch());
console.log('UserIngo: ', os.userInfo().username);

const data = [];
const tempData = [];

const firstNameM = ['Adam', 'Pawel', 'Oskar', 'Igor', 'Mikolaj', 'Dawid', 'Rafal'];
const firstNameF = ['Agata', 'Patrycja', 'Otylia', 'Iga', 'Mariola', 'Dora', 'Rebeca'];
const gender = ['M', 'F'];

const lastName = ['Banas', 'Brit', 'Payne'];

for (let i = 0; i < 20; i++) {
  tempData[i] = {
    gender: gender[Math.floor(Math.random() * gender.length)],
    lastName: lastName[Math.floor(Math.random() * lastName.length)],
    age: Math.floor((Math.random() * (78 - 18 + 1)) + 18),
  }
  tempData[i].gender === 'M' ?
    tempData[i].firstName = firstNameM[Math.floor(Math.random() * firstNameM.length)] :
    tempData[i].firstName = firstNameF[Math.floor(Math.random() * firstNameF.length)];

  tempData[i].email = tempData[i].firstName + '.' + tempData[i].lastName + Math.floor((Math.random() * (9-1+1)) +1) + '@gmail.com';

  let tempNumber = '';
  for(let x = 0; x<9; x++){
    tempNumber += (Math.floor((Math.random() * (9-1+1)) +1));
  }
  tempData[i].phoneNumber = tempNumber;
}

for (i = 0; i < 20; i++) {
  data[i] = {
    gender: tempData[i].gender,
    firstName: tempData[i].firstName,
    lastName: tempData[i].lastName,
    age: tempData[i].age,
    contacts: {
      email: tempData[i].email,
      phoneNumber: tempData[i].phoneNumber, 
    }
  }
  console.log(data[i]);
}

let fill = JSON.stringify(data);

fs.writeFile('people.json', fill, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});
