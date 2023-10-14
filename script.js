const names = [
  "Ayla",
  "Jake",
  "Sean",
  "Henry",
  "Brad",
  "Stephen",
  "Taylor",
  "Timmy",
  "Cathy",
  "John",
  "Amanda",
  "Amara",
  "Sam",
  "Sandy",
  "Danny",
  "Ellen",
  "Camille",
  "Chloe",
  "Emily",
  "Nadia",
  "Mitchell",
  "Harvey",
  "Lucy",
  "Amy",
  "Glen",
  "Peter",
];

const input = document.querySelector(".text-input");
const listContainer = document.querySelector(".list-container");

input.addEventListener("keyup", async () => {
  const results = await returnFilterList();
  generateUi(results);
});

async function returnFilterList() {
  const results = input.value;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        results
          ? names.filter((name) =>
              name.toLowerCase().includes(input.value.toLowerCase())
            )
          : []
      );
    }, 500);
  });
}

function generateUi(results) {
  if (results.length) {
    listContainer.innerHTML = results
      .map((result) => {
        return `<div class="list"><h3>${result}</h3> </div>`;
      })
      .join("");
  } else {
    removeElements();
  }

  const list = document.querySelectorAll(".list");

  list.forEach((l) => {
    l.addEventListener("click", () => {
      console.log(l.value);
    });
  });
}

function removeElements() {
  const list = document.querySelectorAll(".list");
  list.forEach((list) => list.remove());
}
