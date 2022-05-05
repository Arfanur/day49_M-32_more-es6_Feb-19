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
        console.log(this.name, 'Start a Support Session');
    }
}

class StudentCare extends TeamMember {
    buildRoutine(student) {
        console.log(this.name, 'Build a routine for', student);
    }
}

class NeptuneDev extends TeamMember{
    codeEditor;
    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'Release App Version', version);
    }
}

const amir = new Support('Aamir Khan', 'Mumbai', 8);
const alia = new StudentCare('Alia Vaat', 'Chennai');
const ash = new NeptuneDev('ASH', 'Bangalor', 'Android Studio');

// console.log(amir);
// console.log(alia);
console.log(ash);

// amir.startSession();
// alia.buildRoutine('Ranobir');
ash.releaseApp('1.4.5');