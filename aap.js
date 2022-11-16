let list = document.getElementById('list')

buttons = document.querySelectorAll('a');

for(item of buttons){
   item.addEventListener('click', (e) =>{
       buttonText = e.target.innerText;
       console.log('Button text is ', buttonText);
       
        list.innerHTML = buttonText;
       })
}