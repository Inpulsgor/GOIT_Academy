class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = document.querySelector(selector);
    this.targetDate = targetDate.getTime();
    this.days = this.selector.querySelector('[data-value="days"]');
    this.hours = this.selector.querySelector('[data-value="hours"]');
    this.mins = this.selector.querySelector('[data-value="mins"]');
    this.secs = this.selector.querySelector('[data-value="secs"]');
    this.timeChange();
    this.timeLine();
  }

  timeLine() {
    let now = Date.now();
    let time = this.targetDate - now;
    if (now >= this.targetDate) {
      this.currentTime(0);
      return;
    }
    this.currentTime(time);
  }

  timeChange() {
    let timer = setInterval(() => {
      let now = Date.now();
      let time = this.targetDate - now;
      this.currentTime(time);
      if (now >= this.targetDate) {
        this.currentTime(time);
        this.currentTime(0);
        return;
      }
    }, 1000);
  }

  currentTime(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.showData(days, hours, mins, secs);
  }

  showData(day, hour, min, sec) {
    this.days.innerText = this.pad(day);
    this.hours.innerText = this.pad(hour);
    this.mins.innerText = this.pad(min);
    this.secs.innerText = this.pad(sec);
  }

  pad(text) {
    return String(text).padStart(2, "0");
  }
}

const timeCounter = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2025"),
});
