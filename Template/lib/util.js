
// YYYY-MM-DD hh:mm:ss
var getTimeStamp = function(date) {
  var s = 
    leadingZeros(date.getFullYear(), 4) + '-' +
    leadingZeros(date.getMonth() + 1, 2) + '-' +
    leadingZeros(date.getDate(), 2) + ' ' +

    leadingZeros(date.getHours(), 2) + ':' +
    leadingZeros(date.getMinutes(), 2) + ':' +
    leadingZeros(date.getSeconds(), 2);
  return s;
}

function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}
module.exports.getTimeStamp = getTimeStamp;