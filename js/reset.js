function reset_action() {
  nohit.innerText = "";
  searchWord.value = "";
}

const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", reset_action);
