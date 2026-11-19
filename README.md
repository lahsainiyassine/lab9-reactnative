# Lab 9 : Hooks React Native – Thème clair/sombre avec useColorScheme

- **URL de la plateforme** : https://mliaedu.toubkalit.com/student/courses/38/labs/298
- **Formation** : React Native

---

## 1. Objectifs d’apprentissage
- Importer et instancier `useColorScheme` depuis `react-native`.
- Comprendre les valeurs possibles : `'light'`, `'dark'`, `null`.
- Construire un mini-système de thème (palette clair/sombre) sans dépendance externe.
- Appliquer des styles conditionnels via des tableaux de styles `[styleFixe, styleVariable]`.
- Tester et valider la bascule clair/sombre sur émulateurs Android/iOS.

---

## 2. Palette de couleurs
- **Accent** : `#EE9972`
- **Clair (Light)** : fond `#EDEFEE`, texte `#333333`
- **Sombre (Dark)** : fond `#333333`, texte `#EDEFEE`

---

## 3. Structure des fichiers
```text
tp9/
  assets/
    icon.png
  src/
    screens/
      WelcomeScreen.js
  App.js
  package.json
```

---

## 4. Code complet de WelcomeScreen.js
**Fichier : `src/screens/WelcomeScreen.js`**
```javascript
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  useColorScheme,
} from 'react-native';

export default function WelcomeScreen() {
  const colorScheme = useColorScheme();

  const effectiveIsLight = colorScheme === 'light';
  const palette = effectiveIsLight
    ? { background: '#EDEFEE', text: '#333333', accent: '#EE9972' }
    : { background: '#333333', text: '#EDEFEE', accent: '#EE9972' };

  return (
    <ScrollView style={[styles.container, { backgroundColor: palette.background }]}>
      <View style={styles.headerWrapper}>
        <Image
          style={styles.image}
          source={require('../../assets/icon.png')}
          resizeMode="cover"
          accessible={true}
          accessibilityLabel={'App Logo'}
        />

        <Text style={[styles.headerText, { color: palette.text }]}>
          My Bistro
        </Text>
      </View>

      <Text style={[styles.regularText, { color: palette.text }]}>
        My Bistro est une application de démonstration permettant d’explorer
        l’adaptation automatique du thème clair/sombre dans React Native.
      </Text>

      <Text style={[styles.debugText, { color: palette.text }]}>
        Thème système détecté : {String(colorScheme)}
      </Text>

      <View style={[styles.accentBar, { backgroundColor: palette.accent }]} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    textAlign: 'center',
  },
  regularText: {
    fontSize: 20,
    padding: 20,
    marginVertical: 8,
    textAlign: 'center',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 16,
  },
  debugText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    opacity: 0.7,
  },
  accentBar: {
    height: 8,
    marginHorizontal: 20,
    borderRadius: 6,
    marginBottom: 20,
  },
});
```

---

## 5. Intégration dans App.js
**Fichier : `App.js`**
```javascript
import React from 'react';
import { StatusBar } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
  return (
    <>
      <StatusBar barStyle="auto" />
      <WelcomeScreen />
    </>
  );
}
```
