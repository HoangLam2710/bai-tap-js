// bài 1:
function bai1() {
    for (let i = 1; i < 100; i += 10) {
        let contentTr = document.createElement('tr');
        for (let j = i; j < i + 10; j++) {
            let contentTd = document.createElement('td');
            contentTd.innerHTML = j;
            contentTr.appendChild(contentTd);
        }
        document.getElementById("bai1").appendChild(contentTr);
    }
}

bai1();

// -----------------------------------------------------
// bài 2
function bai2(arr) {
    arr.forEach(item => {
        if (isPrimeNumber(item) === true) {
            console.log(item);
        }
    });
}

function isPrimeNumber(number) {
    let flag = true;
    if (number < 2 || number % 2 === 0) flag = false;
    else if (number === 2 || number === 3) flag = true;
    else if (number > 3) {
        for (let i = 3; i <= Math.sqrt(number); i += 2) {
            if (number % i === 0) {
                flag = false;
                break;
            }
        }
    }
    return flag;
}

bai2([34, 6, 1, 8, 5, 7, 2, 9, 49, 11, 13, 47, 53, 43, 443, 12, 18, 9, 0, -5]);
console.log("-----------------------------------------------------");


// -----------------------------------------------------
// bài 3
function bai3(number) {
    let sum = 2 * number;
    for (let i = 2; i <= number; i++) {
        sum += i;
    }
    return sum;
}

console.log(bai3(4));
console.log("-----------------------------------------------------");


// -----------------------------------------------------
// bài 4
function bai4(number) {
    let result = [];
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) result.push(i)
    }
    return result;
}

console.log(bai4(990));
console.log("-----------------------------------------------------");


// -----------------------------------------------------
// bài 5
function bai5(number) {
    let arrNum = number.split('');
    arrNum.reverse();
    let result = arrNum.join('');
    console.log(result);
}

let numBai5 = prompt("Nhap gia tri Number:");
bai5(numBai5);
console.log("-----------------------------------------------------");


// -----------------------------------------------------
// bài 6
function bai6() {
    let result;
    let S = 0;
    let i = 1;
    while (S <= 100) {
        S += i;
        i++;
    }
    result = i - 2;
    console.log(result);
}

bai6();
console.log("-----------------------------------------------------");


// -----------------------------------------------------
// bài 7
function bai7(n) {
    for (let i = 0; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

bai7(4);
console.log("-----------------------------------------------------");


// -----------------------------------------------------
// bài 8
function bai8() {
    let players = [[], [], [], []];
    let cards = ["4K", "KH", "5C", "KA", "QH", "KD", "2H", "10S",
        "AS", "7H", "9K", "10D"]
    for (let i = 0; i < players.length; i++) {
        for (let j = i; j < cards.length; j += players.length) {
            players[i].push(cards[j]);
        }
    }
    return players;
}

console.log(bai8());
console.log("-----------------------------------------------------");


// -----------------------------------------------------
// bài 9
function bai9(m,n) {
    let temp = Number(n) - 2 * Number(m);
    let y = temp / 2;
    let x = Number(m) - y;
    console.log("Số gà: ", x);
    console.log("Số chó: ", y);
}

let tongSoChoGa = prompt("Nhập tổng số chó gà:");
let tongSoChan = prompt("Nhập tổng số chân:");
bai9(tongSoChoGa,tongSoChan)
console.log("-----------------------------------------------------");


// -----------------------------------------------------
// bài 10
function bai10(hour,minute) {
    let h = Number(hour);
    let m = Number(minute);
    // trong 60 phút kim phút quay dc 360 độ => 1 phút = 360/60 = 6 độ
    // trong 1 giờ kim giờ quay dc 360 độ 
    // => 1 giờ = 360/12 = 30 độ 
    // => 1 phút kim giờ quay dc 30/60 = 0.5 độ

    // h * 60 + m
    // đổi phút thành giờ và cộng thêm số phút đã chạy

    let goc = Math.abs(6 * m - 0.5 * (h * 60 + m));
    return goc;
}

let soGio = prompt("Nhập giờ:");
let soPhut = prompt("Nhập phút:");
console.log(bai10(soGio,soPhut));