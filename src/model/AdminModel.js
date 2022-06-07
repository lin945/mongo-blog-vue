import  {post} from '@/plugins/axios'

class AdminModel {
    async login(user,pass){

        return post('/admin/login',{
            userName:user,
            password:pass
        })
    }
}

export default new AdminModel()