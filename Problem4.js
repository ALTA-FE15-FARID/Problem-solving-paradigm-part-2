// Angka romawi 

function convertToRoman(num) {
    const romanNumerals = [
      { value: 1000, numeral: 'M' },
      { value: 900, numeral: 'CM' },
      { value: 500, numeral: 'D' },
      { value: 400, numeral: 'CD' },
      { value: 100, numeral: 'C' },
      { value: 90, numeral: 'XC' },
      { value: 50, numeral: 'L' },
      { value: 40, numeral: 'XL' },
      { value: 10, numeral: 'X' },
      { value: 9, numeral: 'IX' },
      { value: 5, numeral: 'V' },
      { value: 4, numeral: 'IV' },
      { value: 1, numeral: 'I' },
    ];
  
    let result = '';
  
    for (const numeralData of romanNumerals) {
      while (num >= numeralData.value) {
        result += numeralData.numeral;
        num -= numeralData.value;
      }
    }
  
    return result;
  }
  
  // Test case
  console.log(convertToRoman(4)); // Output: IV
  console.log(convertToRoman(9)); // Output: IX
  console.log(convertToRoman(23)); // Output: XXII
  console.log(convertToRoman(2021)); // Output: MMXXI
  console.log(convertToRoman(1646)); // Output: MDCXVLI
  
  