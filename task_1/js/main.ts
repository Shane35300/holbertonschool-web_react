interface Teacher {
	firstName: string;
	lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}
interface Directors extends Teacher {
	numberOfReports: number;
}
const teacher3: Teacher = {
firstName: 'John',
fullTimeEmployee: false,
lastName: 'Doe',
location: 'London',
contract: false,
};
const director1: Directors = {
firstName: 'John',
lastName: 'Doe',
location: 'London',
fullTimeEmployee: true,
numberOfReports: 17,
};
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}
const printTeacher: printTeacherFunction = (firstName: string, lastName: string): string => {
	return `${firstName[0]}. ${lastName}`;
}
console.log(printTeacher("Shane", "Vaudrey"));
