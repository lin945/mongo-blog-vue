import  {get} from '@/plugins/axios'

class AboutModel {
    async getAllBlog() {
        return get('/about');
    }
}
export default new AboutModel()