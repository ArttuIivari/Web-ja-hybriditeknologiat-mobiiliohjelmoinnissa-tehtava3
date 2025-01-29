import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Button, PaperProvider } from 'react-native-paper';
import MainAppbar from './components/MainAppbar';
import { customDarkTheme, customLightTheme } from './theme/mytheme';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import SecondScreen from './screens/SecondScreen';


export default function App() {

  const Stack = createNativeStackNavigator()

  const colorScheme = useColorScheme()
  const theme = colorScheme === "dark" ? customDarkTheme : customLightTheme
  return (
    <PaperProvider theme={theme}>
      
      <NavigationContainer>
      <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{
        header: (props) => <MainAppbar {...props}/>
      }}>
        <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title:'Home',
          headerTitle:'Home',
        }}
        />
        <Stack.Screen
        name="Second"
        component={SecondScreen}
        options={{
          title:'Second',
          headerTitle:'Second',
        }}
        />
      </Stack.Navigator>
      </NavigationContainer>
      
    <View style={styles.container}>
      
      <StatusBar style="auto" />
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
