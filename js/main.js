//O'zgaruvchilarni aniqlab olamiz
var elForm = document.querySelector('.js-intro-form-randomnumber');
var elInputAmount = elForm.querySelector('#inputAmountRandom');
var elOutput = elForm.querySelector('#outputRandomNumber');
var elNumInfo = elForm.querySelector('#numInfo');

  //Random sonni aniqlab olamiz
  var x = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  //Nechta imkoniyat borligini beramiz
  var i = 6;

  //Formani jonatilgandagi hodisani qo'shamiz
elForm.addEventListener('submit', function (evt) {
  //Formani serverga jonatishni to'xtatamiz
  evt.preventDefault();

  var num = i;

  if (i == 0) {
    elOutput.textContent = 'Afsus topa olmadingiz, imkoniyatingiz tugadi!';
    elNumInfo.textContent = `Javob ${x} edi`;
  }

  else if (+elInputAmount.value > x) {
    --i;
    elOutput.textContent = 'Kiritgan soningiz katta!';
    elNumInfo.textContent = 'Imkoniyatingiz ' + num + ' ta qoldi!';
  }
  else if (+elInputAmount.value < x) {
    --i;
    elOutput.textContent = 'Kiritgan soningiz kichik!';
    elNumInfo.textContent = 'Imkoniyatingiz ' + num + ' ta qoldi!';
  }
  else if (+elInputAmount.value === x) {
    --i;
    elOutput.textContent = 'Tabriklaymiz, Topdingiz😎!';
    elNumInfo.textContent = '';
  }

  elInputAmount.value = '';

})
