function handleSubmit(event) {
  event.preventDefault();

  // check what text was put into the form field
  let formText = document.getElementById("name").value;
  console.log("::: Form Submitted :::");
  app.checkForName(formText);

  const body = { text: formText };
  console.log("REQUEST BODY: " + JSON.stringify(body));
  fetch("http://localhost:8080/test", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  })
    .then((res) => res.json())
    .then((res) => {
      document.getElementById("results").value = JSON.stringify(
        res
      );
    });
}

export { handleSubmit };
