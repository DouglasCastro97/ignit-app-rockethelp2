// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import { House, CircleWavyCheck, Hourglass, Star } from 'phosphor-react-native'

// import { Rating } from '../screens/Rating';

// import { Home } from '../screens/Home';
// import { Details } from '../screens/Details';
// import { Register } from '../screens/Register';

// const { Navigator, Screen } = createBottomTabNavigator();

// export function TabRoutes(){
//   return(
//     <Navigator 
//       screenOptions={{ 
//         tabBarActiveTintColor: '',
//         tabBarInactiveTintColor: '',
//         headerShown: false 
//         }}
//         >
//       <Screen
//        name='home'
//        component={Home} 
//        options={{
//           tabBarLabel: 'Home',
//           tabBarIcon:({color, size}) => (
//             <House />
//           )
//         }}
//       />
//       <Screen 
//       name='details' 
//       component={Details}
//       options={{
//         tabBarLabel: 'Abertos',
//         tabBarIcon:({color, size}) => (
//           <Hourglass />
//           )
//        }}
//       />

// <Screen 
//       name='new' 
//       component={Register}
//       options={{
//         tabBarLabel: 'Finalizados',
//         tabBarIcon:({color, size}) => (
//           <CircleWavyCheck />
//           )
//         }}
//       />
//         <Screen 
//         name='estrena' 
//         component={Rating}
//         options={{
//           tabBarLabel: 'Finalizados',
//           tabBarIcon:({color, size}) => (
//             <Star />
//             )
//           }}
//         />
//     </Navigator>
//   );
// }