module.exports={
    validates_email: (email)=>{
        const exptext = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

        if(exptext.test(email)==false){
            throw {status:400, message: 'invalid email'}
        }
    },
    validates_password: (password)=>{
        const exptext = /^[a-zA-Z0-9!@#$%^&*+=_]{8,}$/

        if(exptext.test(password)==false){
            throw {status:400, message: 'invalid password'}
        }
    },
    validates_username: (username)=>{
        const exptext = /^[a-zA-Z0-9]{6,16}$/

        if(exptext.test(username)==false){
            throw {status:400, message: 'invalid username'}
        }
    }
}