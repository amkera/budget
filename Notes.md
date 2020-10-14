Filter / Sort Practice

Filter by Expense > $100:

Create a filter BUTTON in static addDivToDom() in the User class above the loop. You will have scope issues if you make the filter form in the loop.

	const filterButton = document.createElement("button");
      	filterButton.innerText = "Filter Expenses over $100"
     	filterButton.id = "filterForm"
     	filterButton.type = "submit"

	filterForm.append(filterInput);
    	filterForm.append(filterButton);
      	div.appendChild(filterForm);

Append the filter button at the end of the function, above the div.appendChild(ul)

Next, add an event listener (in your listeners file!) according to the id of the button you set above.

	if (e.target.matches("#filterForm")) {
    		e.preventDefault();
   		filterExpense(e);
  	}
Then, create a function, probably in index.js, to filter the expense.

function filterExpense(e) {
  e.target.parentElement.querySelector('ul').remove();
  //wipe the ul from the div
  let users_id = parseInt(e.target.parentElement.querySelector('p').querySelector('button').dataset.userId);
  //get the user's id from the div
  let user = User.all_users.find(u => u.id === users_id);
  //find the user id from the div
  let expensesOver100 = user.expenses.filter(e => e.amount > 100);
  //array with all expenses over $100
  const ul = document.createElement("ul"); //create a ul

  expensesOver100.forEach(exp => {
    const li = document.createElement("li");
    li.innerHTML = `${exp.name}: $${exp.amount}`
    ul.appendChild(li);
    e.target.parentElement.appendChild(ul);
  }) //for each expense over 100, create an li, set the exp name and amount in the li, append it to the ul
  //and lastly append it to the div
}


Sort by Expense Name
In user.js, inside the first loop after all the const declarations, add these:

      const sortButton = document.createElement("button");
      sortButton.innerText = "Sort Alphabetically"
      sortButton.id = "sortButton"
      sortButton.type = "submit"

Add the end of the loop, add:

      div.append(sortButton);

Next, add the event listener:
if (e.target.matches("#sortButton")) {
    e.preventDefault();
    sortExpenses(e);
  }

Next, write the callback function:
function sortExpenses(e) {
  e.target.parentElement.querySelector('ul').remove();
  //wipe the ul from the div
  let users_id = parseInt(e.target.parentElement.querySelector('p').querySelector('button').dataset.userId);
  //get the user's id from the div
  let user = User.all_users.find(u => u.id === users_id);
  //find the user id from the div
  let sortedExpenses = user.expenses.map(exp => [exp.name, exp.amount]).sort();
  const ul = document.createElement("ul"); //create a ul
  sortedExpenses.forEach(exp => {
    const li = document.createElement("li");
    //li.innerHTML = `${exp.name}: $${exp.amount}`
    li.innerHTML = `${exp[0]}: $${exp[1]}`
    ul.appendChild(li);
    e.target.parentElement.appendChild(ul);
  }) //for each expense over 100, create an li, set the exp name and amount in the li, append it to the ul
  //and lastly append it to the div
}




AJAX

AJAX is the shortened version of "asynchronous JavaScript and XML," and it's the general way we make requests to the server without reloading the web page, and then work with data we receive from the server. 

We give the user HTML and CSS first, then JavaScript, behind the scenes, fills in the rest of the action we want the page to offer. There are a few different ways to do this technically, and next we'll take a look at one of the most efficient ways: fetch().

In AJAX, we deliver an initial engaging page using HTML and CSS which renders quickly, and then we use JS to add more to the DOM behind the scenes

Promise:
XMLHttpRequestObjects
JSON
Asynchronous input and output
The event loop
All this happens in fetch: this is a way to load additional data information after information is presented to the user


fetch(URL) => returns an object that represents what the data source sent back. Doesn’t return the actual content. We have to .then return the content in JSON because that’s what modern browsers can read, and then we call another .then whose object we can do DOM mani with.

Hey, do this thing. And then go do whatever maintenance you need: animate that gif, play some audio from SoundCloud, whatever. But when that first thing has an "I'm done" event, go back to it and do some work that I defined in a function when I called it.
