const express = require('express');
const app = express();
const path = require('path');

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files (images, CSS, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Coffee menu data
const coffeeMenu = [
  {
    name: 'Espresso',
    description: 'A strong and concentrated coffee shot.',
    image: '/images/espresso.jpg',
    price: '$3.50',
  },
  {
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and foam.',
    image: '/images/cappuccino.jpg',
    price: '$4.50',
  },
  {
    name: 'Latte',
    description: 'Espresso with steamed milk and a small amount of foam.',
    image: '/images/latte.jpg',
    price: '$5.00',
  },
  {
    name: 'Mocha',
    description: 'Espresso with chocolate, steamed milk, and whipped cream.',
    image: '/images/mocha.jpg',
    price: '$5.50',
  },
];

// Home route
app.get('/', (req, res) => {
  res.render('index', { coffeeMenu });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});