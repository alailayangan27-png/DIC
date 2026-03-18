let qr;

function generate() {
  const name = document.getElementById("name").value;
  const username = document.getElementById("username").value;
  const bio = document.getElementById("bio").value;
  const wallet = document.getElementById("wallet").value;
  const logoInput = document.getElementById("logo");

  document.getElementById("outName").innerText = name;
  document.getElementById("outUser").innerText = username;
  document.getElementById("outBio").innerText = bio;
  document.getElementById("outWallet").innerText = wallet;

  document.getElementById("avatar").innerText = name.charAt(0);

  const qrDiv = document.getElementById("qr");
  qrDiv.innerHTML = "";

  let logoURL = "";

  if (logoInput.files[0]) {
    logoURL = URL.createObjectURL(logoInput.files[0]);
  }

  qr = new QRCodeStyling({
    width: 250,
    height: 250,
    data: wallet,
    image: logoURL,
    dotsOptions: {
      color: "#000",
      type: "rounded"
    },
    backgroundOptions: {
      color: "#fff"
    },
    imageOptions: {
      crossOrigin: "anonymous",
      margin: 5
    }
  });

  qr.append(qrDiv);

  document.getElementById("card").classList.remove("hidden");
}

function copyWallet() {
  const wallet = document.getElementById("wallet").value;
  navigator.clipboard.writeText(wallet);
  alert("Copied!");
}

function download() {
  qr.download({ name: "wallet-qr", extension: "png" });
}
