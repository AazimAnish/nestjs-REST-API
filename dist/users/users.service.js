"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
        this.users = [
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
    }
    findAll(role) {
        if (role) {
            return this.users.filter(user => user.role === role);
        }
        return this.users;
    }
    findOne(id) {
        const user = this.users.find(user => user.id === id);
        return user;
    }
    create(user) {
        const userByHighestId = [...this.users].sort((a, b) => b.id - a.id)[0];
        const newUserId = {
            id: userByHighestId[0].id + 1,
            ...user
        };
        this.users.push(newUserId);
        return newUserId;
    }
    update(id, updatedUser) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updatedUser };
            }
            return user;
        });
        return this.findOne(id);
    }
    delete(id) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map