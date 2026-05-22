import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet } from 'react-native';

import AboutScreen from './screens/AboutScreen';

function HomeScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>HOME</Text>
      <Text style={styles.sub}>Halaman utama aplikasi presensi</Text>
    </View>
  );
}

function PresensiScreen() {
  return (
    <View style={styles.center}>
      <Text style={styles.title}>PRESENSI</Text>
      <Text style={styles.sub}>Halaman presensi</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Beranda') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Presensi') {
              iconName = focused ? 'clipboard' : 'clipboard-outline';
            } else if (route.name === 'Tentang') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#0056b3',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#0056b3',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen
          name="Beranda"
          component={HomeScreen}
          options={{ title: 'Beranda' }}
        />
        <Tab.Screen
          name="Presensi"
          component={PresensiScreen}
          options={{ title: 'Presensi' }}
        />
        <Tab.Screen
          name="Tentang"
          component={AboutScreen}
          options={{ title: 'Tentang Saya' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f4f6f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  sub: {
    fontSize: 14,
    color: '#666',
  },
});