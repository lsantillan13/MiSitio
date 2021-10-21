 const Texts = ['Front-End Developer.' ,'Back-End Developer!', 'Full-Stack Engineer!'];
let Count = 0;
let Index = 0;
let CurrentText = '';
let Letter = '';

(function type (){

if(Count === Texts.length){
    Count = 0;
}
    CurrentText = Texts[Count];
    Letter = CurrentText.slice(0, ++Index);
    document.querySelector('#typing').textContent = Letter;
    if(Letter.length === CurrentText.length){
        Count++;
        Index = 0;}
    setTimeout(type, 290);

 }());