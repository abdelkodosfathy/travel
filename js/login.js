document.getElementById('log-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = {
  email: formData.get('email'),
  password: formData.get('password')
  };
  fetch('https://projectone-h83j.onrender.com/auth/login', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
  })
  .then(response => {
  if (!response.ok) {
      throw new Error('Network response was not ok');
  }
  return response.json();
  })
  .then(data => {
  console.log(data);
  })
  .catch(error => {
  console.error('There was a problem with your fetch operation:', error);
  });
  
})