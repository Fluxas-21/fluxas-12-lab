document.getElementById("saveButton").addEventListener("click", function () {
    const formData = {
      name: document.getElementById("name").value,
      surname: document.getElementById("surname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      address: document.getElementById("address").value,
      features: [
        Number(document.getElementById("feature1").value),
        Number(document.getElementById("feature2").value),
        Number(document.getElementById("feature3").value),
        Number(document.getElementById("feature4").value),
        Number(document.getElementById("feature5").value),
      ],
    };
  
    // checks
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert("Incorrect email adress!");
      return;
    }
  
    if (!/^\+?[0-9\s\-]+$/.test(formData.phone)) {
      alert("Incorrect phone number!");
      return;
    }
  
    if (formData.address.trim() === "") {
      alert("Adress can't be empty!");
      return;
    }
  
    const avgFeature = (
      formData.features.reduce((sum, val) => sum + val, 0) / formData.features.length
    ).toFixed(2);
  
    // terminal output
    console.log(formData);
  
    // website output
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `
      <p>Name: ${formData.name}</p>
      <p>Surname: ${formData.surname}</p>
      <p>Email adress: ${formData.email}</p>
      <p>Phone number: ${formData.phone}</p>
      <p>Adress: ${formData.address}</p>
      <p>Feature average: <span style="color: ${
        avgFeature > 4 ? "green" : avgFeature > 2 ? "orange" : "red"
      };">${avgFeature}</span></p>
    `;
  });
  