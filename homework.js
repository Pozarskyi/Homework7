// task1
// let newWindow = window.open("http://127.0.0.1:5500/index.html", "width=300,height=300");
// setTimeout(newWindow.resizeTo(500, 500), 2000);
// setTimeout(newWindow.moveTo(200, 200), 2000);
// setTimeout(newWindow.close(), 10000)

// task2

// let btn = document.querySelector('button');
// let parahraph = document.querySelector('p');


// btn.addEventListener('click', function() {
//     parahraph.style.color = 'orange';
//     parahraph.style.fontSize = '20px';
//     parahraph.style.fontFamily = 'Comic Sans MS';
// })

// task3
// let blue = document.querySelector('.blue');
// let pink = document.querySelector('.pink');
// let brown = document.querySelector('.brown');
// let link = document.querySelector('.link');
// let div = document.querySelector('div')

// blue.addEventListener('click', function(){
//     div.style.backgroundColor = 'blue'
// });

// pink.addEventListener('dblclick', function() {
//     div.style.backgroundColor = 'pink';
// });

// brown.addEventListener('mousedown', function() {
//     div.style.backgroundColor = 'brown';
// });

// brown.addEventListener('mouseup', function() {
//     div.style.backgroundColor = 'white';
// });

// link.addEventListener('mouseover', function() {
//     div.style.backgroundColor = 'yellow';
// });
// link.addEventListener('mouseout', function() {
//     div.style.backgroundColor = 'white';
// });

// task4

// let list = document.querySelector('select');
// let chooseAndDelete = document.querySelector('.delete');


// chooseAndDelete.addEventListener('click', function() {
//     list.options[list.options.selectedIndex].remove();
// });

// task5

// let button = document.querySelector('.button');
// let div = document.querySelector('div');

// button.addEventListener('click', function() {
//     div.innerHTML = `<p>I was pressed</p>`
// });
// button.addEventListener('mouseover', function() {
//     div.innerHTML = `<p>Mouse on me!" </p>`
// });
// button.addEventListener('mouseout', function() {
//     div.innerHTML = `<p>"Mouse is not on me!"</p>`
// })

// task6

// let div = document.querySelector('div');

// window.addEventListener('resize', function() {
//     div.innerHTML =`Width: ${window.innerWidth}, Height: ${window.innerHeight}`
// });

// task7

// let country = document.querySelector('#country');
// let city = document.querySelector('#city');
// let parahraph = document.querySelector('p')

// console.log(country.options[country.options.selectedIndex].value)

// country.addEventListener('chenge', function() {
//     if(country.options[country.options.selectedIndex].value === 'germani'){
//         city.innerHTML = `
//                             <select name="city" id="city">
//                             <option value="Berlin">Berlin</option>
//                             <option value="bayern">Bayern</option>
//                             <option value="hamburg">Hamburg</option>
//                             </select>`
//     }else if(country.options[country.options.selectedIndex].value === 'usa'){
//         city.innerHTML = `
//                             <select name="city" id="city">
//                             <option value="newyork">NewYork</option>
//                             <option value="texas">Texas</option>
//                             <option value="california">California</option>
//                             </select>`
//     }else if(country.options[country.options.selectedIndex].value === 'ukraine') {
//         city.innerHTML = `
//                             <select name="city" id="city">
//                             <option value="newyork">NewYork</option>
//                             <option value="texas">Texas</option>
//                             <option value="california">California</option>
//                             </select>`
//     }
// });


 
