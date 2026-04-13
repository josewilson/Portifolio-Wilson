const form = document.getElementById('contact-form');
const feedback = document.getElementById('form-feedback');

if (form && feedback) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    feedback.textContent = 'Mensagem pronta. Posso integrar este formulário com um serviço real no próximo passo.';
    form.reset();
  });
}
