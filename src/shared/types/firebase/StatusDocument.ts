// NOTE: userIDがドキュメントIDになる
export type StatusDocument = {
  Attack: number;
  Buf: {
    BuffAttack: number;
    BuffDefence: number;
    DeBuffAttack: number;
    DeBuffDefence: number;
  };
  Defence: number;
  GitmonID: number;
  HP: number;
  Name: string;
  Skills: {
    SkillID: number;
    SkillName: string;
    Description: string;
    RequiredBP: number;
  }[];
};
