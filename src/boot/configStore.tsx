import CounterStore from "../store/couter";
import NotificationStore from "../store/NotificationStore";

export default function () {
    const couterStore = new CounterStore();
    const notificationStore = NotificationStore.getInstance(); 
    console.log("noti", notificationStore);
    return {
      couterStore,
      notificationStore
    };
}