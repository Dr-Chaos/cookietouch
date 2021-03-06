import Account from "@account";
import DataManager from "@protocol/data";
import Achievements from "@protocol/data/classes/Achievements";

export default class AchievementsFrame {

  private account: Account;

  constructor(account: Account) {
    this.account = account;
    this.register();
  }

  private register() {
    this.account.dispatcher.register("AchievementRewardSuccessMessage",
    this.HandleAchievementRewardSuccessMessage, this);
    this.account.dispatcher.register("AchievementFinishedMessage",
    this.HandleAchievementFinishedMessage, this);
    this.account.dispatcher.register("AchievementListMessage",
    this.HandleAchievementListMessage, this);
  }

  private async HandleAchievementRewardSuccessMessage(account: Account, message: any) {
    const achievementResp = await DataManager.get(Achievements, message.achievementId);
    const a = achievementResp[0].object;
    account.logger.logInfo("", `Succés ${a.nameId} dévérouillé! Vous avez gagné ${a.points} points.`);
  }

  private async HandleAchievementFinishedMessage(account: Account, message: any) {
    if (!account.config.acceptAchievements) {
      return;
    }

    account.network.sendMessage("AchievementRewardRequestMessage", {
      achievementId: message.id,
    });
  }

  private async HandleAchievementListMessage(account: Account, message: any) {
    if (!account.config.acceptAchievements) {
      return;
    }

    for (const achiv of message.rewardableAchievements) {
      account.network.sendMessage("AchievementRewardRequestMessage", {
        achievementId: achiv.id,
      });
    }
  }
}
