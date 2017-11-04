// Все работает, только если ничего не ввели-остается запятая, и не хочет заносить 0

// var arr = [ , 1, 2, 3, 4];
//
// var first = +prompt('Input your number');
//
//   if (!isNaN(first) && first != ' ' ){
//     arr = [first, 1, 2, 3, 4];
//     alert('Your array is: ' + arr);
//   }else{
//     alert('Input correct number');
//   }
//
// OR

// Все работает, кроме 0(если if), если без if-при пустом поле-заносит на первое место 0)
var arr = [1, 2, 3, 4];
var new_arr = [];
var first = +prompt('Input your number');
if (first == ' ' || isNaN(first)){
    alert('Input correct number');
  }else{
    new_arr = first + ',' + arr;
    alert('Your array is: ' + new_arr);
}
