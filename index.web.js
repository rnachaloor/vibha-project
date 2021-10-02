import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import {AuthProvider} from './AuthProvider';
if (module.hot) {
  module.hot.accept();
}

const Providers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

AppRegistry.registerComponent(appName, () => Providers);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
