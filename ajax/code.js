// Das ist ein JavaScrip Objekt
// const users = [
//   {
//     name: "Kim",
//     tel: "0002223333",
//     email: "kim@gmail.com",
//   },
//   {
//     name: "Tom",
//     tel: "000444455555",
//     email: "tom@gmail.com",
//   },
//   {
//     name: "Lisa",
//     tel: "000111144444",
//     email: "lisa@gmail.com",
//   },
// ];

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => {
//     console.log(json);

//     console.log(json);
//     users.forEach((user) => {
//       const userContainer = document.createElement("div");
//       userContainer.innerHTML = `<ul><li>Name: ${user.name}</li><li>Tel: ${user.tel}</li><li>Email: ${user.email}</li></ul>`;
//       document.querySelector(".container").appendChild(userContainer);
//     });
//   });

getData();
async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  data.forEach((contact) => {
    const contactCard = document.createElement("ul");
    contactCard.classList.add("contact-card");
    contactCard.innerHTML = `
    <li><span class="id"> Id: ${contact.id}</span></li>
    <img src="https://robohash.org/${contact.username}">
    <li>Username: <span class="bolded">${contact.username}</span></li>
    <li>Name: ${contact.name}</li>
    <li>Phone: ${contact.phone}</li>
    <li>Email: ${contact.email}</li>
    <li>Webseite: <a target="_blank" href="https://${contact.website}">${contact.name}</li>
    `;

    document.querySelector(".container").appendChild(contactCard);
  });
}
