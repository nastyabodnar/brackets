module.exports = function check(str, bracketsConfig) {
  for (let i = 0; i < bracketsConfig.length; i += 1) { 
    let stringWithBrackets = bracketsConfig[i].join('');
    
    if (str.includes(stringWithBrackets)) {
        str = str.replace(stringWithBrackets, '');
        i = -1;
     }
   }
    return str.length === 0;
};
