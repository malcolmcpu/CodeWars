// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of
// cells and carries the "instructions" for the development and
// functioning of living organisms.
//
//
//
//
// In DNA strings, symbols "A" and "T" are complements of each other, as "C"
// and "G". Your function receives one side of the DNA (string, except for
// Haskell); you need to return the other complementary side. DNA strand
// is never empty or there is no DNA at all (again, except for Haskell).

function dnaStrand(dna) {
  dna = dna.split('');
  let corresponding = { A: 'T', T: 'A', C: 'G', G: 'C' };

  return dna.map((element) => corresponding[element]).join('');
}
