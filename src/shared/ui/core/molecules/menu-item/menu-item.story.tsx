import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';

import { MenuItem } from './menu-item';
import { Icons } from '../../atoms';

storiesOf('ui/molecules', module).add('menu-item', () => {
  return (
    <MenuItem
      left={<Icons.Settings />}
      title={text('title', 'Настройки')}
      right={<Icons.ChevronRight />}
      onPress={() => null}
    />
  );
});
