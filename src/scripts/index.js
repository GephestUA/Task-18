import '../styles/index.scss';

import { TodoModel } from './todo/TodoModel';
import { TodoView } from './todo/TodoView';
import { TodoController } from './todo/TodoController';


let model = new TodoModel();
let view = new TodoView(
	model,
	document.getElementById('todo-container')
);

const control = new TodoController(model,view);
