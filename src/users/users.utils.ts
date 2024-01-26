import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export const utils = {
  findOne: {
    path: ':id',
    operation: { summary: 'Get user by ID' },
    param: { name: 'id', description: 'User ID' },
    response200: {
      status: 200,
      description: 'The user found successfully',
    },
    response404: { status: 404, description: 'User not found' },
  },
  update: {
    path: ':id',
    operation: { summary: 'Update user by ID' },
    param: { name: 'id', description: 'User ID' },
    body: {
      description: 'Update user data',
      type: UpdateUserDto,
    },
    response200: {
      status: 200,
      description: 'The user was updated successfully',
    },
    response404: { status: 404, description: 'User not found' },
  },
  remove: {
    path: ':id',
    operation: { summary: 'Remove user by ID' },
    param: { name: 'id', description: 'User ID' },
    response200: {
      status: 200,
      description: 'The user was removed successfully',
    },
    response404: { status: 404, description: 'User not found' },
  },
  create: {
    path: '',
    operation: { summary: 'Create a new user' },
    body: {
      description: 'Create user data',
      type: CreateUserDto,
    },
    response201: {
      status: 201,
      description: 'The user was created successfully',
    },
  },
  findAll: {
    path: '',
    operation: { summary: 'Get all users' },
    response200: {
      status: 200,
      description: 'Successfully retrieved all users',
    },
  },
};
