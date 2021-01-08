const quoteList = document.querySelector('#view');

index = Math.floor(Math.random()*QUOTE_LIST.length)
const quote = QUOTE_LIST[index];
console.log(quote);
const quoteView  = document.createElement('p');
quoteView.innerHTML = quote;
quoteList.appendChild(quoteView);

// for (let i = 0; i<QUOTE_LIST.length;i++){
// 	const quote = QUOTE_LIST[i];
// 	console.log(quote);
// 	const quoteView  = document.createElement('p');
// 	quoteView.innerHTML = quote;
//     quoteList.appendChild(quoteView);
// }

document.getElementById("date").innerHTML = Date();