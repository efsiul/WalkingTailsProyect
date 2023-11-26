import React                    from 'react';
import MaterialCommunityIcons   from 'react-native-vector-icons/MaterialCommunityIcons';
import { ColorsStyle }          from './ColorsStyle';

export const IconOptionsApp = (_name: string = '', _color: string = ColorsStyle.secundary) => {
    let iconName: string = '';
    let sizeIcon: number = 0;

    switch (_name) {
        case 'persona':
            iconName = 'account';
            sizeIcon = 40;
            break;
            
        case 'pata':
            iconName = 'paw';
            sizeIcon = 40;
            break;
        case 'Configuración':
            iconName = 'paw';
            sizeIcon = 40;
            break;

        case 'Registro':
            iconName = 'help-circle';
            sizeIcon = 40;
            break;

        case 'Reportes':
            iconName = 'chart-bar';
            sizeIcon = 40;
            break;

        case 'BUSQUEDA':
            iconName = 'magnify';
            sizeIcon = 30;
            break;

        case 'CAMINATA':
            iconName = 'dog-service';
            sizeIcon = 40;
            break;

        case 'BANO':
            iconName = 'shower';
            sizeIcon = 40;
            break;

        case 'COMUNIDAD':
            iconName = 'account-group';
            sizeIcon = 40;
            break;

        case 'ENFERMERIA':
            iconName = 'hospital';
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
            iconName = 'timer-sand';
            sizeIcon = 30;
            break;
        case 'perro':
            iconName = 'dog';
            sizeIcon = 30;
            break;
        case 'cool':
            iconName = 'emoticon-cool-outline';
            sizeIcon = 30;
            break;
    }
    return (
        <MaterialCommunityIcons
            name={iconName}
            size={sizeIcon}
            color={_color}
        />
    );
};
