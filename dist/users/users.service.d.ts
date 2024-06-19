export declare class UsersService {
    private users;
    findAll(role?: 'INTERN' | 'SDE' | 'HR'): {
        id: number;
        name: string;
        email: string;
        role: string;
    }[];
    findOne(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    create(user: {
        name: string;
        email: string;
        role: 'INTERN' | 'SDE' | 'HR';
    }): {
        name: string;
        email: string;
        role: 'INTERN' | 'SDE' | 'HR';
        id: any;
    };
    update(id: number, updatedUser: {
        name?: string;
        email?: string;
        role?: 'INTERN' | 'SDE' | 'HR';
    }): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    delete(id: number): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
}
