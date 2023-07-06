import {
  ArgumentMetadata,
  HttpException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { CreateUserDto } from '../dtos/CreateUser.dto';

@Injectable()
export class ValidateCreateUserPipe implements PipeTransform {
  transform(value: CreateUserDto, metadata: ArgumentMetadata) {
    console.log('inside validate pipe');
    console.log(value);

    const parseAgeToInt = parseInt(value.age.toString());
    if (isNaN(parseAgeToInt)) {
      console.log(`${value.age} is not a number`);
      throw new HttpException(
        'Invalid Data Type for property age. Expected number',
        HttpStatus.BAD_REQUEST,
      );
    }

    console.log(`${parseAgeToInt} is a number. Returning`);
    return { ...value, age: parseAgeToInt };
  }
}
