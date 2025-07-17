
// === Element References ===
const email = document.getElementById('email');
const elabel = document.getElementById('emaillabel');
const product = document.getElementById('product');
const plabel = document.getElementById('productlabel');
const next = document.getElementById('next');
const switchaddress = document.getElementById('switchaddress');
const billingaddress = document.getElementById('billingaddress');
const productname = document.getElementById('pname');
const productdescription = document.getElementById('pdesc');
const productprice = document.getElementById('pprice');
const shippingcost = document.getElementById('shippingcost');
const tax = document.getElementById('tax');
const total = document.getElementById('total');
const part1 = document.getElementById('section1');
const part2 = document.getElementById('section2');
const banner = document.getElementById('tyb');
const billinst = document.getElementById('billinst');
const billingcz = document.getElementById('billingcityzip');
const billingstate = document.getElementById('billingstate');
const name = document.getElementById('first');

// === Product Data ===
const products = {
  "001": {
    name: 'Birdhouse',
    desc: 'Really neat birdhouse',
    price: '35.99',
    shipping: '10.50',
    tax: '1.25',
    total: '47.74'
  },
  "002": {
    name: 'Shed',
    desc: 'Really neat shed',
    price: '125.99',
    shipping: '80.00',
    tax: '5.00',
    total: '210.99'
    }
};

// === Initial State ===
part2.style.display = 'none';
banner.style.display = 'none';

// === Event Listeners ===
next.addEventListener('click', handleNextClick);
switchaddress.addEventListener('click', switchAddress);

// === Functions ===

// Handle "Next" Button Click
function handleNextClick() {
if (next.innerText === 'Next') {
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
  part2.style.display = 'block';
  product.readOnly = true;
  email.readOnly = true;
  next.innerText = 'Edit Email  & Product';


  // Populate product info
  makePayment(selectedProduct);
} else {
      // Unlock inputs and hide next section
      part2.style.display = 'none';
      product.readOnly = false;
      email.readOnly = false;
      next.innerText = 'Next';
  }

  }

// Toggle Billing Address Section
function switchAddress() {
  if (billingaddress.style.display === 'block') {
    billingaddress.style.display = 'none';
    billingcz.required = false;
    billingstate.required = false;
    billingst.required = false;
    switchaddress.innerText = 'Use different billing address';
  } else {
    billingaddress.style.display = 'block';
    switchaddress.innerText = 'Use same billing address';
        billingcz.required = true;
        billingstate.required = true;
        billingst.required = true;
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

function done() {
// Populate hidden fields for EmailJS template variables

document.getElementById("hidden-price").value = productprice.textContent;
document.getElementById("hidden-shipping").value = shippingcost.textContent;
document.getElementById("hidden-tax").value = tax.textContent;
document.getElementById("hidden-total").value = total.textContent;
document.getElementById("hidden-product").value = productname.textContent;
document.getElementById("hidden-name").value = name.value;


  banner.style.display = 'block';
  part1.style.display = 'none';
  part2.style.display = 'none';
  next.style.display = 'none';
  check.style.display = 'none';
};
