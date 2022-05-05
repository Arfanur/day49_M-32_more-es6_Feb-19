class TeamMember {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

class StudentCare extends TeamMember {
    buildARoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}

class NeptuneDev extends TeamMember {
    codeEditor;
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release App version', version);
    }
}

const aamir = new Support('Aamir Khan', 'BD', 11);
const salman = new Support('Solaiman Khan', 'Dubai', 4);
const sharuk = new Support('SRK Khan', 'Dubai', 9);
const akshay = new Support('Akshay Kumar', 'Dubai', 11);

const alia = new StudentCare('Alia Vatt', 'Mumbai');
const ash = new NeptuneDev('Ash', 'Mumbai', 'Android studio');

// console.log(aamir);
// console.log(alia);
// console.log(ash);

// alia.buildARoutine('Ranbir');
// aamir.startSession();
// ash.releaseApp('1.4.5');