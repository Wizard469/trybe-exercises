const fs = require('fs').promises;

// async function readAll() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
//   const simpsons = JSON.parse(fileContent);
//   const strings = simpsons.map(({ id, name }) => `${id} - ${name}`);

//   strings.forEach((str) => console.log(str));
// };

// async function getSimpsonById(id) {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

//   const simpsons = JSON.parse(fileContent);

//   const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id);

//   if (!chosenSimpson) {
//     throw new Error('Id not found');
//   };

//   return chosenSimpson;
// };

// async function filterSimpsons() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

//   const simpsons = JSON.parse(fileContent);

//   const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

//   await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
// };

// async function createSimpsonsFamily() {
//   const fileContent = await fs.readFile('./simpsons.json', 'utf-8');

//   const simpsons = JSON.parse(fileContent);

//   const familyIds = [1, 2, 3, 4];
//   const simpsonsFamily = simpsons.filter((simpson) => familyIds.includes(Number(simpson.id)));

//   await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
// };

// async function addNelsonToFamily() {
//   const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');

//   const simpsonsFamily = JSON.parse(fileContent);

//   simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

//   await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
// }

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  const removeNelson = simpsons.filter((simpson) => simpson.id !== '8');

  const addingMaggie = removeNelson.concat([{ id: '15', name: 'Maggie Simpson' }]);

  // const addingMaggie = [ ...simpsonsWithoutNelson, { id: '15', name: 'Maggie Simpson' } ]

  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(addingMaggie));
};

async function main() {
  // await getSimpsonById();
  // const simpson =  await getSimpsonById(1);
  // console.log(simpson);
  // await filterSimpsons();
  // await createSimpsonsFamily();
  // await addNelsonToFamily();
  await replaceNelson();
};

main();
