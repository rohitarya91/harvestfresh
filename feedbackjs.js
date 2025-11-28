// Feedback form submission and validation logic
document.getElementById('feedbackForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Reset previous error messages
    resetErrors();
  
    let isValid = true;
  
    // Validate name
    const name = document.getElementById('name').value;
    if (!name) {
      isValid = false;
      document.getElementById('nameError').textContent = 'Name is required.';
    }
  
    // Validate email
    const email = document.getElementById('email').value;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailPattern.test(email)) {
      isValid = false;
      document.getElementById('emailError').textContent = 'Please enter a valid email address.';
    }
  
    // Validate rating
    const rating = document.getElementById('rating').value;
    if (!rating) {
      isValid = false;
      document.getElementById('ratingError').textContent = 'Please select a rating.';
    }
  
    // If form is valid, show thank you message and reset form
    if (isValid) {
      document.getElementById('feedback').style.display = 'none'; // Hide form
      document.getElementById('thankYouMessage').classList.remove('hidden'); // Show thank you message
    }
  });
  
  // Reset error messages
  function resetErrors() {
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('ratingError').textContent = '';
  }
  