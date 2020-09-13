import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Feed4101037Navigator from '../features/Feed4101037/navigator';
import BlankScreen2101036Navigator from '../features/BlankScreen2101036/navigator';
import Dashboard12101035Navigator from '../features/Dashboard12101035/navigator';
import ArticleList1101034Navigator from '../features/ArticleList1101034/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Feed4101037: { screen: Feed4101037Navigator },
BlankScreen2101036: { screen: BlankScreen2101036Navigator },
Dashboard12101035: { screen: Dashboard12101035Navigator },
ArticleList1101034: { screen: ArticleList1101034Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
