let prices = [4, 3.5, 1.75]
let order = []
const TAX = 6.25

let foods = ["hotdogs", "fries", "sodas"]

for (let i = 0; i < foods.length; i++) {
    order.push(parseInt(prompt("How many " + foods[i] + " do you want?")))
}

subtotal = 0
for (let i = 0; i < order.length; i++) {
    subtotal += prices[i] * order[i]
}

let discount = 0
if (subtotal >= 20) {
    discount = subtotal * 0.1
    subtotal -= discount
}

tax = subtotal * (TAX / 100)
total = subtotal + tax

for (let i = 0; i < foods.length; i++) {
    document.getElementById(foods[i]).innerHTML += order[i]
}
document.getElementById("subtotal").innerHTML += to_currency(subtotal)
document.getElementById("discount").innerHTML += to_currency(discount)
document.getElementById("tax").innerHTML += to_currency(tax)
document.getElementById("total").innerHTML += to_currency(total)

function to_currency(x) {
    let rounded = (parseInt(x * 100) / 100).toString()

    if (rounded.indexOf(".") != -1) {
        if (rounded.indexOf(".") == rounded.length - 2) {
            rounded += "0"
        }
    } else {
        rounded += ".00"
    }
    return rounded
}