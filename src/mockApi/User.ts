
interface LoginType {
    Name: string,
    Password?: string
}
const accessUser = {
    Name: "Admin",
    Password: "root"
}
export const LoginRequest = async (user: LoginType) => {
    const { Name, Password } = user
    console.log(Name, Password)
    if(accessUser.Name == Name && accessUser.Password == Password) {
        return Promise.resolve({
            Name: "Admin",
            id: Math.random()
        })
    }else {
        return Promise.reject('Kullanıcı adı yada şifre hatalı!')
    }
}