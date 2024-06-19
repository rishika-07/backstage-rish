import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Typography, Grid, TextField, Button } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';

export const ExampleComponent = () => {
  const [userId, setUserId] = useState('');
  const [description, setDescription] = useState('');
  const [userIdError, setUserIdError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const handleUserIdChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserId(event.target.value);
    if (event.target.value.trim() !== '') {
      setUserIdError(false);
    }
  };

  const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
    if (event.target.value.trim() !== '') {
      setDescriptionError(false);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validate inputs
    if (userId.trim() === '') {
      setUserIdError(true);
      return;
    }
    if (description.trim() === '') {
      setDescriptionError(true);
      return;
    }

    // Handle form submission logic here (e.g., send data to backend, etc.)
    console.log('User ID:', userId);
    console.log('Description:', description);

    // Clear form fields after successful submission
    setUserId('');
    setDescription('');
  };

  return (
    <Page themeId="tool">
      <Header title="Welcome to frontend-plugin!" subtitle="Optional subtitle">
        <HeaderLabel label="Owner" value="Team X" />
        <HeaderLabel label="Lifecycle" value="Alpha" />
      </Header>
      <Content>
        <ContentHeader title="GITHUB ">
          <SupportButton>A description of your plugin goes here.</SupportButton>
        </ContentHeader>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <InfoCard title="ENTER YOUR REPOSITORY DETAILS HERE">
              <Typography variant="body1">
                all fields are required. Please enter your repository details here.
              </Typography>
            </InfoCard>
          </Grid>
          <Grid item>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2} direction="column">
                <Grid item>
                  <TextField
                    label="User ID"
                    variant="outlined"
                    value={userId}
                    onChange={handleUserIdChange}
                    fullWidth
                    error={userIdError}
                    helperText={userIdError ? 'User ID cannot be empty' : ''}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    label="Description"
                    variant="outlined"
                    value={description}
                    onChange={handleDescriptionChange}
                    fullWidth
                    error={descriptionError}
                    helperText={descriptionError ? 'Description cannot be empty' : ''}
                  />
                </Grid>
                <Grid item>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
          <Grid item>
            <ExampleFetchComponent />
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};
