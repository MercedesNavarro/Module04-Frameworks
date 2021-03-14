import React from 'react';
import { getMembers, mapMemberListFromApiToVm } from '../api';
import { FormComponent } from '../pods/form';
import { MemberListComponent } from '../pods/memberList';
import { CenteredLayout } from '../layout/centeredLayout';

export const MainScene: React.FC = () => {
  const [organization, setOrganization] = React.useState('lemoncode');

  const [memberList, setMemberList] = React.useState([]);

  const onLoadMemberList = (organization: string) => {
    getMembers(organization).then((data) =>
      setMemberList(mapMemberListFromApiToVm(data))
    );
  };

  React.useEffect(() => {
    onLoadMemberList(organization);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    onLoadMemberList(organization);
  };

  return (
    <CenteredLayout>
      <FormComponent
        organization={organization}
        onNewOrganization={setOrganization}
        handleSubmit={handleSubmit}
      />
      <MemberListComponent memberList={memberList} />
    </CenteredLayout>
  );
};
