export class User {
    
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    password: string;
    is_active: boolean;
    is_staff: boolean;
    date_joined: Date;

    constructor(id, email, first_name, last_name, password, is_active, is_staff, date_joined) {
        this.id = id;
        this.email = email;
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.is_active = is_active;
        this.is_staff = is_staff;
        this.date_joined = date_joined;
    }
}