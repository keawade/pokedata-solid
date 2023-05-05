import { Component, For } from 'solid-js';
import { useHistory } from '../HistoryProvider';
import { Card, Divider, Grid, Typography } from '@suid/material';

import styles from './viewer.module.scss';
import { typeColorPalette } from '../data/typeColorPalette';
import { PokemonType } from '../interfaces/PokemonType';

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
              <For each={history[0].types}>
                {(type) => (
                  <div
                    class={styles.type}
                    style={{
                      'background-color':
                        typeColorPalette[type as PokemonType].primary,
                      'border-color':
                        typeColorPalette[type as PokemonType].secondary,
                    }}
                  >
                    {type}
                  </div>
                )}
              </For>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
