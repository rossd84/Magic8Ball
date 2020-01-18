
const output = [
    'It is certain',
    'It is decidedly<br>so',
    'Without a<br>doubt',
    'Yes -<br>definitely',
    'You may rely<br>on it',
    'As I see it,<br>yes',
    'Most<br>likely',
    'Outlook<br>good',
    'Yes',
    'Signs point<br>to yes',
    'Reply hazy,<br>try again',
    'Ask again<br>later',
    'Better not tell<br>you now',
    'Cannot predict<br>now',
    'Concentrate and<br>ask again',
    "Don't count<br>on it",
    'My reply is<br>no',
    'My sources<br>say no',
    'Outlook not<br>so good',
    'Very<br>doubtful'
];
// const output = [output2[19]];

const regex = /\?$/;


let outputTextBox = document.querySelector('.outputText');
const submitButton = document.querySelector('.submitButton');

submitButton.addEventListener('click', e => {
    e.preventDefault();
    outputTextBox.innerHTML = '';
    let inputText = document.querySelector('.inputText').value;

    if(inputText === '') {
        alert("Ask your question.");
    }else if(regex.test(inputText)) {
        
        $('#triangle').fadeOut();
        $('.triangle-text').fadeOut();
        $('.triangle-outside').fadeOut();

        setTimeout(function() {
            outputTextBox.innerHTML = `<p>${output[Math.floor   (Math.random() * (output.length))]}</p>`;
            $('#triangle').fadeIn(2000);
            $('.triangle-text').fadeIn(2500);
            $('.triangle-outside').fadeIn(2000);
        }, 500);


    } else {
        alert("Questions end with a '?'. Please ask again.")
    }
});
console.log(Math.random() * (output.length - 1));


