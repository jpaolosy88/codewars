// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna){
    let convertedDNA = [];
    dnaArray = dna.split('')
    dnaArray.forEach(element => {
      if (element == 'T') {
        convertedDNA.push('A')
      } else if (element == 'A') {
        convertedDNA.push('T')
      } else if (element == 'C') {
        convertedDNA.push('G')
      } else if (element == 'G') {
        convertedDNA.push('C')
      }
    })
    return convertedDNA.join('');
  }

  function DNAStrand(dna){
    return dna.replace(/./g, function(x) {
      return DNAStrand.pairs[x];
    })
  }
  
  DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  }