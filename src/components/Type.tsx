import { Component } from 'solid-js';
import { Grid, Typography } from '@suid/material';
import { typeColorPalette } from '../data/typeColorPalette';
import { PokemonType } from '../interfaces/PokemonType';

export const Type: Component<{ type: PokemonType }> = ({ type }) => (
  <Grid item>
    <Typography
      fontFamily="pokemon"
      padding="0.4rem 0.6rem 0.4rem 0.6rem"
      borderRadius="0.4rem"
      color="white"
      backgroundColor={typeColorPalette[type].primary}
      border={`0.1rem solid ${typeColorPalette[type].secondary}`}
      displayRaw="inline-block"
      style={{ 'text-shadow': '0.08rem 0.08rem 0.2rem black' }}
    >
      {type}
    </Typography>
  </Grid>
);
