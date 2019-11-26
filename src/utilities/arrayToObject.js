// https://medium.com/dailyjs/rewriting-javascript-converting-an-array-of-objects-to-an-object-ec579cafbfc7
/// ---Input---
/// const peopleArray = [
///   { id: 123, name: "dave", age: 23 },
///   { id: 456, name: "chris", age: 23 },
///   { id: 789, name: "bob", age: 23 },
///   { id: 101, name: "tom", age: 23 },
///   { id: 102, name: "tim", age: 23 }
/// ]
///
/// ---Output---
/// const peopleObject = {
///   "123": { id: 123, name: "dave", age: 23 },
///   "456": { id: 456, name: "chris", age: 23 },
///   "789": { id: 789, name: "bob", age: 23 },
///   "101": { id: 101, name: "tom", age: 23 },
///   "102": { id: 102, name: "tim", age: 23 }
/// }
const arrayToObject = (array, keyField) =>
	array.reduce((obj, item) => {
		const o = obj;
		o[item[keyField]] = item;
		return obj;
	}, {});

export default arrayToObject;
