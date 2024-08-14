import $ from "jquery";
import _ from 'lodash';

$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append(`<p id='count'></p>`);
$('body').append('Copyright - Holberton School');

let count = 0;
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

// Utiliser la fonction debounce de Lodash
$('button').on('click', _.debounce(updateCounter, 500));
