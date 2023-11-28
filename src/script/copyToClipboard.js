let text = "thomas.sauvage2003@yahoo.fr";
let alert = document.querySelector(".alert");
const copyContent = async () => {
  try {
    await navigator.clipboard.writeText(text);
    alert.style.display = "block";
    alert.style.tansition = "all 0.2s ease-in-out";

    setTimeout(function() {
      alert.style.display = "none";
      alert.style.tansition = "all 0.9s ease-in-out";
    }, 1000);

    console.log('Copied to clipboard!');
  } catch (err) {
    console.error('Failed to copy: ', err);
  }
}