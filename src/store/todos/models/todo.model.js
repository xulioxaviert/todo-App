export class Todo {
  /**
   *
   * @param {String} description
   * Obligatoria la descripción de la tarea
   */
  constructor(description) {
    this.id = 1;
    this.description = description;
    this.done = false;
    this.createdAt = new Date();
  }
}
