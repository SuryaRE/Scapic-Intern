export class  User {
    _id: String;
    password: string;
    name: String;
    username: String;
    email: String;

    constructor(id: String, password: string, name: String, username: String,  email: String) {
        this._id = id;
        this.password = password;
        this.name = name;
        this.email = email;
        this.username = username;
    }
}

