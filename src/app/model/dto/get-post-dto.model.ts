import { Post } from "../post.model";

export class GetPostDto {
    userId: number;
    id: number;
    title: string;
    body: string;




    public static toPost(dto: GetPostDto): Post {
        let post = new Post();
        post.userId = dto.userId;
        post.id = dto.id;
        post.title = dto.title;
        post.body = dto.body;
        return post;
    }

}