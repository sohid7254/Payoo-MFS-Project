// log in button functionality

document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault()
    const mobileNumber = 12345678910;
    const pinNumber = 1234;
    const mobileNumberValue = document.getElementById('mobileNumber').value 
    const mobileNumberValueConverted = parseInt(mobileNumberValue)

    const pinNumberValue = document.getElementById('pinNumber').value
    const pinNumberValueConverted = parseInt(pinNumberValue)

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        window.location.href ="./home.html"
    }else {
        alert('Invalid Number or Pin')
    }


})
