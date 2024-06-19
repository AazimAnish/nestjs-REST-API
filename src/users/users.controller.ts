import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';

/**
 * Handles CRUD operations for users.
 */
@Controller('users')
export class UsersController {

    /**
     * Get users, optionally filtered by role.
     */
    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'SDE' | 'HR') {
        return [];
    }

    /**
     * Get a user by ID.
     */
    @Get(':id')
    findOne(@Param('id') id: string) {
        return { id };
    }

    /**
     * Create a user.
     */
    @Post() 
    create(@Body() user: any) {
        return user;
    }

    /**
     * Update a user by ID.
     */
    @Patch(':id')
    update(@Param('id') id: string, @Body() userUpdate: any) {
        return { id, ...userUpdate };
    }

    /**
     * Delete a user by ID.
     */
    @Delete(':id') 
    delete(@Param('id') id: string) {
        return { id };
    }
}