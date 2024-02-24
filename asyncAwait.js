async function getData(url) {
  try {
    const response = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      response.onreadystatechange = function () {
        if (response.readyState === 4 && response.status === 200) {
          resolve(response.responseText);
        } else {
          reject("Error");
        }
      };
      response.open("GET", url);
      response.send();
    });
  } catch (error) {
    console.log(error);
  }
}

function displayData(data) {
  console.log(data);
}

getData("https://api.github.com/users/defunkt").then(displayData);
