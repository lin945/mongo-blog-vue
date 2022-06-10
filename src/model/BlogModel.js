import {get, post} from '@/plugins/axios'
class BlogModel {
    async getAllBlog(page = 0) {
        return get('/blog/all', {page: page});
    }

    async getBlogById(id) {
        return get('/blog/',{id:id})
    }

    async saveBlog(blog){
        return post('/admin/blog/add',blog)
    }

}
export default new BlogModel()