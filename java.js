function countFunc(count) {
  var btnPlus = count.querySelector('#button_plus');
  var btnMinus = count.querySelector('#button_minus');
  var field = count.querySelector('#num_count');
  var fieldValue = parseFloat(field.value, 10);

  btnMinus.addEventListener('click', function() {
    if (fieldValue > 1) {
      fieldValue--;
      field.value = fieldValue;
    } else {
      return 1;
    }
  });
  btnPlus.addEventListener('click', function() {
   if (fieldValue<10){
    fieldValue++;
    field.value = fieldValue;
   } else {
      return 10;
   }
  });

}
var counts = document.querySelectorAll('.input-group');
counts.forEach(countFunc);