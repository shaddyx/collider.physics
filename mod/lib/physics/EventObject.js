class EventObject {
    constructor(...args){
        super(...args);
        this.eventListeners = {};
    }
    on(name, event){
        if (this.eventListeners[event]){
            this.eventListeners[name].push(event);
        } else {
            this.eventListeners[name] = [event];            
        }
    }
    emit(name, ...args){
        this.eventListeners[name](...args);
    }
}