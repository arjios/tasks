import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Details from './screens/Details';

import TaskProvider from './context/TaskContext';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>

  );
}

