import { Component, For } from 'solid-js';
import { useHistory } from '../HistoryProvider';
import { Card, Divider, Grid, Typography } from '@suid/material';

export const Viewer: Component = () => {
  const [history] = useHistory()!;

  return (
    <Card>
      <Grid container direction="column">
        <Grid item>
          <Typography align="center" variant="h3">
            {history[0].name}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container justifyContent="space-around">
            <Grid item md={5}>
              <img
                src={`http://assets.pokemon.com/assets/cms2/img/pokedex/full/${history[0].id}.png`}
                alt={`Image of the Pokemon ${history[0].name}.`}
                elementtiming="pokemon"
                fetchpriority="high"
              />
            </Grid>
            <Divider flexItem orientation="vertical" />
            <Grid item md={5}>
              <For each={history[0].types}>{(type) => <div>{type}</div>}</For>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
