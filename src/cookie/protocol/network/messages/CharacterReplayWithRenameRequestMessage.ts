import CharacterReplayRequestMessage from "./CharacterReplayRequestMessage";
export default class CharacterReplayWithRenameRequestMessage extends CharacterReplayRequestMessage {
public name: string;
constructor(characterId = 0, name = "") {
super(characterId );
this.name = name;

}
}
