const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts. – Winston Churchill",

  "Happiness is not something ready made. It comes from your own actions. – Dalai Lama",

  "The only way to do great work is to love what you do. – Steve Jobs",

  "In the middle of every difficulty lies opportunity. – Albert Einstein",

  "Believe you can and you're halfway there. – Theodore Roosevelt",

  "Do not watch the clock; do what it does. Keep going. – Sam Levenson",

  "The future depends on what you do today. – Mahatma Gandhi",

  "Don't let yesterday take up too much of today. – Will Rogers",

  "You miss 100% of the shots you don't take. – Wayne Gretzky",

  "Be yourself; everyone else is already taken. – Oscar Wilde",

  "Act as if what you do makes a difference. It does. – William James",

  "Success is how high you bounce when you hit bottom. – George S. Patton",

  "Start where you are. Use what you have. Do what you can. – Arthur Ashe",

  "If you can dream it, you can do it. – Walt Disney",

  "The best way to predict the future is to create it. – Peter Drucker",

  "It always seems impossible until it’s done. – Nelson Mandela",

  "You are never too old to set another goal or to dream a new dream. – C.S. Lewis",

  "The only limit to our realization of tomorrow will be our doubts of today. – Franklin D. Roosevelt",

  "What you get by achieving your goals is not as important as what you become by achieving your goals. – Zig Ziglar",

  "Success is getting what you want. Happiness is wanting what you get. – Dale Carnegie",

  "Keep your face always toward the sunshine—and shadows will fall behind you. – Walt Whitman",

  "Do what you can, with what you have, where you are. – Theodore Roosevelt",

  "The best revenge is massive success. – Frank Sinatra",

  "Life is 10% what happens to us and 90% how we react to it. – Charles R. Swindoll",

  "Your time is limited, don't waste it living someone else's life. – Steve Jobs",

  "Dream big and dare to fail. – Norman Vaughan",

  "Opportunities don't happen. You create them. – Chris Grosser",

  "I am not a product of my circumstances. I am a product of my decisions. – Stephen Covey",

  "You only live once, but if you do it right, once is enough. – Mae West",

  "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",

  "Dream it. Wish it. Do it. – Unknown",

  "Don't stop when you're tired. Stop when you're done. – Marilyn Monroe",

  "Wake up with determination. Go to bed with satisfaction. – Unknown",

  "Little things make big days. – Isabel Marant",

  "It’s going to be hard, but hard does not mean impossible. – Unknown",

  "Don’t wait for opportunity. Create it. – George Bernard Shaw",

  "Sometimes later becomes never. Do it now. – Unknown",

  "Great things never come from comfort zones. – Roy T. Bennett",

  "Dream bigger. Do bigger. – Unknown",

  "If it doesn’t challenge you, it won’t change you. – Fred DeVito",

  "Be the change that you wish to see in the world. – Mahatma Gandhi",

  "Success usually comes to those who are too busy to be looking for it. – Henry David Thoreau",

  "If you’re offered a seat on a rocket ship, don’t ask what seat! Just get on. – Sheryl Sandberg",

  "Work hard in silence, let success be your noise. – Frank Ocean",

  "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart. – Roy T. Bennett",

  "Doubt kills more dreams than failure ever will. – Suzy Kassem",

  "Do what you feel in your heart to be right—for you’ll be criticized anyway. – Eleanor Roosevelt",

  "We are what we repeatedly do. Excellence, then, is not an act, but a habit. – Aristotle",

  "Don’t wait. The time will never be just right. – Napoleon Hill",

  "Everything you’ve ever wanted is on the other side of fear. – George Addair",
 
  "Khudi ko kar buland itna ke har taqdeer se pehle, Khuda bande se khud poochhe, bata teri raza kya hai.– Allama Iqbal",
];

const generateButton = document.getElementById("generateButton");

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  quoteDisplay.innerText = quote;
}

generateButton.addEventListener("click", generateQuote);
