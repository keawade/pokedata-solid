import { Component, For } from 'solid-js';
import { Card, CardContent, CardMedia, Grid, Typography } from '@suid/material';
import { useHistory } from '../HistoryProvider';

export const History: Component = () => {
  const [history, { selectPokemon }] = useHistory()!;

  return (
    <div>
      <h2>History</h2>
      <Grid container spacing={2}>
        <For each={history.slice(1)}>
          {(pokemon) => (
            <Grid item md={3} xs={6} wrap="wrap">
              <Card
                onClick={() => {
                  selectPokemon(pokemon.id);
                }}
              >
                <CardMedia
                  component="img"
                  image={`http://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.id}.png`}
                  alt={`Image of the Pokemon ${pokemon.name}.`}
                  elementtiming="pokemon"
                  fetchpriority="high"
                />
                <CardContent>
                  <Typography variant="h5">{pokemon.name}</Typography>
                </CardContent>
              </Card>
            </Grid>
          )}
        </For>
      </Grid>
    </div>
  );
};
