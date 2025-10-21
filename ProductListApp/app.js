// Build a Product List App (JS only) — add/remove/filter items dynamically.
const dummyProducts = [
  {
    id: "prod001",
    name: "Wireless Bluetooth Headphones",
    category: "Electronics",
    price: 79.99,
    inStock: true,
    imageUrl: "https://example.com/images/headphones.jpg",
  },
  {
    id: "prod002",
    name: "Organic Cotton T-Shirt",
    category: "Apparel",
    price: 24.5,
    inStock: false,
    imageUrl: "https://example.com/images/tshirt.jpg",
  },
  {
    id: "prod003",
    name: "Stainless Steel Water Bottle",
    category: "Home Goods",
    price: 18.0,
    inStock: true,
    imageUrl: "https://example.com/images/waterbottle.jpg",
  },
  {
    id: "prod004",
    name: "Ergonomic Office Chair",
    category: "Furniture",
    price: 249.99,
    inStock: true,
    imageUrl: "https://example.com/images/officechair.jpg",
  },
];

const addData = {
  id: "prod0045555",
  name: "new data",
  category: "new data",
  price: 249.99,
  inStock: true,
  imageUrl: "https://example.com/images/officechair.jpg",
};

dummyProducts.push(addData);

const index = dummyProducts.findIndex((data) => data.id === "prod004");
// console.log(index);
if (index !== -1) {
  dummyProducts.splice(index, 1);
}

const isInStock = dummyProducts.filter((data) => data.inStock);
console.log("instock", isInStock);
console.log("helo", dummyProducts);

const filteredCategory = dummyProducts.filter(
  (data) => data.category === "Electronics"
);
console.log(filteredCategory, "filter category");
