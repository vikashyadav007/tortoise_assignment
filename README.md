# tortoise_assignment
This App Shows one Warning 

 WARN  ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.

To Remove this We have to do one extra thing
After installing packages 
 go to
 Node Modules > react-native-video > Videos.js file 
Open Video.js file

Remove ViewPropTypes from 'react-native from line #3
import {...., ViewPropTypes, ...} from 'react-native'; 

and make a separate Import

import {ViewPropTypes} from 'deprecated-react-native-prop-types';

and close the app
Again re run the app the warning will we removed.
