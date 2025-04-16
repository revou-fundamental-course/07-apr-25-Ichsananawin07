function replaceName(){
let name = prompt("Halo siapakah nama anda?", "");
document.getElementById("name").innerHTML = name;
}
replaceName();

function validateForm() {

    const name = document.forms["message-form"]["full-name"].value;
    const birthDate = document.forms["message-form"]["birth-date"].value;
    const gender = document.forms["message-form"]["gender"].value;
    const message = document.forms["message-form"]["messages"].value;

    if (!name ||  !birthDate || !gender || !message) {
      alert("Semua field harus diisi!");
      return false;
    }

    setSenderUI(name, birthDate, gender, message);
    return true;
  }

  function setSenderUI(name, birthDate, gender, messages) {
    const displayArea = document.getElementById("sender-data");

    displayArea.innerHTML = `
      <h3>Data Pengirim</h3>
      <p><strong>Nama:</strong> ${name}</p>
      <p><strong>Tanggal Lahir:</strong> ${birthDate}</p>
      <p><strong>Jenis Kelamin:</strong> ${gender}</p>
      <p><strong>Pesan:</strong> ${messages}</p>
      `
    ;
  }
  document.getElementById("message-form").addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
})

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
