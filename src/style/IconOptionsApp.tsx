import React                    from 'react';
import MaterialCommunityIcons   from 'react-native-vector-icons/MaterialCommunityIcons';
import { ColorsStyle }          from './ColorsStyle';

export  const IconOptionsApp = (_name : string = '', _color : string = ColorsStyle.secundary) => {
    let iconName: string = '';
    let sizeIcon: number = 0;

    switch (_name) {
        case 'Volver al inicio':
            iconName = 'home-account';
            sizeIcon = 40;
            break;
        case 'Configuración':
            iconName = 'cog';
            sizeIcon = 40;
            break;

        case 'Registro':
            iconName = 'account-plus';
            sizeIcon = 40;
            break;

        case 'Reportes':
            iconName = 'chart-bar';
            sizeIcon = 40;
            break;

        case 'Videollamada':
            iconName = 'headset';
            sizeIcon = 40;
            break;

        case 'HOSPITALES':
            iconName = 'hospital-building';
            sizeIcon = 40;
            break;

        case 'APH':
            iconName = 'ambulance';
            sizeIcon = 40;
            break;

        case 'COMUNIDAD':
            iconName = 'account-group';
            sizeIcon = 40;
            break;

        case 'HGM':
            iconName = 'hospital-marker';
            sizeIcon = 40;
            break;

        case 'Help':
            iconName = 'help-circle';
            sizeIcon = 30;
            break;
        case 'eraser':
            iconName = 'eraser';
            sizeIcon = 30;
            break;
        case 'timer':
            iconName = 'timer';
            sizeIcon = 30;
            break;
    }
    return (
            <MaterialCommunityIcons
            name    ={iconName}
            size    = {sizeIcon}
            color   = {_color}
        />
    );
};
