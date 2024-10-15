localStorage.setItem('userId', 6045903)
const superSop = () => {
    const inputText = document.getElementById('order-list-1').value;
    document.getElementById('order-list-1').value = '';
    const inputValue = document.getElementById('order-list-2').value;
    document.getElementById('order-list-2').value = '';

    if(inputText && inputValue){
        localStorage.setItem(inputText, inputValue)
    }
    // console.log(inputText, inputValue);
};


// set object
const pen = {name: 'matador', color: 'red', price: '10tk'}
localStorage.setItem('pen', JSON.stringify(pen))