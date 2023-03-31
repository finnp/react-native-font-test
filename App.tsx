/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <View style={{padding: 16}}>
        <Test
          fontVariant="common-ligatures"
          fontFamily="Raleway-Medium"
          test="fi ff"
        />

        <Test
          fontVariant="no-common-ligatures"
          fontFamily="Raleway-Medium"
          test="fi ff"
        />

        <Test
          fontVariant="discretionary-ligatures"
          fontFamily="Inconsolata-Regular"
          test="=== !=="
        />

        <Test
          fontVariant="no-discretionary-ligatures"
          fontFamily="Inconsolata-Regular"
          test="=== !=="
        />

        <Test
          fontVariant="contextual"
          fontFamily="FiraCode-Regular"
          test="=== !=="
        />

        <Test
          fontVariant="no-contextual"
          fontFamily="FiraCode-Regular"
          test="=== !=="
        />

        <Test
          fontVariant="historical-ligatures"
          fontFamily="EBGaramond-Medium"
          test="loſt"
        />

        <Test
          fontVariant="no-historical-ligatures"
          fontFamily="EBGaramond-Medium"
          test="loſt"
        />

        <Test
          fontVariant={['historical-ligatures', 'common-ligatures']}
          fontFamily="EBGaramond-Medium"
          test="loſt bluff"
        />

        <Test
          fontVariant={['no-historical-ligatures', 'no-common-ligatures']}
          fontFamily="EBGaramond-Medium"
          test="loſt bluff"
        />

        <Test
          fontVariant={['historical-ligatures', 'no-common-ligatures']}
          fontFamily="EBGaramond-Medium"
          test="loſt bluff"
        />
      </View>
    </SafeAreaView>
  );
}

function Test({
  fontVariant,
  fontFamily,
  test,
}: {
  fontVariant: string | string[];
  fontFamily: string;
  test: string;
}) {
  if (!Array.isArray(fontVariant)) {
    fontVariant = [fontVariant];
  }
  return (
    <>
      <Text style={{fontSize: 16}}>{fontVariant.join(', ')}</Text>
      <Text
        style={{
          marginBottom: 16,
          fontSize: 24,
          fontFamily,
          fontVariant,
        }}>
        {test}
      </Text>
    </>
  );
}

export default App;
