import { ApiProperty } from '@nestjs/swagger';

export class productDto {
  @ApiProperty({ required: true, default: 1 })
  id_product?: number;
  @ApiProperty({ required: true, default: 'name' })
  name?: string;
  @ApiProperty({ required: true, default: 1 })
  value?: number;
  @ApiProperty({ required: true, default: 'description' })
  description?: string;
  @ApiProperty({ type: 'string', format: 'binary' })
  image: any;
  @ApiProperty({ required: true, default: 'category' })
  category: any;
  @ApiProperty({ required: true, default: new Date() })
  createdAt?: Date;
}

export class Createproduct {
  @ApiProperty({ required: true, default: 'name' })
  name?: string;
  @ApiProperty({ required: true, default: 1 })
  value?: number;
  @ApiProperty({ required: true, default: 'description' })
  description?: string;
  @ApiProperty({ type: 'string', format: 'binary' })
  image: any;
  @ApiProperty({ required: true, default: 'category' })
  category: any;
}

export class Updateproduct {
  @ApiProperty({ required: true, default: 'name' })
  name?: string;
  @ApiProperty({ required: true, default: 1 })
  value?: number;
  @ApiProperty({ required: true, default: 'description' })
  description?: string;
  @ApiProperty({ required: true , type: 'string', })
  lastImage: any;
  @ApiProperty({ type: 'string', format: 'binary' })
  image: any;
  @ApiProperty({ required: true, default: 'category' })
  category: any;
}

