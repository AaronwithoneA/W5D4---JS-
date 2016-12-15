class Clock {
  constructor() {
    this.date = new Date;
    this.seconds = this.date.getSeconds();
    this.minutes = this.date.getMinutes();
    this.hours = this.date.getHours();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }

  printTime() {
    let currentTime = `${this.hours}:${this.minutes}:${this.seconds}`;
    console.log(currentTime);
    // Format the time in HH:MM:SS
    // Use console.log to print it.
  }

  _tick() {
    if (this.seconds > 59) {
      this.minutes++;
      this.seconds = 0;
    }

    if (this.minutes > 59) {
      this.hours++;
      this.minutes = 0;
    }

    if (this.hour > 23) {
      this.hour = 0;
    }

    this.seconds++;
    this.printTime();
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}


const clock = new Clock();





// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
