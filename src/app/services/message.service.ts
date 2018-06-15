import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class MessageService {

  allMessagesArray = [];
  messageWeAreEditing = {};

  constructor(private afd: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) { }

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

  deleteThisMessage(keyToDelete) {
    this.afd.object(`/messages/${keyToDelete}`).remove().then(() => {
        // yes it was deleted
        this.getAllMessages();
    }).catch( err => {
      console.log('err deleting message: ', err);
    });
  }

  editThisMessage(wholeMessage) {
    this.messageWeAreEditing = wholeMessage;
    this.router.navigateByUrl('edit');
  }

  sendUpdatedMessageToFirebase() {
    const uniqueKeyWeAreEditing = this.messageWeAreEditing['key'];
    const editedMessage = {
      title: this.messageWeAreEditing['title'],
      content: this.messageWeAreEditing['content']
    };
    this.afd.object(`/messages/${uniqueKeyWeAreEditing}`).update(editedMessage).then(() => {
      this.router.navigateByUrl('/');
    }).catch( err => {
      console.log('err: ', err);
    });
  }

}
