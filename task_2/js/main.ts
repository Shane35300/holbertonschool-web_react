// Interface DirectorInterface
interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

// Interface TeacherInterface
interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

// Classe Director qui implémente l'interface DirectorInterface
class Director implements DirectorInterface {
	workFromHome(): string {
		return 'Working from home';
	}
	getCoffeeBreak(): string {
		return 'Getting a coffee break';
	}
	workDirectorTasks(): string {
		return 'Getting to director tasks';
	}
}

// Classe Teacher qui implémente l'interface TeacherInterface
class Teacher implements TeacherInterface {
	workFromHome(): string {
		return 'Cannot work from home';
	}
	getCoffeeBreak(): string {
		return 'Cannot have a break';
	}
	workTeacherTasks(): string {
		return 'Getting to work';
	}
}

// Fonction createEmployee qui retourne soit un Director, soit un Teacher
function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500) {
		return new Teacher();
	} else {
		return new Director();
	}
}
function isDirector(employee: Director | Teacher): employee is Director {
	return employee instanceof Director;
}
function executeWork(employee: Director | Teacher): void {
	if(isDirector(employee)) {
		console.log(employee.workDirectorTasks());
	} else {
		console.log(employee.workTeacherTasks());
	}
}
type Subjects = "Math" | "History";
function teachClass(todayClass: Subjects): string {
	if(todayClass === "Math") {
		return 'Teaching Math';
	} else {
		return 'Teaching History';
	}
}
console.log(teachClass("Math"));
console.log(teachClass("History"));
