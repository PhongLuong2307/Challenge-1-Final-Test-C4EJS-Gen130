/*
Tạo một ứng dụng web, cho phép nhập vào 2 số a và b. Hiển thị tất cả các số nguyên tố trong khoảng a và b.  Nhập trên HTML
*/

let $a = document.getElementById('a');
let $b = document.getElementById('b');
let $checkBtn = document.getElementById('checkBtn');
let $numberDisplay = document.getElementById('numberDisplay');
let primeNumbers = [];


$checkBtn.addEventListener('click', function () {
    const $a = Number(a.value);
    const $b = Number(b.value);

    for (let i = $a; i <= $b; i++) {
        if (i == 2 || i === 3) {
            primeNumbers.push(i);
        }
        if (i > 3) {
            let check = true;
            for (let j = 2; j <= i - 1; j++) {
                if (i % j === 0) {
                    check = false;
                    break;
                } 
            }
            if (check) {
                primeNumbers.push(i);
            }
        }
    }
    $numberDisplay.innerHTML = `Các số nguyên tố trong khoảng giữa ${$a} và ${$b} là: ${primeNumbers.toString()}`;
    primeNumbers = [];

});
