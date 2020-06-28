export class TodoItem {
	constructor(name, completed = false) {
		this.name = name;
		this.completed = completed;
		this.id = Math.random()
	}

	togle() {
		this.completed = !this.completed
	}
};