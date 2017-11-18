import ObjectItem from "@protocol/network/types/ObjectItem";
import Message from "./Message";
export default class ExchangeStartedMountStockMessage extends Message {
public objectsInfos: ObjectItem[];
constructor(objectsInfos: ObjectItem[]) {
super();
this.objectsInfos = objectsInfos;

}
}
