import {
  Controller,
  Get,
  Request,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { productService } from './product.service';
import { Createproduct, Updateproduct, productDto } from './dto/product.model';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import deleteImg from 'src/helpers/functions/deleteImg';

@ApiTags('product')
@Controller('product')
export class productController {
  constructor(private productService: productService) {}

  @Post('create')
  @ApiCreatedResponse({ status: 200, description: 'success', type: Createproduct,})
  @UseInterceptors(FileInterceptor('image',{
    storage: diskStorage({ destination: './img', filename: (req, file, cb) => {
      const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
      return cb(null, `${randomName}${extname(file.originalname)}`)
    }})
  }))
  async createproduct( @Body() product: Createproduct, @UploadedFile() image: Express.Multer.File): Promise<productDto> {
    const urlImage = `http://localhost:8080/${image.path}`
    return this.productService.create({...product, image: urlImage});
  }


  @Post('edit')
  @ApiCreatedResponse({ status: 200, description: 'success', type: productDto })
  @UseInterceptors(FileInterceptor('image',{ storage: diskStorage({destination: './img', filename: (req, file, cb) => {
      const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
      return cb(null, `${randomName}${extname(file.originalname)}`)
    }})
  }))
  async editproduct(@Body() product: Updateproduct, @UploadedFile() image: Express.Multer.File): Promise<productDto> {
    const urlImage = image ? `http://localhost:8080/${image?.path}` : product.lastImage
    image ? await deleteImg(product.lastImage) : null
    return this.productService.edit({...product, image: urlImage });
  }


  @Delete(':id')
  @ApiQuery({ name: 'id', type: Number })
  @ApiCreatedResponse({ status: 200, description: 'success', type: Number })
  async deleteproduct(@Param('id') id: number, @Request() req): Promise<any> {
    return this.productService.delete(id);
  }

  @Get(':page/:limit')
  @ApiCreatedResponse({})
  async getproducts(@Param('page') page:number ,@Param('limit') limit:number, @Query('name') name: string): Promise<any[]> {
    return this.productService.findAll({page,limit, name});
  }

  @Get(':id')
  @ApiCreatedResponse({ status: 200, description: 'success' })
  async getproduct(
    @Param('id') id: number,
    @Request() req,
  ): Promise<productDto> {
    return this.productService.findOneById(id);
  }
}
