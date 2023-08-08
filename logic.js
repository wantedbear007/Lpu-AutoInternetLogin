const performAction = async () => {
    document.getElementById("agreepolicy").click();
};

switch (window.location.hostname) {
  case "http://10.10.0.1/":
    performAction();
    break;

  case "https://internet.lpu.in/24online/webpages/client.jsp":
    performAction();
    break


  case "https://internet.lpu.in/24online/webpages/client.jsp":
    performAction();

    // document.body.innerHTML = performAction();
    console.log("working");
    break;

  case "internet.lpu.in":
    // document.body.innerHTML = performAction();
    performAction();

    console.log("working");
    break;
}
