"use client";

import { Grid, useTheme, View } from '@aws-amplify/ui-react';

export default function ExampleGrid() {
  const { tokens } = useTheme();
  return (
    <Grid
      templateColumns="1fr 1fr"
      templateRows="10rem 10rem"
      gap={tokens.space.small}
    >
      <View backgroundColor={tokens.colors.blue[10]}></View>
      <View backgroundColor={tokens.colors.blue[20]}></View>
      <View backgroundColor={tokens.colors.blue[40]}></View>
      <View backgroundColor={tokens.colors.blue[60]}></View>
    </Grid>
  );
}
