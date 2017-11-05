var arr = [1, 2, 3, 4];
var first = +prompt('Input your number');
var i = 0;
while (i < arr.length) {
  arr[arr.length - i] = arr[arr.length - i - 1]
  i++;
}
arr[0] = first;
    alert('Your array is: ' + arr);
