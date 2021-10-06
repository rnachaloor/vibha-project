import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import {AuthProvider} from './AuthProvider';
import {Routes} from './Routes';
if (module.hot) {
  module.hot.accept();
}

// const Providers = () => {
//   return (
//     <AuthProvider>
//       <Routes />
//     </AuthProvider>
//   );
// };

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
