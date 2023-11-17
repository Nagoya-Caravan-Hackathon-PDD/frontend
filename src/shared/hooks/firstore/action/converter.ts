import { QueryDocumentSnapshot } from 'firebase/firestore';
import { Action } from '@/shared/types/entities/Action';
import { ActionDocument } from '@/shared/types/firebase/ActionDocument';

export const actionConverter = {
  toFirestore: (action: Action): ActionDocument => {
    return {
      Description: action.description,
      RequiredBP: action.requiredBP,
      SkillID: action.skillId,
      SkillName: action.skillName,
      SkillType: action.skillType,
      SKillValue: action.skillValue,
    };
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot<ActionDocument>): Action => {
    const data = snapshot.data();
    return {
      userId: snapshot.id,
      description: data.Description,
      requiredBP: data.RequiredBP,
      skillId: data.SkillID,
      skillName: data.SkillName,
      skillType: data.SkillType,
      skillValue: data.SKillValue,
    };
  },
};
