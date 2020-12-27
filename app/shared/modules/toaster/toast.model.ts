export class Message {
    content : string;
    style : string;
    error : string;
    dismissed = false;

    constructor(content, style? , error?) {
        this.content = content;
        this.style = style || 'info';
        this.error = error || '';
    }

}
