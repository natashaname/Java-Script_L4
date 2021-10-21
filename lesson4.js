// function firstElement (name, color,content) {
// const secondElement = document.createElement (name)
// secondElement.style.color = color
// secondElement.textContent = content
// return secondElement
// }
// let element = firstElement ('ul', 'blue', 'hello world')
// console.log (element)



// const textElement = document.createElement('p')
// textElement.textContent = 'Добавить абзац с текстом на страницу'
// textElement.style.fontSize = '36px'
// textElement.style.fontWeight = 'bold'
// const bodyElement = document.querySelector('body')
// bodyElement.append(textElement)
// console.log(textElement)



// const newElement = document.createElement('select')
// const bodyElement = document.querySelector('body')
// bodyElement.prepend(newElement)
// for (let i = 1960; i < 2021; i++) {
// const optionElement = document.createElement('option')
// optionElement.textContent = i
// newElement.append(optionElement)
// }
// console.log(newElement)


const ulElement = document.createElement('ul')
const newBodyElement = document.createElement('body')
newBodyElement.append(ulElement)
const arr = [
    { name: "Женя", order: true },
    { name: "Кристина", order: true },
    { name: "Павел", order: false },
    { name: "Виолетта", order: false },
    { name: "Костя", order: true }
]
for (let i = 0; i < arr.length; i++) {
    const liElement = document.createElement('li')
    ulElement.append(liElement)
    if (arr[i].order) {
        liElement.textContent = 'клиент' + ' ' + arr[i].name + ' ' + 'оплатил' + ' ' + 'заказ'
    } else {
        liElement.textContent = 'клиент' + ' ' + arr[i].name + ' ' + 'отменил' + ' ' + 'заказ'
    }
}
console.log(ulElement)