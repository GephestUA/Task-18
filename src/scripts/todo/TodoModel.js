export class TodoModel {
	constructor () {
		this.state = [];
	}

	addTodo(todo) {
		this.state.push(todo)
	}

	removeTodoById(id) {
		this.state = this.state.filter(todo => todo.id !== id);
	}

	updateNameById(id,name) {
		const todo = this.state.find(todo => todo.id === id);
		if (todo) {
			todo.name = name;
		}
	}

	toggleCompleted(id) {
		const todo = this.state.find(todo => todo.id === id);
		if(todo) {
			todo.togle()
		}
	}

	getState() {
		return this.state;
	}
};