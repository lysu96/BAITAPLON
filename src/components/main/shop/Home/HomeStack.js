import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Collection from './Collection';
import Category from './Category.js';
import Product from './Product';

const HomeStack = createStackNavigator({
  HomeStack: Product,
  Category: Category,
  Collection: Collection,
});

export default createAppContainer(HomeStack);
