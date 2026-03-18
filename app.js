let qr;

function generateQR() {
  const name = document.getElementById("name").value.trim();
  const username = document.getElementById("username").value.trim();
  const bio = document.getElementById("bio").value.trim();
  const wallet = document.getElementById("wallet").value.trim();
  const logoFile = document.getElementById("logo").files[0];

  if (!wallet) {
    alert("Wallet address is required");
    return;
  }

  // Output data
  document.getElementById("outName").innerText = name || "Anonymous";
  document.getElementById("outUsername").innerText = username || "";
  document.getElementById("outBio").innerText = bio || "";
  document.getElementById("outWallet").innerText = wallet;

  document.getElementById("avatar").innerText =
    name ? name.charAt(0).toUpperCase() : "A";

  const qrContainer = document.getElementById("qr");
  qrContainer.innerHTML = "";

  let logoURL = "";
  if (logoFile) {
    logoURL = URL.createObjectURL(logoFile);
  }

  qr = new QRCodeStyling({
    width: 260,
    height: 260,
    data: wallet,
    image: logoURL,
    dotsOptions: {
      color: "#000",
      type: "rounded"
    },
    backgroundOptions: {
      color: "#ffffff"
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 6
    }
  });

  qr.append(qrContainer);

  document.getElementById("card").classList.remove("hidden");
}

function copyWallet() {
  const wallet = document.getElementById("outWallet").innerText;
  navigator.clipboard.writeText(wallet);
  alert("Wallet copied");
}

function downloadQR() {
  if (qr) {
    qr.download({ name: "wallet-qr", extension: "png" });
  }
}
