const form = document.querySelector('form');
const container = document.querySelector('.container');
const email = form.querySelector('input');

form.addEventListener('submit', e => {
  let err = [];
  e.preventDefault();

  const addWarning = (elem,m) => {
    const labelWrapper = elem.previousElementSibling;
    const box = labelWrapper.closest('.box');
    const errText = labelWrapper.querySelector('span');

    if (m !== '') {
      errText.innerText = m;
      box.classList.add('warning');
      err = [];
    } else {
      errText.innerText = '';
      box.classList.remove('warning');
      err.push(true);
    }
  }

  console.log(container)

  const successMessage = (email) => {
    container.classList.add('success');
    container.innerHTML = `
    <div class="success-message">
      <span></span>
      <h1>Thanks for subscribing!</h1>
      <p>
        A confirmation email has been sent to <span class="highlited-email">${email}</span>. 
        Please open it and click the button inside to confirm your subscription.</p>
      <button>Dismiss message</button>
    </div>
    `
  }

  if (email.value === '') {
    addWarning(email,'Can not be empty');
    err.push(true);
  }

  email.addEventListener('keydown', e => {
    const value = email.value;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      addWarning(email,'invalid email address');
    } else {
      addWarning(email,''); 
    }
  })
  err.length > 0 ? e.preventDefault() : successMessage(email.value);
})

