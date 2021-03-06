import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen413782Navigator from '../features/BlankScreen413782/navigator';
import BlankScreen413780Navigator from '../features/BlankScreen413780/navigator';
import BlankScreen313779Navigator from '../features/BlankScreen313779/navigator';
import BlankScreen113777Navigator from '../features/BlankScreen113777/navigator';
import BlankScreen013701Navigator from '../features/BlankScreen013701/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen413782: { screen: BlankScreen413782Navigator },
BlankScreen413780: { screen: BlankScreen413780Navigator },
BlankScreen313779: { screen: BlankScreen313779Navigator },
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
