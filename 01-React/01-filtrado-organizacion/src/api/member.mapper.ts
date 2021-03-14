import { ApiMember } from './member.api.model';
import { Member } from '../pods/memberList';

const mapMemberFromApiToVm = (member: ApiMember): Member => ({
  login: member.login,
  id: member.id,
  avatar: member.avatar_url,
});

export const mapMemberListFromApiToVm = (memberList: ApiMember[]): Member[] =>
  memberList.map((member) => mapMemberFromApiToVm(member));
