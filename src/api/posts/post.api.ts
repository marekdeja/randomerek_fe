import { PostService as IPostService, GetAllPostsResponse } from '@/api/posts/post.model'

import httpClient from '@/common/http/httpClient'

const PostService = (): IPostService => {
   return {
      getAllPosts: (): HttpPromise<GetAllPostsResponse> => {
         return httpClient.get('/posts')
      },
   }
}

export default PostService()
