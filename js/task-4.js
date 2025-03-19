const formEl = document.querySelector('.login-form');
formEl.addEventListener('submit', event => {
  event.preventDefault();

  const elements = event.target.elements;

  if (
    elements.email.value.trim() === '' ||
    elements.password.value.trim() === ''
  ) {
    alert('All form fields must be filled in');
    return;
  }
  const formData = {
    email: elements.email.value.trim(),
    password: elements.password.value.trim(),
  };
  console.log(formData);
  formEl.reset();
});
