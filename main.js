class Messenger {
    constructor(name, time,text) {
      this.name = name;
      this.time = time;
      this.text = text;
    }
    send(name,text) {
      this.name = name;
      this.text=text;
    }
    show_history()
    {
    let now = new Date();
    this.time=`${now.getHours().toString()}:${ now.getMinutes().toString()}`;
    }
    toString(){
      return  `${this.time} ${this.name}:${this.text}`;
    }
  }
  
  
let messenger = new Messenger()
messenger.send('Adil', 'ilk mesaj')
messenger.show_history()
console.log(messenger.toString());
messenger.send('Məryəm', 'İkinci mesaj')
messenger.show_history()
console.log(messenger.toString());
