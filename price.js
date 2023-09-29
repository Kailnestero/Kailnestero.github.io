const price = document.getElementById('price').textContent
const priceMinus = document.getElementById('button_minus')
const pricePlus = document.getElementById('button_plus')
const priceCount = document.getElementById('num_count')


function clicks (){
    let b = priceCount.value;
    let c = price*b
    document.getElementById('price').textContent = c 
}



pricePlus.onclick = function () {
    clicks()
}



priceMinus.onclick = function() {
    clicks()
}


