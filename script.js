// Mobile increment unit

const plusBtn = document.getElementById("increment");
plusBtn.addEventListener("click", function() {
    const totalUnit = incrementValue("unit");
    price("price", 1219, totalUnit);
    totalPrice("subTotal", 1219);    
   
})


//Mobile decrement unit

const minusBtn = document.getElementById ("decrement");
minusBtn.addEventListener("click", function (){
    var totalUnit = decrementValue("unit");
    if (totalUnit >=0){
        price("price", 1219, totalUnit);
        totalPrice("subTotal", -1219);
    } 
})

removeCart("remove-1", "cart-1");

// case increment unit

const casePlusBtn = document.getElementById("caseIncrement");
casePlusBtn.addEventListener("click", function (){
    const totalUnit = incrementValue("caseUnit");
    price("casePrice", 59, totalUnit);
    totalPrice("subTotal", 59);

})

//case decrement unit
const caseMinusBtn = document.getElementById ("caseDecrement");
caseMinusBtn.addEventListener("click", function (){
    var totalUnit = decrementValue("caseUnit");
    if (totalUnit >=0){
        price("casePrice", 59, totalUnit);
        totalPrice("subTotal", -59);
    } 
})


removeCart("remove-2", "cart-2");

//functions

function incrementValue(id){
    const unit = document.getElementById(id).value;
    const getUnit= parseFloat(unit);
    const updateUnit= getUnit + 1;
    document.getElementById(id).value = updateUnit;
    return updateUnit;
}

function price(id, perUnit, totalUnit){
    const itemPrice = document.getElementById(id).innerText;
    const floatedPrice = parseFloat(itemPrice);
    const updatePrice = perUnit * totalUnit;
    document.getElementById(id).innerText = updatePrice;
    return updatePrice;
}

function totalPrice(id, perUnit){
    const amount = document.getElementById(id).innerText;
    const getAmount = parseFloat(amount);
    const subTotalPrice = getAmount + perUnit;
    document.getElementById(id).innerText = subTotalPrice;
    const tex = document.getElementById("tex").innerText;
    const floatedTex = parseFloat(tex); 
    document.getElementById("tex").innerText = floatedTex;
    const total = document.getElementById("total").innerText;
    const floatedTotal = parseFloat(total);
    const totalPrice = subTotalPrice + floatedTex;
    document.getElementById("total").innerText = totalPrice;
    return totalPrice;
}
function decrementValue(id){
    const unit = document.getElementById(id).value;
    const getUnit= parseFloat(unit);
    if (getUnit >0){
        const updateUnit= getUnit - 1;
        document.getElementById(id).value = updateUnit;
        return updateUnit;
    }
    
}

//remove cart

function removeCart(id,cart){
const cartOne = document.getElementById(id);
cartOne.addEventListener ("click", function (){
    document.getElementById(cart).style.display = "none";
    
})

}