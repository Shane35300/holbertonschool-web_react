// Interface Student
interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
  }

  // Création des deux étudiants
  const student1: Student = {
	firstName: 'John',
	lastName: 'Doe',
	age: 20,
	location: 'New York'
  };

  const student2: Student = {
	firstName: 'Jane',
	lastName: 'Smith',
	age: 22,
	location: 'Los Angeles'
  };

  // Stockage des étudiants dans un tableau
  const studentsList: Student[] = [student1, student2];

  // Création de la table dans le DOM
  const table = document.createElement('table');
  const tableHeader = table.createTHead();
  const headerRow = tableHeader.insertRow();
  const headers = ['First Name', 'Location'];

  headers.forEach(headerText => {
	const th = document.createElement('th');
	th.appendChild(document.createTextNode(headerText));
	headerRow.appendChild(th);
  });

  const tableBody = table.createTBody();
  studentsList.forEach(student => {
	const row = tableBody.insertRow();
	const firstNameCell = row.insertCell();
	const locationCell = row.insertCell();

	firstNameCell.appendChild(document.createTextNode(student.firstName));
	locationCell.appendChild(document.createTextNode(student.location));
  });

  document.body.appendChild(table);
