const selectMenu = document.querySelectorAll("select");
const currentTimeDisplay = document.querySelector(".time");
const setAlarmBtn = document.querySelector("button");

const alarmSettings = document.querySelector(".alarmSettings");

let alarmTime,
  isAlarmSet = false;
const ringtone = new Audio("./files/ringtone.mp3");

for (let i = 23; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  const option = `<option value="${i}">${i}</option>`;
  selectMenu[0].firstElementChild.insertAdjacentHTML("afterend", option);
}

for (let i = 59; i >= 0; i--) {
  i = i < 10 ? "0" + i : i;
  const option = `<option value="${i}">${i}</option>`;
  selectMenu[1].firstElementChild.insertAdjacentHTML("afterend", option);
}

setInterval(() => {
  const time = new Date();
  let h = time.getHours();
  let m = time.getMinutes();
  let s = time.getSeconds();
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  currentTimeDisplay.innerText = `${h}:${m}:${s}`;

  if (alarmTime === `${h}:${m}`) {
    ringtone.play();
    ringtone.loop = true;
  }
}, 1000);

setAlarmBtn.addEventListener("click", () => {
  alarmTime = `${selectMenu[0].value}:${selectMenu[1].value}`;
  if (alarmTime.includes("Hour") || alarmTime.includes("Minute")) {
    return alert("زمان هشدار را به درستی انتخاب کنید!");
  }
  checkAlarmState();
});

function checkAlarmState() {
  if (!isAlarmSet) {
    alarmSettings.classList.add("disabled");
    setAlarmBtn.innerText = "Clear Alarm";
    isAlarmSet = true;
  } else {
    alarmSettings.classList.remove("disabled");
    alarmTime = '';
    ringtone.pause();
    setAlarmBtn.innerText = "Set Alarm";
    isAlarmSet = false;
  }
}

