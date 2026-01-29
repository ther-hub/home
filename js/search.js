const hitWord = [
  "page",
  [
    "koishi",
    ["koishi", "koisi", "こいし", "古明地こいし", "こめいじこいし"],
    "touhou",
    ["touhou", "toho", "東方", "東方project", "東方プロジェクト"],
    "a7rm5",
    ["α7rm5", "アルファセブンマークファイブ"],
  ],
  "Games1",
  [
    "pay-to-frame",
    ["paytoframe", "pay-to-frame", "ペイトゥフレーム"],
    "test",
    ["test"],
  ],
];

// for (let dires = 0; dires < hitWord.length; dires += 2) {
//   for (
//     let filenames = 0;
//     filenames < hitWord[dires + 1].length;
//     filenames += 2
//   ) {
//     for (const word of hitWord[dires + 1][filenames + 1]) {
//       console.log(word);
//     }
//   }
// }

function search_action() {
  let searchWordValue = searchWord.value;
  for (let dires = 0; dires < hitWord.length; dires += 2) {
    for (
      let filenames = 0;
      filenames < hitWord[dires + 1].length;
      filenames += 2
    ) {
      for (
        let word = 0;
        word < hitWord[dires + 1][filenames + 1].length;
        word++
      ) {
        if (
          hitWord[dires + 1][filenames + 1].includes(
            searchWordValue.toLowerCase(),
          )
        ) {
          return (window.location.href = `https://ther-hub.github.io/${hitWord[dires]}/${hitWord[dires + 1][filenames]}.html`);
        }
      }
    }
  }
  return (nohit.innerText =
    searchWordValue != ""
      ? `「  ${searchWordValue}  」はヒットしませんでした。`
      : `空白はヒットしませんよ。`);
}

// function search_action() {
//   let searchWordValue = searchWord.value;
//   for (const [page, words] of Object.entries(hitWord)) {
//     if (words.includes(searchWordValue.toLowerCase())) {
//       return (window.location.href = `./page/${page}.html`);
//     }
//   }
//   return (nohit.innerText =
//     searchWordValue != ""
//       ? `「  ${searchWordValue}  」はヒットしませんでした。`
//       : `空白はヒットしませんよ。`);
// }

const searchWord = document.getElementById("search-word");

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener("click", search_action);

const nohit = document.getElementById("no-hit");

