var legend = [ ['M', 1000], ['CM', 900], ['D', 500], ['CD', 400], ['C', 100], ['XC', 90], ['L', 50], ['XL', 40], ['X', 10], ['IX', 9], ['V', 5], ['IV', 4], ['I', 1] ];

function convertToRoman(num) {
  if (num < 1) {
    return '';
  }
  for (var i = 0; i < legend.length; i++) {
    if (num >= legend[i][1]) {
      return legend[i][0] + convertToRoman(num - legend[i][1]);
    }
  }
}
