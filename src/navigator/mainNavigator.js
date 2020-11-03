import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen213778Navigator from '../features/BlankScreen213778/navigator';
import BlankScreen113777Navigator from '../features/BlankScreen113777/navigator';
import BlankScreen013701Navigator from '../features/BlankScreen013701/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen213778: { screen: BlankScreen213778Navigator },
BlankScreen113777: { screen: BlankScreen113777Navigator },
BlankScreen013701: { screen: BlankScreen013701Navigator },

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
