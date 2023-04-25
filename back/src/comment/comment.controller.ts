import { Body, Controller, Get, Post, Param } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('comments')
export class CommentController {
  constructor(private commentService: CommentService) {}

  @Get(':postId')
  async getComments(@Param('postId') postId: number) {
    return this.commentService.findAll(postId);
  }
  @Post(':postId')
  async createComment(
    @Param('postId') postId: number,
    @Body() comment: { comment: string },
  ) {
    return this.commentService.create(postId, comment.comment);
  }
}
