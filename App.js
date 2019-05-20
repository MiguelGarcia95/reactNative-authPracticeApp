import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/components/Home';
import Dashboard from './src/components/Dashboard';

const AppNavigator = createStackNavigator(
  {
    Home: Home,
    Dashboard: Dashboard,
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
