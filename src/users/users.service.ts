import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    private users = [
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@doe.jhn",
            "role": "INTERN",
        },
        {
            "id": 2,
            "name": "Jane Smith",
            "email": "jane@smith.jhn",
            "role": "SDE",
        },
        {
            "id": 3,
            "name": "Alice Johnson",
            "email": "alice@johnson.jhn",
            "role": "HR",
        },
        {
            "id": 4,
            "name": "Bob Brown",
            "email": "bob@brown.jhn",
            "role": "SDE",
        },
        {
            "id": 5,
            "name": "Charlie Davis",
            "email": "charlie@davis.jhn",
            "role": "INTERN",
        }
    ];

    findAll(role?: 'INTERN' | 'SDE' | 'HR') {
        if (role) {
            return this.users.filter(user => user.role === role);
        }
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);

        return user;
    }

    create(user: { name: string, email: string, role: 'INTERN' | 'SDE' | 'HR' }) {
        const userByHighestId = [...this.users].sort((a, b) => b.id - a.id)[0];
        const newUserId = {
            id: userByHighestId[0].id + 1,
            ...user
        }
        this.users.push(newUserId);
        return newUserId;
    }

    update(id: number, updatedUser: { name?: string, email?: string, role?: 'INTERN' | 'SDE' | 'HR' }) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUser };
            }
            return user;
        })
        return this.findOne(id);
    }

    delete(id: number) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
}
