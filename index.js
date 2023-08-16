document.getElementById('btn-submit').addEventListener('click', function () {
    console.log('clicked');
    const em_text = document.getElementById('em');
    const ps_text = document.getElementById('ps');
    console.log(em_text.value, ps_text.value);
    if (em_text.value === 'samsularefin532@gmail.com' && ps_text.value === '123') {
        window.location.href = 'bank.html';

    }
    else {
        alert('password or email does not match!')
    }
})