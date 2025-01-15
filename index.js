// HTML:
// <form id="exampleForm">
//   Надрукуйте ім'я<input type='text' name="name" value="name"><br>
//   Надрукуйте email<input type='text' name="email" value="name@at.ua"><br>
//   Надрукуйте дійсне число<input type='text' name="number" value="12.3"><br>
//   <button type="button" id="submitButton">Submit</button>
// </form>

// JavaScript:

// Функція для створення контрольної суми
function calculateChecksum(data) {
  let checksum = 0;
  for (let i = 0; i < data.length; i++) {
    checksum += data.charCodeAt(i);
  }
  return checksum;
}

// Обробник для кнопки надсилання
function handleSubmit() {
  const form = document.getElementById('exampleForm');
  const secret = "2315765"; // Секретне слово

  // Збір даних форми
  const formData = new FormData(form);
  const formEntries = Array.from(formData.entries());

  // Формування рядка запиту
  let queryString = formEntries.map(([key, value]) => `${key}=${value}`).join('&');
  queryString += `&secret=${secret}`;

  // Обчислення контрольної суми
  const checksum = calculateChecksum(queryString);

  console.log("Query String:", queryString);
  console.log("Checksum:", checksum);

  // Можна виконати додаткові дії, наприклад, надіслати ці дані на сервер
}

// Прив'язка обробника до кнопки
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', handleSubmit);
