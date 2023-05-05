import { Component } from 'solid-js';
import { typeColorPalette } from '../data/typeColorPalette';
import { PokemonType } from '../interfaces/PokemonType';

import styles from './type.module.scss';

export const Type: Component<{ type: PokemonType }> = ({ type }) => (
  <div
    class={styles.type}
    style={{
      'background-color': typeColorPalette[type].primary,
      'border-color': typeColorPalette[type].secondary,
    }}
  >
    {type}
  </div>
);
