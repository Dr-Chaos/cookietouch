import Message from "./Message";
export default class ExchangeRequestedMessage extends Message {
public exchangeType: number;
constructor(exchangeType = 0) {
super();
this.exchangeType = exchangeType;

}
}
