let qrCode;
let currentWallet = "";

function generateQR() {

  const wallet = document.getElementById("wallet").value.trim();
  const amount = document.getElementById("amount").value.trim();

  if (!wallet) {
    alert("Masukkan alamat wallet!");
    return;
  }

  currentWallet = wallet;

  document.getElementById("walletText").innerText = wallet;

  let qrData = `solana:${wallet}`;
  if (amount) qrData += `?amount=${amount}`;

  const qrContainer = document.getElementById("qr");
  qrContainer.innerHTML = "";

  qrCode = new QRCodeStyling({
    width: 320,
    height: 320,
    data: qrData,

    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Lobster_icon.svg/512px-Lobster_icon.svg.png",

    dotsOptions: {
      color: "#7c3aed",
      type: "rounded"
    },

    cornersSquareOptions: {
      type: "extra-rounded"
    },

    backgroundOptions: {
      color: "#ffffff"
    },

    imageOptions: {
      crossOrigin: "anonymous",
      margin: 8,
      imageSize: 0.25
    }
  });

  qrCode.append(qrContainer);

  document.getElementById("result").classList.remove("hidden");
}

// COPY
function copyWallet() {
  navigator.clipboard.writeText(currentWallet);
  alert("Wallet copied!");
}

// DOWNLOAD HD
function downloadQR() {
  if (!qrCode) {
    alert("Generate dulu!");
    return;
  }

  qrCode.download({
    name: "solana-qr-premium",
    extension: "png"
  });
}
