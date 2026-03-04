const cors = require('cors');
app.use(cors());

app.get('/contact', (req, res) => {
  // Your handler logic
  res.json({ message: 'Contact endpoint' });
});