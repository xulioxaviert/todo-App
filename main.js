import todoStore from './src/store/todo.store';
import { App } from './src/store/todos/app';
import './style.css';

todoStore.initStore();
App('#app');
