import CounterStore from "../store/couter";

export default function () {
    const couterStore = new CounterStore();
    return {
        couterStore
    }
}