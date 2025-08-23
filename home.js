const validPin = 1234;
// add money feature
document.getElementById("btn-addMoney").addEventListener('click',function(e){
    e.preventDefault();
    
    const bank = document.getElementById("bank").value

    const accountNumber = document.getElementById("account-number").value

    const amount = parseInt(document.getElementById("amount-toAdd").value);

    const pin = parseInt(document.getElementById("add-pin").value);
    
    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    if(accountNumber.length < 11){
        alert("Please Provide A Valid Acc. Number")
        return;
    }

    if(pin != validPin){
        alert("Please provide a valid pin")
    }

    const totalNewAvailableBalance = amount + availableBalance;

    document.getElementById("available-balance").innerText = totalNewAvailableBalance;

})

//Cash out Feature
document.getElementById("btn-withdraw").addEventListener('click', function (e) {
    e.preventDefault();
    const amount = parseInt(document.getElementById("withdraw-amount").value);

    const agentNumber = document.getElementById("agent-number").value
    const pin = parseInt(document.getElementById('cashout-pin').value)

    const availableBalance = parseInt(document.getElementById("available-balance").innerText);

    if (agentNumber.length < 11) {
        alert("Please provide a valid Number");
        return;
    }

    if(pin != validPin){
        alert("Please provide a valid Pin");
    }
    const totalNewAvailableBalance = availableBalance - amount;

    document.getElementById('available-balance').innerText = totalNewAvailableBalance;
});

// toggling feature

document.getElementById("add-button").addEventListener('click', function(){
    document.getElementById("cashout-parent").style.display = "none";
    document.getElementById("add-money-parent").style.display = "block"
})
document.getElementById("cashout-button").addEventListener("click", function () {
    document.getElementById("add-money-parent").style.display = "none";
    document.getElementById("cashout-parent").style.display = "block";
});

