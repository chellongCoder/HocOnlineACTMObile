import { observable, action, useStrict, configure } from 'mobx'
import remotedev from 'mobx-remotedev'
configure({
    enforceActions: true
});

@remotedev({
  name: "NotificationStore"
  // Options: https://github.com/zalmoxisus/mobx-remotedev#api
})
export default class NotificationStore {
    static instance: any = null;
    private constructor() {

    }
    public static getInstance() {
        if(NotificationStore.instance === null) {
            NotificationStore.instance = new NotificationStore();
        }
        return NotificationStore.instance;
    }
  @observable
  notifications: Array<any>= [];

  @action
  changeNotifications(notis : Array<any>) {
    this.notifications = notis;
  }
}