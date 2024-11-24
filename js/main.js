var quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "In three words I can sum up everything I've learned about life: it goes on.",
        author: "Robert Frost"
    },
    {
        quote: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        quote: "The only person you are destined to become is the person you decide to be.",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },
    {
        quote: "The mind is everything. What you think you become.",
        author: "Buddha"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },

];

var quoteContainer = document.getElementById('quote-container');
var quoteElement = document.getElementById('quote');
var authorElement = document.getElementById('author');

var usedQuotes = [];

function generateQuote() {
    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (usedQuotes.includes(randomIndex));

    usedQuotes.push(randomIndex);

    var randomQuote = quotes[randomIndex];
    quoteElement.textContent = randomQuote.quote;
    authorElement.textContent = `- ${randomQuote.author}`;

    if (usedQuotes.length === quotes.length) {
        usedQuotes = [];
    }
}

