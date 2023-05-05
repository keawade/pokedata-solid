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
          <Typography align="center" variant="h3">
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
              <Typography>Type</Typography>
              <For each={history()[0].types}>
                {(type) => <Type type={type as PokemonType} />}
              </For>
              <Typography>Weaknesses</Typography>
              <For
                each={Object.entries(matchups())
                  .filter(([_vs, modifier]) => modifier > 1)
                  .map(([vs]) => vs)}
              >
                {(type) => <Type type={type as PokemonType} />}
              </For>
              <Typography>Resistances</Typography>
              <For
                each={Object.entries(matchups())
                  .filter(([_vs, modifier]) => modifier < 1 && modifier !== 0)
                  .map(([vs]) => vs)}
              >
                {(type) => <Type type={type as PokemonType} />}
              </For>
              <Typography>Immunities</Typography>{' '}
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
    </Card>
  );
};
