import { ApiMember } from './member.api.model';

export const getMembers = (organization: string): Promise<ApiMember[]> =>
  fetch(
    `https://api.github.com/orgs/${organization}/members`
  ).then((response) => response.json());
