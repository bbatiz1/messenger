//user.inbox --> that person's messages

class User {
  constructor(name) {
    this.name = name
    this.inbox = []
  }

  sendMessage(reciever, content){
      let msg= new Message(reciever, content)
      reciever.inbox.push(msg)
      return 'Your message to ${reciever.name} has been sent!'
  }

  readMessage(i){
    return this.inbox[i].content
  }
}

class Message {
  constructor(reciever, content){
    this.reciever = reciever
      this.content = content
  }
}

let user1 = new User ('brandon')
let user2 = new User ('bob')
// let inbox =[]
//
//   class Message{
//     constructor(content){ // gives us the keyboard new
//       this.content = content
//       inbox.push(this)
//     }
//   }
//
// let msg1 = new Messge('Hello!')
//user needs to be able to send messages
//messagesneed to be sorded somw3where
//needn to be able to read individual message

//classesc star with capitalett
//95% of the time are singular in username
//
// let inbox = []
// class Message {
//   constructor(content){
//     this.content = content
//     inbox.push(this)
//   }
// }
//
// let msg1= new Messge('This is the first message')
// let msg2= new Message2('This is the second message')

//any object based on class is called an instance
//an instance represents one object based on the class name
