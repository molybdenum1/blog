import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PostService } from './post.service';
import { PostEntity } from './entity/post.entity';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async findAll(): Promise<PostEntity[]> {
    return this.postService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<PostEntity[]> {
    return this.postService.findOne(+id);
  }
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() body: { title: string; content: string },
  ) {
    return this.postService.update(+id, body);
  }
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }

  @Post()
  async create(
    @Body() body: { title: string; content: string },
  ): Promise<PostEntity> {
    try {
      const { title, content } = body;
      return this.postService.create(title, content);
    } catch (error) {
      return error;
    }
  }
}
