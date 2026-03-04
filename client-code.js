fetch('http://localhost:3000/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ /* your data */ })
});