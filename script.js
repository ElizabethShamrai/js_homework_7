'use script';
const askUserHours = +prompt('Количество часов?', '');
const seconds = (askUserHours * 3600);
alert(`${seconds} секунды`);