import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { PostEntity } from './entity/post.entity';

@Controller('posts')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async findAll(): Promise<PostEntity[]> {
    return this.postService.findAll();
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
