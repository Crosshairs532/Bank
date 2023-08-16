document.getElementById('btn-deposit').addEventListener('click', function () {
    const nvalue = parseFloat(document.getElementById('depo').value);
    const pvalue = parseFloat(document.getElementById('dp-total').innerText);
    const total_v = nvalue + pvalue
    document.getElementById('dp-total').innerText = total_v;
    // const pb = parseFloat(document.getElementById('balance-total').innerText);
    document.getElementById('total-balance').innerText = parseFloat(document.getElementById('total-balance').innerText) + nvalue;
    document.getElementById('depo').value = '';
})
