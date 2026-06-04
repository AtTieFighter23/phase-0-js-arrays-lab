// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Lof first product
function logFirstProduct() {
  console.log(products[0]);
}

// Add a new product
function addProduct(productName) {
  products.push(productName);
}

// Update a product name at a specific index
function updateProductName(index, newName) {
  if (index >= 0 && index < products.length) {
    products[index] = newName;
  }
}


// Remove the last product
function removeLastProduct() {
  products.pop();
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
