// expected Result numbers = [2, 3, 5, 7, 8, 9, 10]
var numbers = [5, 7, 9, 8, 10, 3, 2];
console.log(numbers);
document.write("Before");
document.write("<br>");
document.write(numbers);
var num = numbers.length;
for (var i = 0; i < num; i++) {
    for (var j = i + 1; j < num; j++) {
        if (numbers[i] > numbers[j]) {
            numbers[i] = numbers[i] + numbers[j];
            numbers[j] = numbers[i] - numbers[j];
            numbers[i] = numbers[i] - numbers[j];
        }
    }
}
console.log(numbers);
document.write("<br>");
document.write("After");
document.write("<br>");
document.write(numbers);
