export type Status = {
  userId: string;
  attack: number;
  buf: {
    buffAttack: number;
    buffDefence: number;
    deBuffAttack: number;
    deBuffDefence: number;
  };
  defence: number;
  gitmonId: number;
  hp: number;
  name: string;
  skills: {
    skillId: number;
    skillName: string;
    description: string;
    requiredBP: number;
  }[];
};
