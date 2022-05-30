import  {get} from '@/plugins/axios'
class BlogModel {
    async getAllBlog(page = 0) {
        return get('/blog/all', {page: page});
    }

    async getBlogById(id) {
        return get(`/blog/${id}`,{})
    }

}
export default new BlogModel()