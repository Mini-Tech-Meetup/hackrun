function getReplaceWord(word) {
    if (word == 'e'&&!document.getElementById('e').checked)
        return ' '

    if (word == 'E'&&!document.getElementById('E').checked)
        return ' '
    if (word == '2'&&!document.getElementById('2').checked)
        return '둘'

    const firstArray = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    const midArray = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
    const lastArray = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

    let unicode = word.charCodeAt(0) - 44032;

    let firstIdx = parseInt(unicode / 588);
    let midIdx = parseInt((unicode - (firstIdx * 588)) / 28);
    let lastIdx = parseInt(unicode % 28);

    let first = firstArray[firstIdx]
    let mid = midArray[midIdx]
    let last = lastArray[lastIdx]
    if(!document.getElementById('이').checked)
        if (first == 'ㅇ' && mid == 'ㅣ')
            return last

    return word
}

function changeText(text){
    let title = "😁빠진 SEASON 2"
    if(text===undefined)
        text=document.getElementById('input').value
    let ar = Array.from(text)
    let out = ar.map(getReplaceWord).join('')

    document.getElementById('output').value = out

    ar = Array.from(title)
    out = ar.map(getReplaceWord).join('')
    document.getElementById('title').innerText = out

}

function unselectAllAndChangeText()
{
    const checkboxes = document.getElementsByName('color');

    checkboxes.forEach((checkbox) => {
        checkbox.checked = false; 
      })
      

    changeText()
}

document.getElementById('input').addEventListener('keyup', function(event) {
    changeText(this.value)
})

document.getElementById('copy').addEventListener('click', function(event) {
  let out =  document.getElementById('output')
  try {
    out.focus()
    out.select()
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
  } catch (err) {
  }
});