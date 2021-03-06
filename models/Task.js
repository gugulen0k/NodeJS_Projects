import db from '../config/db.js';

class Task {
    constructor(id, name, completed) {
        this._id = id;
        this._name = name;
        this._completed = completed;
    }

    addNewTask() {
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();

        const createdAt = `${ year }-${ month <= 9 ? `0${month}` : month }-${ day <= 9 ? `0${day}` : day }`;

        const sqlQuery = "CALL AddNewTask(?, ?, ?, ?, ?);";
        const newTask = db.execute(
            sqlQuery,
            [
                this._id,
                this._name,
                this._completed,
                createdAt,
                createdAt
            ]
        );

        return newTask;
    }

    static findAll() {
        const sqlQuery = 'SELECT * FROM todos ORDER BY completed ASC, created_at DESC';
        return db.execute(sqlQuery)
    }

    static findById( id ) {
        const sqlQuery = 'CALL FindById( ? )';
        return db.execute(sqlQuery, [ id ])
    }

    static updateById( id, name, completed ) {
        console.log(id, name, completed === "true" ? 1 : 0)
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const updatedAt = `${ year }-${ month <= 9 ? `0${month}` : month }-${ day <= 9 ? `0${day}` : day }`;

        const sqlQuery = 'CALL UpdateById( ?, ?, ?, ? )';
        return db.execute(sqlQuery, [ id, name, completed === "true" ? 1 : 0, updatedAt ])
    }

    static deleteById( id ) {
        const sqlQuery = 'CALL DeleteById( ? )';
        return db.execute(sqlQuery, [ id ])
    }
}

export default Task;