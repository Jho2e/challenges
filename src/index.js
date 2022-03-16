const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const christmasEve = new Date(2022, 11, 25, 0, 0, 0);
  const now = new Date();
  const remain = christmasEve - now;

  /* Date - Date 를 했을 때 나오는 숫자의 의미는
    " XXXXXXXXXXX초.XXX밀리초 "이다
    이것을 아래처럼 하면 일,시간,분,초 로 변환할 수 있다.
  */

  const days = Math.floor(remain / day);
  const hours = Math.floor((remain % day) / hour);
  const minutes = Math.floor((remain % hour) / minute);
  const seconds = Math.floor((remain % minute) / second);

  clockTitle.innerText = `${days}d:${hours}h:${minutes}m:${seconds}s`;
}

getClock();
setInterval(getClock, 1000);
