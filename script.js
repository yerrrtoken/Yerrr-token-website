const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

menuButton?.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

const copyButton = document.getElementById("copyContract");
const contract = document.getElementById("contract");

copyButton?.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(contract.textContent.trim());
    const original = copyButton.textContent;
    copyButton.textContent = "Copied!";
    setTimeout(() => {
      copyButton.textContent = original;
    }, 2000);
  } catch (err) {
    alert("Unable to copy.");
  }
});

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
