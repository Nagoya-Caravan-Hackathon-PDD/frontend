import { QueryDocumentSnapshot } from 'firebase/firestore';
import { Status } from '@/shared/types/entities/Status';
import { StatusDocument } from '@/shared/types/firebase/StatusDocument';

export const statusConverter = {
  toFirestore: (statuses: Status): StatusDocument => {
    return {
      Attack: statuses.attack,
      Buf: {
        BuffAttack: statuses.buf.buffAttack,
        BuffDefence: statuses.buf.buffDefence,
        DeBuffAttack: statuses.buf.deBuffAttack,
        DeBuffDefence: statuses.buf.deBuffDefence,
      },
      Defence: statuses.defence,
      GitmonID: statuses.gitmonId,
      HP: statuses.hp,
      Name: statuses.name,
      Skills: statuses.skills.map((skill) => {
        return {
          SkillID: skill.skillId,
          SkillName: skill.skillName,
          Description: skill.description,
          RequiredBP: skill.requiredBP,
        };
      }),
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<StatusDocument>): Status => {
    const data = snapshot.data();
    console.log(data);
    return {
      userId: snapshot.id,
      attack: data.Attack,
      buf: {
        buffAttack: data.Buf.BuffAttack,
        buffDefence: data.Buf.BuffDefence,
        deBuffAttack: data.Buf.DeBuffAttack,
        deBuffDefence: data.Buf.DeBuffDefence,
      },
      defence: data.Defence,
      gitmonId: data.GitmonID,
      hp: data.HP,
      name: data.Name,
      skills: data.Skills.map((skill) => {
        return {
          skillId: skill.SkillID,
          skillName: skill.SkillName,
          description: skill.Description,
          requiredBP: skill.RequiredBP,
        };
      }),
    };
  },
};
