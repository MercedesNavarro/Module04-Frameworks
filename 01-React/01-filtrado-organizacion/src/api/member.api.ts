import { ApiMember } from './member.api.model';

export const getMembers = (organization: string): Promise<ApiMember[]> => {
  if (
    organization === undefined ||
    organization === null ||
    organization === ''
  )
    organization = 'lemoncode';

  return fetch(
    `https://api.github.com/orgs/${organization}/members`
  ).then((response) => response.json());
};
