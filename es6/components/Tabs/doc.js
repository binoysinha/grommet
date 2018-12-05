function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import { describe, PropTypes } from 'react-desc';
import { genericProps, getAvailableAtBadge } from '../../utils';
export var doc = function doc(Tabs) {
  var DocumentedTabs = describe(Tabs).availableAt(getAvailableAtBadge('Tabs')).description('A tabular view component.').usage("import { Tabs, Tab } from 'grommet';\n<Tabs>\n  <Tab title='Tab 1'>...</Tab>\n  <Tab title='Tab 2'>...</Tab>\n</Tabs>");
  DocumentedTabs.propTypes = _extends({}, genericProps, {
    activeIndex: PropTypes.number.description("Active tab index. If specified, Tabs will be a controlled component.\nThis means that future tab changes will not work unless you subscribe to\nonActive function and update activeIndex accordingly."),
    children: PropTypes.node.description('Array of Tab.').isRequired,
    flex: PropTypes.oneOfType([PropTypes.oneOf(['grow', 'shrink']), PropTypes.bool]).description('Whether flex-grow and/or flex-shrink is true.'),
    justify: PropTypes.oneOf(['start', 'center', 'end']).description('How to align the tabs along the main axis.').defaultValue('center'),
    messages: PropTypes.shape({
      tabContents: PropTypes.string
    }).description('Custom messages for Tabs. Used for accessibility by screen readers.').defaultValue({
      tabContents: 'Tab Contents'
    }),
    onActive: PropTypes.func.description("Function that will be called with the active tab index when the\ncurrently active tab changes.")
  });
  return DocumentedTabs;
};