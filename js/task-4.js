const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', event => {
  event.preventDefault();

  const elements = event.target.elements;
  const formData = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };
  if (elements.email.name === '' || elements.password.name === '') {
    alert('All form fields must be filled in');
    return;
  }

  console.log(formData);
  formEl.reset();
});
