const copyBtn = document.querySelector("button");
const textarea = document.querySelector("textarea");

copyBtn.addEventListener("click", () => {
  const textValue = textarea.value;
  textarea.select();
  navigator.clipboard.writeText(textValue);

  copyBtn.innerText = "Copied";
  copyBtn.style.backgroundColor = "#b3e5fc";

  setTimeout(() => {
    copyBtn.innerText = "Copy";
    copyBtn.style.backgroundColor = "#03a9f4";
  }, 1500);
});
