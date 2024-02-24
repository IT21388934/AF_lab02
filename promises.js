function getPromise() {
  return new Promise((resolve, reject) => {
    const response = XMLHttpRequest();
    response.open("GET", url);
    response.send();
    response.onreadystatechange = function () {
      if (response.readyState === 4 && response.status === 200) {
        resolve(response.responseText);
      } else {
        reject("Error");
      }
    };
  });
}

function displayData(data) {
  console.log(data);
}

// getPromise("https://api.github.com/users/defunkt");
