import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './src/components/Home';
import Dashboard from './src/components/Dashboard';

const AppNavigator = createStackNavigator(
  {
    home: Home,
    dashboard: Dashboard,
  },
  {
    initialRouteName: "home"
  }
);

export default createAppContainer(AppNavigator);
