import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { PostEntity } from './post/entity/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1312',
      database: 'blog-db',
      entities: [PostEntity],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([PostEntity]),
  ],
  controllers: [PostController],
  providers: [PostService],
})
export class AppModule {}
