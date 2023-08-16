document.getElementById('btn-withdraw').addEventListener('click', function () {
    if (parseFloat(document.getElementById('total-balance').innerText) > 0) {

        const pwithdraw = parseFloat(document.getElementById('with-total').innerText);
        const nwithdraw = parseFloat(document.getElementById('withd').value);
        const newtotal = pwithdraw - nwithdraw;
        document.getElementById('with-total').innerText = newtotal;
        document.getElementById('withd').value = '';
        const total_balance = parseFloat(document.getElementById('total-balance').innerText);
        document.getElementById('total-balance').innerText = total_balance - nwithdraw;
    }
    else {
        alert('you do not have enough balance')
    }

})