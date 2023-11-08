enum Color {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
  Yellow = 'yellow',
  Orange = 'orange',
  Purple = 'purple',
  Brown = 'brown',
  Pink = 'pink',
  Turquoise = 'turquoise',
  Violet = 'violet',
  Black = 'black',
  White = 'white',
  Gray = 'gray',
  Silver = 'silver',
  Gold = 'gold',
  Coral = 'coral',
  Olive = 'olive',
  Lavender = 'lavender',
  Cyan = 'cyan',
  Magenta = 'magenta',
  Peach = 'peach',
  Ivory = 'ivory',
  Tan = 'tan',
  Beige = 'beige',
}

export const isValidColor = (color: string): boolean => {
  return Object.values(Color).includes(color.toLocaleLowerCase() as Color);
};

