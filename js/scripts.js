$(document).ready(function(){
  $('form#survey').submit(function(){
    event.preventDefault();
    var beverage = parseInt($("#beverage").val());
    var shoes = parseInt($("#shoes").val());
    var selfless = parseInt($("#selfless").val());
    var social = parseInt($("#social").val());
    var dining = parseInt($("#dining").val());
    var result = calculate(beverage, shoes, selfless, social, dining)
    
    if (result <= 10) {
      $('#ruby').show();
    } else if (result > 13) {
      $('#javascript').show();
      $('#ruby').hide();
      $('#python').hide();
    } else {
      $('#python').show();
      $('#ruby').hide();
      $('#javascript').hide();
    }
  })
})
function calculate(beverage, shoes, selfless, social, dining) {
  return beverage + shoes + selfless + social + dining;

};

// var beverage = parseInt($("#beverage").val());
// console.log(beverage);
// var shoes = parseInt($("#shoes").val());
// var selfless = parseInt($("#selfless").val());
// var social = parseInt($("#social").val());
// result=function(beverage, shoes, selfless, social) {
//   return beverage + shoes + selfless + social;
// };
// if (result <= 10) {
//   $('#ruby').show();
// } else if (result > 18) {
//   $('#javascript').show();
//   $('#ruby').hide();
//   $('#python').hide();
// } else {
//   $('#python').show();
//   $('#ruby').hide();
//   $('#javascript').hide();
// }


//var add = function(beverage, shoes, selfless, social) {
//  return beverage + shoes + selfless + social;
//};
