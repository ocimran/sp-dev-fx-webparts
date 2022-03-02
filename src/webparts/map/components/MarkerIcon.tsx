import { Icon } from 'office-ui-fabric-react';
import * as React from 'react';
import { IMarkerIcon } from './IMapProps';


export const MarkerIcon: React.FunctionComponent<IMarkerIcon> = (iconProperties): JSX.Element => {
    
    const iconColor: React.CSSProperties = {
        color: iconProperties.iconColor.slice()
    };

    return (
    <span>
        <svg height="36px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" fill={iconProperties.markerColor}>
          {/* Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
          <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0z"/>
        </svg>
        <span className="map-icon" style={iconColor}><Icon iconName={iconProperties.iconName} /></span>
    </span>
    );
}