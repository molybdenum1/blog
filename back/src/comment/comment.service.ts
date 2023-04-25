import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from './entity/comment.entity';
import { Repository } from 'typeorm';
import { PostEntity } from 'src/post/entity/post.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(CommentEntity)
    private commentRepository: Repository<CommentEntity>,
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  async create(postId: number, comment: string): Promise<CommentEntity> {
    const post = await this.postRepository.findOneByOrFail({ id: postId });
    const postComment = new CommentEntity();
    postComment.post = post;
    postComment.content = comment;
    return await this.commentRepository.save(postComment);
  }
  async findAll(postId: number): Promise<CommentEntity[]> {
    return await this.commentRepository.find({
      where: { post: { id: postId } },
    });
  }
}
