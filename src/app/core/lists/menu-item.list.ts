import { RoleEnum } from '../enums';
import { MenuItem } from '../models';

export const MenuItemList: MenuItem[] = [
  {
    state: 'home',
    name: 'Home',
    type: 'link',
    icon: 'home'
  },
  {
    state: 'home/target',
    name: 'Target',
    type: 'link',
    icon: 'drive_file_move'
  },
  {
    state: 'home/bin-variables',
    name: 'Bin Variables',
    type: 'link',
    icon: 'settings_input_component'
  },
  {
    state: 'home/analyze-variables',
    name: 'Analyze Variables',
    type: 'link',
    icon: 'screen_search_desktop'
  },
  {
    state: 'home/train',
    name: 'Train',
    type: 'link',
    icon: 'repeat_on'
  },
  {
    state: 'home/predict',
    name: 'Predict',
    type: 'link',
    icon: 'online_prediction'
  },
  {
    state: 'home/backtest',
    name: 'Backtest',
    type: 'link',
    icon: 'question_answer'
  },
  {
    state: 'home/report',
    name: 'Report',
    type: 'link',
    icon: 'file_copy'
  },
  {
    state: 'home/deploy',
    name: 'Deploy',
    type: 'link',
    icon: 'wifi_protected_setup'
  }



];
