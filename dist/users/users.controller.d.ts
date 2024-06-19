export declare class UsersController {
    findAll(role?: string): any[];
    findOne(id: string): {
        id: string;
    };
    create(user: any): any;
    update(id: string, userUpdate: any): any;
    delete(id: string): {
        id: string;
    };
}
