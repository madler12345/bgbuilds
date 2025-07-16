const email = document.getElementById('emailinput');
const product = document.getElementById('product');
const next = document.getElementById('next');
const switchaddress = document.getElementById('switchaddress');
const billingaddress = document.getElementById('billingaddress');
next.addEventListener('click', switchAddress);
next.addEventListener('click', nextPhase);
const part2 = document.getElementById('section2');
part2.style.display = 'none';
function nextPhase(){
    if(email.value === ''){
        alert('Please enter missing values');
        return;
    } else if(product.value === ''){
        alert('Please select a product');
        return;
    } else {
    email.disabled = true;
    product.disabled = true;
    next.disabled = true;
    part2.style.display = 'block';
    }

}
function switchAddress(){
    if(switchaddress.innerHTML === 'Use same billing address'){
        billingaddress.style.display = 'none';
        switchaddress.innerHTML = 'Use different billing address';
    } else if(switchaddress.innerHTML === 'Use different billing address'){
        billingaddress.style.display = 'block';
        switchaddress.innerHTML = 'Use same billing address';
    }
}