export declare class UsersController {
    findAll(role?: 'INTERN' | 'SDE' | 'HR'): any[];
    findOne(id: string): {
        id: string;
    };
    create(user: any): any;
    update(id: string, userUpdate: any): any;
    delete(id: string): {
        id: string;
    };
}
