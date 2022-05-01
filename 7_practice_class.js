class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'Start a Support Session');
    }
}

const aamir = new Support('Aamir Khan', 'America');
const salman = new Support('Solaiman Khan', 'Canada');
const shahRukh = new Support('ShahRukh Khan', 'Dubai');
aamir.startSession();
salman.startSession();
shahRukh.startSession();

console.log(aamir, salman, shahRukh);