// quotes project

const quotes = [
  {
    name: "Nelson Mandela",
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall."
  },
  {
    name: "Steve Jobs",
    quote:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking"
  },
  {
    name: "Eleanor Roosevelt",
    quote:
      "If life were predictable it would cease to be life, and be without flavor."
  },
  {
    name: "Oprah Winfrey",
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."
  },
  {
    name: "Benjamin Franklin",
    quote:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn."
  }
];

// target elements

const quoteBtn = document.querySelector("#quoteBtn");
const quote = document.querySelector("#quote");
const quoteAuthor = document.querySelector("#quoteAuthor");

quoteBtn.addEventListener("click", () => {
  const randomquote = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[randomquote].name;
  quoteAuthor.textContent = quotes[randomquote].quote;

  console.log(randomquote);
});
