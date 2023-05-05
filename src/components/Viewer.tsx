import { Component, For } from 'solid-js';
import { useHistory } from '../HistoryProvider';
import { Card, Divider, Grid, Typography } from '@suid/material';

import { PokemonType } from '../interfaces/PokemonType';
import { Type } from './Type';
import { calculateMatchup } from '../calculateMatchup';

export const Viewer: Component = () => {
  const [history] = useHistory()!;

  const matchups = () => calculateMatchup(history()[0].types);

  return (
    <Card>
      <Grid container direction="column">
        <Grid item>
          <Typography align="center" variant="h3" margin="1rem">
            {history()[0].name}
          </Typography>
        </Grid>
        <Grid item>
          <Grid container justifyContent="space-around">
            <Grid item md={5}>
              <img
                src={`http://assets.pokemon.com/assets/cms2/img/pokedex/full/${
                  history()[0].id
                }.png`}
                alt={`Image of the Pokemon ${history()[0].name}.`}
                elementtiming="pokemon"
                fetchpriority="high"
              />
            </Grid>

            <Divider flexItem orientation="vertical" />

            <Grid item md={5}>
              <Typography variant="h5">Type</Typography>
              <Grid container spacing={1} marginBottom="1rem">
                <For each={history()[0].types}>
                  {(type) => <Type type={type as PokemonType} />}
                </For>
              </Grid>

              <Typography variant="h5">Weaknesses</Typography>
              <Grid container spacing={1} marginBottom="1rem">
                <For
                  each={Object.entries(matchups())
                    .filter(([_vs, modifier]) => modifier > 1)
                    .map(([vs]) => vs)}
                >
                  {(type) => <Type type={type as PokemonType} />}
                </For>
              </Grid>

              <Typography variant="h5">Resistances</Typography>
              <Grid container spacing={1} marginBottom="1rem">
                <For
                  each={Object.entries(matchups())
                    .filter(([_vs, modifier]) => modifier < 1 && modifier !== 0)
                    .map(([vs]) => vs)}
                >
                  {(type) => <Type type={type as PokemonType} />}
                </For>
              </Grid>

              <Typography variant="h5">Immunities</Typography>
              <Grid container spacing={1} marginBottom="1rem">
                <For
                  each={Object.entries(matchups())
                    .filter(([_vs, modifier]) => modifier === 0)
                    .map(([vs]) => vs)}
                >
                  {(type) => <Type type={type as PokemonType} />}
                </For>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
