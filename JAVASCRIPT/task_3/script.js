class Time {
    constructor(hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
    }

    displayTime() {
        console.log(`Time: ${this.hours}:${this.minutes}:${this.seconds}`);
    }

    changeSeconds(seconds) {
        this.seconds += seconds;
        this.adjustTime();
    }

    changeMinutes(minutes) {
        this.minutes += minutes;
        this.adjustTime();
    }

    changeHours(hours) {
        this.hours += hours;
        this.adjustTime();
    }

    adjustTime() {
        let extraMinutes = Math.floor(this.seconds / 60);
        this.seconds %= 60;
        this.minutes += extraMinutes;

        let extraHours = Math.floor(this.minutes / 60);
        this.minutes %= 60;
        this.hours += extraHours;

        this.hours %= 24;
    }
}

const time = new Time(10, 30, 45);

console.log("Initial Time:");
time.displayTime();

time.changeSeconds(30);
console.log("Time after adding 30 seconds:");
time.displayTime();

time.changeMinutes(15);
console.log("Time after adding 15 minutes:");
time.displayTime();

time.changeHours(2);
console.log("Time after adding 2 hours:");
time.displayTime();
