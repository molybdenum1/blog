import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PostEntity } from './post/entity/post.entity';
import { CommentController } from './comment/comment.controller';
import { CommentService } from './comment/comment.service';
import { CommentEntity } from './comment/entity/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1312',
      database: 'blog-db',
      entities: [PostEntity, CommentEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([PostEntity, CommentEntity]),
  ],
  controllers: [PostController, CommentController],
  providers: [PostService, CommentService],
})
export class AppModule {}
