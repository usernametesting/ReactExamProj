import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

const iconList = Object.keys(solidIcons)
  .filter(key => key !== 'fas' && key !== 'prefix')
  .map(key => solidIcons[key]);
library.add(...iconList);

function IconComponent({ iconName }) {
  const icon = solidIcons[iconName];

  return (<FontAwesomeIcon icon={icon} />);
}

export default IconComponent;
