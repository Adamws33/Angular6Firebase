import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class MessageService {

  allMessagesArray = [];

  constructor(private afd: AngularFireDatabase, private afAuth: AngularFireAuth) { }

  sendMessage(messageTitle, messageContent) {
    const newMessage = {
      title: messageTitle,
      content: messageContent,
      owner: this.afAuth.auth.currentUser.uid
    };
    this.afd.list('/messages').push(newMessage).then(() => {
      // successfully sent message
    });
  }

  getAllMessages() {
    this.allMessagesArray = [];
    this.afd.database.ref('/messages').once('value').then(returnedResponse => {
      const allMessagesAsOneGiantObject = returnedResponse.val() ? returnedResponse.val() : {};
      Object.keys(allMessagesAsOneGiantObject).forEach(eachKey => {
        this.allMessagesArray.push({
          key: eachKey,
          title: allMessagesAsOneGiantObject[eachKey]['title'],
          content: allMessagesAsOneGiantObject[eachKey]['content'],
          owner: allMessagesAsOneGiantObject[eachKey]['owner']
        });
      });
      console.log(allMessagesAsOneGiantObject);
    }).catch(err => {
      console.log('err: ', err);
    });
  }

}
