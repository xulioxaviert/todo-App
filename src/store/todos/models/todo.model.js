import { v7 as uuid } from 'uuid';

export class Todo
{
  /**
   *
   * @param {String} description
   * Obligatoria la descripción de la tarea
   */
  constructor(description) {
    this.id = uuid();
    this.description = description;
    this.done = false;
    this.createdAt = new Date();
  }
}
