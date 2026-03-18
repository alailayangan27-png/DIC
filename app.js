let currentWallet = "";

function generate() {

  const name = document.getElementById("name").value || "No Name";
  const username = document.getElementById("username").value || "@unknown";
  const bio = document.getElementById("bio").value || "-";
  const skills = document.getElementById("skills").value || "-";
  const wallet = document.getElementById("wallet").value || "-";

  currentWallet = wallet;

  document.getElementById("cName").innerText = name;
  document.getElementById("cUser").innerText = username;
  document.getElementById("cBio").innerText = bio;
  document.getElementById("cSkills").innerText = "Skills: " + skills;
  document.getElementById("cWallet").innerText = wallet;

  const avatar = document.getElementById("avatar");
  avatar.innerText = name.charAt(0).toUpperCase();

  document.getElementById("card").classList.remove("hidden");

  // QR SOLANA FORMAT
  const qrData = wallet !== "-" ? `solana:${wallet}` : "No Wallet";

  QRCode.toCanvas(document.getElementById("qr"), qrData, function (error) {
    if (error) console.error(error);
  });
}

// Copy wallet
function copyWallet() {
  if (!currentWallet) return alert("Wallet kosong!");
  navigator.clipboard.writeText(currentWallet);
  alert("Wallet copied!");
}

// Download card
function download() {
  const card = document.getElementById("card");

  html2canvas(card).then(canvas => {
    const link = document.createElement("a");
    link.download = "lobstar-wallet.png";
    link.href = canvas.toDataURL();
    link.click();
  });
}
