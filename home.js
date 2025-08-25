const validPin = 1234;
// function to get input value
function getElementInputValue(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber;
}
// function to get value
function getElementByValue(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue;
}

// functio  to get innerText

function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue);
    return elementValueNumber;
}
// function to set inner text
function setInnerText(value){
    const availableBalanceElement = document.getElementById("available-balance")
    availableBalanceElement.innerText = value
}
// function to toggle
function handleToggle(id){
    const forms = document.getElementsByClassName("form");

    for (const form of forms) {
        form.style.display = "none";
    }

    document.getElementById(id).style.display = "block";
}
// function to toggole button
function handleButtonToggle(id){
    const formsBtn = document.getElementsByClassName("form-btn");
    for (const btn of formsBtn) {
        btn.classList.remove("border-[#0874f2]", "bg-[#0874f20d]");
        btn.classList.add("border-gray-300");
    }
    document.getElementById(id).classList.remove("border-gray-300");

    document.getElementById(id).classList.add("border-[#0874f2]", "bg-[#0874f20d]");
}

// add money feature
document.getElementById("btn-addMoney").addEventListener('click',function(e){
    e.preventDefault();
    
    const bank = getElementByValue("bank");

    const accountNumber = getElementByValue("account-number");

    const amount = getElementInputValue("amount-toAdd");

    const pin = getElementInputValue("add-pin");
    
    const availableBalance = getInnerText("available-balance");

    if (accountNumber.length < 11 || accountNumber.length > 15) {
        alert("Please Provide A Valid Acc. Number");
        return;
    }

    if(pin != validPin){
        alert("Please provide a valid pin")
        return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    setInnerText(totalNewAvailableBalance);

})

//Cash out Feature
document.getElementById("btn-withdraw").addEventListener('click', function (e) {
    e.preventDefault();
    const amount = getElementInputValue("withdraw-amount");

    const agentNumber = getElementByValue("agent-number");
    const pin = getElementInputValue("cashout-pin");

    const availableBalance = getInnerText("available-balance");

    if (agentNumber.length < 11 || agentNumber.length > 15) {
        alert("Please provide a valid Number");
        return;
    }

    if(pin != validPin){
        alert("Please provide a valid Pin");
        return;
    }
    const totalNewAvailableBalance = availableBalance - amount;

    setInnerText(totalNewAvailableBalance);
});
// Transfer Feature
document.getElementById("btn-transfer").addEventListener('click',function(e){
    e.preventDefault();
    const amount = getElementInputValue("transfer-amount");
    const transferNumber = getElementByValue("transfer-number");
    const pin = getElementInputValue("transfer-pin");
    const availableBalance = getInnerText("available-balance");
    if(transferNumber.length < 11 || transferNumber.length > 11){
        alert("Please Input a valid Number ")
        return;
    }
    if(pin != validPin){
        alert("Please provide a valid Pin")
        return;
    }
    const totalNewAvailableBalance = availableBalance - amount;
    setInnerText(totalNewAvailableBalance);
})
// get bonous feature
document.getElementById("btn-get-bonous").addEventListener('click',function(e){
    e.preventDefault(); 
})
// Pay Bill features
document.getElementById("btn-payNow").addEventListener('click',function(e){
    e.preventDefault();
    const pay = getElementByValue("pay");
    const accountNumber = getElementByValue("biller-number");
    const amount = getElementInputValue("amount-toPay");
    const pin = getElementInputValue("pay-pin");
    const availableBalance = getInnerText("available-balance");

    if(accountNumber.length < 11 || accountNumber.length > 15){
        alert("You have given a wrong Number")
        return;
    }
    if(pin != validPin){
        alert("Your Pin is Incorrect");
        return;
    }

    const totalNewAvailableBalance = availableBalance - amount;
    setInnerText(totalNewAvailableBalance);
})
// toggling feature

// Add Button
document.getElementById("add-button").addEventListener('click', function(){
    handleToggle("add-money-parent");
    handleButtonToggle("add-button");

})
// Cashout Button
document.getElementById("cashout-button").addEventListener("click", function () {
    handleToggle("cashout-parent");
    handleButtonToggle("cashout-button");
});
// transfer button
document.getElementById("transfer-button").addEventListener('click', function(){
    handleToggle("transfer-parent");
    handleButtonToggle("transfer-button");
})
// get bonous button
document.getElementById("get-bonous-button").addEventListener("click", function () {
    handleToggle("getbonous-parent");
    handleButtonToggle("get-bonous-button");
});
// pay bill button
document.getElementById("bill-button").addEventListener('click',function(){
    handleToggle("bill-parent");
    handleButtonToggle("bill-button")
})
// transection button
document.getElementById("transection-button").addEventListener('click', function(){
    handleToggle("transection-parent")
    handleButtonToggle("transection-button");
})