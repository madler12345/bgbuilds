
// === Element References ===
const email = document.getElementById('emailinput');
const product = document.getElementById('product');
const next = document.getElementById('next');
const switchaddress = document.getElementById('switchaddress');
const billingaddress = document.getElementById('billingaddress');
const productname = document.getElementById('pname');
const productdescription = document.getElementById('pdesc');
const productprice = document.getElementById('pprice');
const shippingcost = document.getElementById('shippingcost');
const tax = document.getElementById('tax');
const total = document.getElementById('total');
const part2 = document.getElementById('section2');

// === Product Data ===
const products = {
  "001": {
    name: 'Birdhouse',
    desc: 'Really neat birdhouse',
    price: '35.99',
    shipping: '10.50',
    tax: '1.25',
    total: '47.74'
  }
};

// === Initial State ===
part2.style.display = 'none';

// === Event Listeners ===
next.addEventListener('click', handleNextClick);
switchaddress.addEventListener('click', switchAddress);

// === Functions ===

// Handle "Next" Button Click
function handleNextClick() {
  if (email.value.trim() === '') {
    alert('Please enter your email.');
    return;
  }

  if (product.value.trim() === '') {
    alert('Please enter a product ID.');
    return;
  }

  const selectedProduct = products[product.value.trim()];
  if (!selectedProduct) {
    alert('Invalid product ID. Please enter a valid one.');
    return;
  }

  // Lock inputs and show next section
  email.disabled = true;
  product.disabled = true;
  next.disabled = true;
  part2.style.display = 'block';

  // Populate product info
  makePayment(selectedProduct);
}

// Toggle Billing Address Section
function switchAddress() {
  if (switchaddress.innerText === 'Use same billing address') {
    billingaddress.style.display = 'none';
    switchaddress.innerText = 'Use different billing address';
  } else {
    billingaddress.style.display = 'block';
    switchaddress.innerText = 'Use same billing address';
  }
}

// Populate Product Details in Checkout Summary
function makePayment(selectedProduct) {
  productname.innerText = selectedProduct.name;
  productdescription.innerText = selectedProduct.desc;
  productprice.innerText = `$${selectedProduct.price}`;
  shippingcost.innerText = `$${selectedProduct.shipping}`;
  tax.innerText = `$${selectedProduct.tax}`;
  total.innerText = `$${selectedProduct.total}`;
}
