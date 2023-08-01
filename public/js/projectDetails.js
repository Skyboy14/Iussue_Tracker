

// data from ejs to js file
const dataFromServer = document.getElementById("dataFromServer");
const dataParse = JSON.parse(dataFromServer.value);



// Function to display issues after filtering
const bugDisplay = document.getElementById("bugSection");
function sortFunction(arr) {
  bugDisplay.innerHTML = "";

  // If there is no array just display notification else print the issues
  if (arr.length > 0) {
    for (i = 0; i < arr.length; i++) {
      let addElement = document.createElement("div");
      addElement.className = "bugCard";
      let filteredItem = `
            <div class="bugCardtitle">Title: <span class="name">${arr[i].title}</span></div>
            <div class="bugCardtitle">Description: <span> ${arr[i].description}</span></div>
            <div class="bugCardtitle">Label: <span> ${arr[i].label}</span></div>
            <div class="bugCardtitle">Author: <span> ${arr[i].issueAuthor}</span></div>
            `;
      addElement.innerHTML = filteredItem;
      bugDisplay.append(addElement);
    }
  } else {
    let addElement = document.createElement("div");
    addElement.className = "bugCardnoIssueFound";
    addElement.innerHTML = "<h2>No Bug Listed</h2>";
    bugDisplay.append(addElement);
  }
}



// Filter Issue by searching by title or description
const searchBtn = document.getElementById("searchButton")
searchBtn.addEventListener("click", function () {
  const searchValue = document.getElementById("searchBar").value.toLowerCase().trim()
  const filtered = dataParse.issues.filter((issue) => issue.title.toLowerCase().includes(searchValue) || issue.description.toLowerCase().includes(searchValue))
  sortFunction(filtered)
})


// Filter Issue by Author
const filterBtnByAuthor = document.getElementById("filterButtonByAuthor");
filterBtnByAuthor.addEventListener("click", function () {
  const optionValue = document.getElementById("label");
  const author = dataParse.issues.filter(
    (issue) => issue.issueAuthor === optionValue.value
  );
  sortFunction(author);
});




// Filter Issue by Label
const filterBtn = document.getElementById("filterButton");
filterBtn.addEventListener("click", function () {
  const filteredArr = [];

  const checkBoxes = document.querySelectorAll("input[type='checkbox']");

  for (let i = 0; i < checkBoxes.length; i++) {
    if (checkBoxes[i].checked) {
      console.log(checkBoxes[i].checked);
      for (let j = 0; j < dataParse.issues.length; j++) {
        if (dataParse.issues[j].label === checkBoxes[i].value) {
          filteredArr.push(dataParse.issues[j]);
        }
      }
    }
  }
  sortFunction(filteredArr);
});






