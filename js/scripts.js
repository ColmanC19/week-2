$(document).ready(function(){
  $('form#survey').submit(function(){
    event.preventDefault();
    var result = calculate()
    console.log('result is: ' + result)
    if (result <= 10) {
      $('#ruby').show();
      $('#python').hide();
      $('#javascript').hide();
      $('#retake').hide();
    } else if (result === 11 || result=== 12|| result=== 13){
      $('#python').show();
      $('#ruby').hide();
      $('#javascript').hide();
      $('#retake').hide();

    } else if (result > 13) {
      $('#javascript').show();
      $('#ruby').hide();
      $('#python').hide();
      $('#retake').hide();
    } else if(isNaN(result)) {
          alert("Why else did you come here if you didn't want to take my survey?");
          $('#retake').show();
          $('#python').hide();
          $('#ruby').hide();
          $('#javascript').hide();
    }
  })


function calculate() {
  var beverage = parseInt($('#beverage').val());
  var shoes = parseInt($('#shoes').val());
  var selfless = parseInt($('#selfless').val());
  var social = parseInt($('#social').val());
  var dining = parseInt($('#dining').val());
  return beverage + shoes + selfless + social + dining;
};
});
