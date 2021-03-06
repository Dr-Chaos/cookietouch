import GuildEmblem from "@protocol/network/types/GuildEmblem";
import Message from "./Message";
export default class AllianceModificationValidMessage extends Message {
  public allianceName: string;
  public allianceTag: string;
  public alliancemblem: GuildEmblem;
  constructor(allianceName = "", allianceTag = "", alliancemblem: GuildEmblem = null) {
    super();
    this.allianceName = allianceName;
    this.allianceTag = allianceTag;
    this.alliancemblem = alliancemblem;

  }
}
