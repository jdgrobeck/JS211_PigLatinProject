

const pigLatin = () => {
    let word = document.getElementById("user-input").value;
    word = word.toLowerCase().trim();
  
    let vowels = ["a", "e", "i", "o", "u"]
  
    for (let letter = 0; letter < word.length; letter++){
      if (vowels.includes(word[0])) {
        return document.getElementById('display-element').innerHTML = word + "yay";
    
      }
  
      else if ((!vowels.includes(word[0])) && (!vowels.includes(word[1]))) {
        return document.getElementById('display-element').innerHTML = word.slice(2) + word.slice(0,2) + "ay"
    
  
      }
      else {
        return document.getElementById('display-element').innerHTML = word.slice(1) + word.slice(0,1) + "ay"
      }
  }
  }

  const clearResults = () => {
    document.getElementById("user-input").value = "";
    document.getElementById("display-element").innerHTML = "";
   
  }

  