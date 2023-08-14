import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    default: 'electronic@gmail.com',
  })
  email: string;

  @ApiProperty({
    default: 'electronic',
  })
  fullName: string;

  @ApiProperty({
    default: '123456qW',
  })
  password: string;
}
