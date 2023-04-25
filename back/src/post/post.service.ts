import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './entity/post.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}
  async findAll(): Promise<PostEntity[]> {
    return this.postRepository.find();
  }
  async create(title: string, content: string): Promise<PostEntity> {
    const post = new PostEntity();
    post.title = title;
    post.content = content;
    return this.postRepository.save(post);
  }
}
