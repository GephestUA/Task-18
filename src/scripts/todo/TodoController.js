import { TodoItem } from './TodoItem'

export class TodoController {
	constructor (model,view) {
		this.model = model;
		this.view = view;
		this.view.render()

		this.view.subscribe(({name, type, id}) => {
			if(type === 'add') {
				model.addTodo(new TodoItem(name))
			} else if(type === 'remove') {
				model.removeTodoById(id)
			} else if (type === 'update') {
				model.toggleCompleted(id);
			}

			this.view.render()
		});
	}
}