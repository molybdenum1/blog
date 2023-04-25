import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PostEntity } from './entity/post.entity';
import { Repository } from 'typeorm';
import { CommentEntity } from 'src/comment/entity/comment.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
  ) {}
  async findAll(): Promise<PostEntity[]> {
    return this.postRepository.find({ relations: ['comments'] });
  }
  async findOne(id: number): Promise<PostEntity[]> {
    return await this.postRepository.find({
      where: { id: id },
      relations: ['comments'],
    });
  }
  async create(title: string, content: string): Promise<PostEntity> {
    const post = new PostEntity();
    post.title = title;
    post.content = content;
    return this.postRepository.save(post);
  }
  async update(
    id: number,
    post: { title: string; content: string },
  ): Promise<PostEntity> {
    await this.postRepository.update(id, post);
    return await this.postRepository.findOneBy({ id });
  }
  async remove(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }
}
