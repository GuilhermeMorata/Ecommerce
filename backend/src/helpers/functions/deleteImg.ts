
const fs = require('fs')
export default function deleteImg(parma:string){
    const path  = parma.split("img")[1]
    try {
        fs.unlinkSync(`./img/${path}`)
        //file removed
      } catch(err) {
        console.error('meu')
      }

}