import { StatusBar } from 'expo-status-bar';
import { Home } from './src/screens/Home';
import { useFonts } from 'expo-font';
import { Montserrat_200ExtraLight, Montserrat_400Regular } from '@expo-google-fonts/montserrat';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_200ExtraLight,
    Montserrat_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Home>

    </Home>
  );
}
