///Create quote objects///
var quote1 = {
    text: "I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best.",
    source : "Marilyn Monroe"
}
var quote2 = {
    text: "You know you’re in love when you can’t fall asleep because reality is finally better than your dreams",
    source:"Dr.Seuss"
}
var quote3 = {
    text: "Pimpin' ain't easy",
    source: "Big Daddy Kane",
    citation: "It's a Big Daddy Thing"
}
var quote4 = {
    text:"The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts",
    source: "Bertrand Russel"
}
var quote5 = {
    text : "If a man does his best, what else is there?",
    source: "General George S. Patton",
    year: 1945
}

///Create list containing quotes///
const quotes =[quote1,quote2,quote3,quote4,quote5]

///Create a function that makes a random number from 0 to one less than the length of our quotes list.///
function getRandomQuote(){
    list = (quotes.length-1)
    number = Math.floor(Math.random()*list)
    return quotes[number]
}

function selectRandomColor(){
    colors = ["red","blue","green",'white',"yellow","orange"]
    number = (Math.floor(Math.random()*5))
    return colors[number]
}

///Create a function that produces an HTML string containing the quote, source, year (if applicable) and citation (if applicable)///
///The function then assigns this string to the innerHTML property of the div quote-box///
function printQuote(){
    quote = getRandomQuote()
    htmlString = '<p class = "quote">' + quote.text + "</p> <p class='source'>" + quote.source 
    if (quote.citation){
        htmlString = htmlString + '<span class="citation">' + quote.citation + "</span>"
    }
    if (quote.year){
        htmlString = htmlString + '<span class="year">' + quote.year + "</span>"
    }
    htmlString =  htmlString + "</p>"
    quotebox = document.getElementById('quote-box')
    quotebox.innerHTML = htmlString
    document.getElementById('container').style.background = selectRandomColor()
}



///Code given by Treehouse for event listener that changes quote on click of 'Show another quote' box///
document.getElementById('loadQuote').addEventListener("click", printQuote, false);
///After an interval of 30 seconds run the function printQuote///
setInterval(printQuote, 30000)