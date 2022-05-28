// 🚀 5- Dado o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúsculo ou minúsculo.

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
  const loweredNames = names.join('').toLowerCase().split('');
  return loweredNames.reduce((acc, curr) => (curr === 'a') ? acc + 1 : acc, 0);
}

//Another way:

/* function containsA() {
  return names.reduce((acc, curr) =>
     acc + curr.split('').reduce((acumulator, current) => {
        if (current === 'a' || current === 'A') return acumulator + 1;
        return acumulator;
     }, 0), 0);
} */

console.log(containsA());
