export default class Loading {
    static load(callback){
        setTimeout(callback, 3000);
    }
}