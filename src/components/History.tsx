import { Component, For } from 'solid-js';
import { Card, CardContent, CardMedia, Grid, Typography } from '@suid/material';
import { Circle } from '@suid/icons-material';
import { useHistory } from '../HistoryProvider';
import { typeColorPalette } from '../data/typeColorPalette';

export const History: Component = () => {
  const [history, { selectPokemon }] = useHistory()!;

  return (
    <div>
      <h2>History</h2>
      <Grid container spacing={2}>
        <For each={history().slice(1)}>
          {(pokemon) => (
            <Grid item md={3} xs={6} wrap="wrap">
              <Card
                style={{ cursor: 'pointer' }}
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
                  <Grid
                    container
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Grid item>
                      <Typography variant="h5">
                        {pokemon.id} - {pokemon.name}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <For each={pokemon.types}>
                        {(type) => (
                          <Circle
                            sx={{ color: typeColorPalette[type].primary }}
                          />
                        )}
                      </For>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          )}
        </For>
      </Grid>
    </div>
  );
};
