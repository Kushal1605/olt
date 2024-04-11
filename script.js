const ansArr = window.parent.a.secQuesMap[1];
let map = {};
let ans = {};

for (let i = 0; i < ansArr.length; i += 1) {
  setTimeout(() => {
    map[i] = document
      .getElementsByTagName("frameset")[0]
      .children[0]
      .contentWindow.document
      .querySelectorAll("input");
    
    ans[i] = ansArr[i][3];
    const radios = map[i];

    for (let j = 0; j < radios.length; j++) {
      if (ans[i] == radios[j].value) {
        radios[j].checked = true;
        window.parent.a.next("SAVE");
        break;
      }
    }
  }, i * 1000);
}
