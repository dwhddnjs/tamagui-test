import { View, Text, StyleSheet } from 'react-native';
import { H1 } from 'tamagui';

import { Button } from '~/components/Button';
import { ScreenContent } from '~/components/ScreenContent';

export default function Tab() {
  return (
    <ScreenContent title="asdsadsad" path="/asd">
      <Button title="asddsa" />
      <H1>sdasdsad</H1>
    </ScreenContent>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });
