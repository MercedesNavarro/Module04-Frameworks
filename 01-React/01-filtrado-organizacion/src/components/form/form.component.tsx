import React from 'react';
import { Typography, TextField, Button } from '@material-ui/core';

interface Props {
  organization: string;
  onNewOrganization: (organization: string) => void;
  handleSubmit: (event) => void;
}

export const FormComponent: React.FC<Props> = (props) => {
  const { organization, onNewOrganization, handleSubmit } = props;

  return (
    <>
      <Typography component="h1">
        Introduzca el nombre de una organización para buscar a sus usuarios en
        Github
      </Typography>
      <form>
        <TextField
          size="medium"
          value={organization}
          onChange={(e) => onNewOrganization(e.target.value)}
          style={{ margin: '20px 10px' }}
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={handleSubmit}
          style={{ margin: '20px 10px' }}
        >
          Buscar
        </Button>
      </form>
    </>
  );
};
