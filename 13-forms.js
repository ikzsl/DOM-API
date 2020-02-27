const form = document.body.querySelector('.feedback-form');
const onFormSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const [email, name, comment] = [...formData.values()];
  form.remove();
  document.body.querySelector('.container')
    .innerHTML = `<h1>Feedback</h1><div>
  <p>Feedback has been sent</p>
  <div>Email: ${email}</div>
  <div>Name: ${name}</div>
  <div>Comment: ${comment}</div>
  </div>`;
};
form.addEventListener('submit', onFormSubmit);

















/* document.body.innerHTML = `<div>
<p>Feedback has been sent</p>
<div>Email: test@email.com</div>
<div>Name: Matz</div>
<div>Comment: My Comment11</div>
</div>`; */