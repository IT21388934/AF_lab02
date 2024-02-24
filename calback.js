function fetchData(url, callback) {
  const response = XMLHttpRequest();

  response.onreadystatechange = function () {
    if (response.readyState === 4 && response.status === 200) {
      callback(response.responseText);
    }
  };
  response.open("GET", url);
  response.send();
}

function displayData(data) {
  console.log(data);
}

// fetchData("https://api.github.com/users/defunkt", displayData);
