function generate() {

  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const bio = document.getElementById("bio").value;
  const skills = document.getElementById("skills").value;

  document.getElementById("cName").innerText = name;
  document.getElementById("cUser").innerText = username;
  document.getElementById("cBio").innerText = bio;
  document.getElementById("cSkills").innerText = "Skills: " + skills;

  document.getElementById("card").classList.remove("hidden");

  const data = `${name} | ${username} | ${bio}`;

  QRCode.toCanvas(document.getElementById("qr"), data);
}

function download() {

  const card = document.getElementById("card");

  html2canvas(card).then(canvas => {
    const link = document.createElement("a");
    link.download = "id-card.png";
    link.href = canvas.toDataURL();
    link.click();
  });

}
