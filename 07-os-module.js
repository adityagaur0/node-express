const os= require('os')

//info about current user
const user=os.userInfo()
console.log(user)

//method return the screen uptime in minutes
console.log(`The Uptime is ${os.uptime()} seconds`)

const currentOs={
    name:os.type(),
    release: os.release(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),

}
console.log(currentOs);