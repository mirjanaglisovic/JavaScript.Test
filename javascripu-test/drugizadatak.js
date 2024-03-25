// Task 2
// This is the api you will need to get data from: https://dummyjson.com/products

// The task is to fetch data on page load and show the data on the page in cards that you make.
// The cards need to have at least 4 properties about product

const fetchQuotes = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.log(error);
  }
};

fetchQuotes().then((data) => {
  const contentDiv = document.getElementById("content");

  const quotes = data
    .map((quote) => {
      return `<div class="card">
                <p class="author">Author: <span id="authorText">${quote.author}</span></p>
                <p class="content" id="contentText">${quote.content}</p>
               </div>`;
    })
    .join("");

  contentDiv.innerHTML = quotes;
});

const fetchQuotes3 = async () => {
  try {
    const input = document.getElementById("search");
    const response = await fetch(
      `https://dummyjson.com/products
            ${input.value}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

const showQuotes = (data) => {
  const contentDiv = document.getElementById("content3");

  const quotes = data
    .map((quote) => {
      return `<div class="card">
                  <p class="author">Author: <span id="authorText">${quote.author}</span></p>
                  <p class="content" id="contentText">${quote.content}</p>
                 </div>`;
    })
    .join("");

  contentDiv.innerHTML = quotes;
};
