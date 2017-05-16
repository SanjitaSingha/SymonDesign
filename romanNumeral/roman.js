function romanNumber(n) {
  var oneDigitNumber = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII',
    8: 'VIII',
    9: 'IX'
  };
  var twoDigitNumber = {
    0: '',
    10: 'X',
    20: 'XX',
    30: 'XXX',
    40: 'XL',
    50: 'L',
    60: 'LX',
    70: 'LXX',
    80: 'LXXX',
    90: 'XC'
  };
  var threeDigitNumber = {
    0: '',
    100: 'C',
    200: 'CC',
    300: 'CCC',
    400: 'CD',
    500: 'D',
    600: 'DC',
    700: 'DCC',
    800: 'DCCC',
    900: 'CM'
  };
  var fourDigitNumber = {
    0: '',
    1000: 'M',
    2000: 'MM',
    3000: 'MMM',
    4000: 'MMMM'
  };

  if(n < 10) {
    return onDigitNumber[n];
  } else if (n === 10) {
    return 'X';
  } else if (n > 10 && n < 100) {
    var mod10 = n % 10;
    return twoDigitNumber[n - mod10] + onDigitNumber[mod10];
  } else if (n > 100 && n < 1000 ) {
    var mod100 = n % 100;
    var hNum = n - mod100;
    var mod10 = mod100 % 10;
    var tNum = mod100 - mod10;
    return threeDigitNumber[hNum] + twoDigitNumber[tNum] + oneDigitNumber[mod10];
  } else if (n > 1000 && n < 5000) {
    var mod1000 = n % 1000;
    var thNum = n - mod1000;
    var mod100 = mod1000 % 100;
    var hNum = mod1000 - mod100;
    var mod10 = mod100 % 10;
    var tNum = mod100 - mod10;
    return fourDigitNumber[thNum] + threeDigitNumber[hNum] + twoDigitNumber[tNum] + oneDigitNumber[mod10];
  }
}
