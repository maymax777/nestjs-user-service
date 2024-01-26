import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { utils } from './users.utils';
import Response from 'src/common/dto/response.dto';
import { User } from './entities/user.entity';

@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(utils.findOne.path)
  @ApiOperation(utils.findOne.operation)
  @ApiParam(utils.findOne.param)
  @ApiResponse(utils.findOne.response200)
  @ApiResponse(utils.findOne.response404)
  async findOne(@Param('id') id: string): Promise<Response<User>> {
    try {
      const user = await this.usersService.findOne(+id);
      return {
        data: user,
        message: 'Found user successfully',
        success: true,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to retrieve users',
        success: false,
        error: error.message || 'Internal Server Error',
      };
    }
  }

  @Patch(utils.update.path)
  @ApiOperation(utils.update.operation)
  @ApiParam(utils.update.param)
  @ApiBody(utils.update.body)
  @ApiResponse(utils.update.response200)
  @ApiResponse(utils.update.response404)
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<Response<User>> {
    try {
      const user = await this.usersService.update(+id, updateUserDto);
      return {
        data: user,
        message: 'User updated successfully',
        success: true,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to update user',
        success: false,
        error: error.message || 'Internal Server Error',
      };
    }
  }

  @Delete(utils.remove.path)
  @ApiOperation(utils.remove.operation)
  @ApiParam(utils.remove.param)
  @ApiResponse(utils.remove.response200)
  @ApiResponse(utils.remove.response404)
  async remove(@Param('id') id: string): Promise<Response<void>> {
    try {
      await this.usersService.remove(+id);
      return {
        data: null,
        message: 'User removed successfully',
        success: true,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to remove user',
        success: false,
        error: error.message || 'Internal Server Error',
      };
    }
  }

  @Post(utils.create.path)
  @ApiOperation(utils.create.operation)
  @ApiBody(utils.create.body)
  @ApiResponse(utils.create.response201)
  async create(@Body() createUserDto: CreateUserDto): Promise<Response<User>> {
    try {
      const user = await this.usersService.create(createUserDto);
      return {
        data: user,
        message: 'User created successfully',
        success: true,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to create user',
        success: false,
        error: error.message || 'Internal Server Error',
      };
    }
  }

  @Get(utils.findAll.path)
  @ApiOperation(utils.findAll.operation)
  @ApiResponse(utils.findAll.response200)
  async findAll(): Promise<Response<User[]>> {
    try {
      const users = await this.usersService.findAll();
      return {
        data: users,
        message: 'Users retrieved successfully',
        success: true,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        message: 'Failed to retrieve users',
        success: false,
        error: error.message || 'Internal Server Error',
      };
    }
  }
}
