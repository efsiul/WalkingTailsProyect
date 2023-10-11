import React                                    from 'react';
import { Modal, Text, TouchableOpacity, View }  from 'react-native';
import { ModalStyle } from '../style/ModalStyle';




export const ModalInfo = ({show, onClose}:{show : boolean, onClose:any})=>{

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={show}
                onRequestClose={onClose}
            >
                <View style = {ModalStyle.modalContainer}>
                    <View style = {ModalStyle.modalBackground}>
                        <View>
                            <Text style = {ModalStyle.titleModal}> Info Servicio </Text>
                        </View>
                        <Text style = {ModalStyle.textModal}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Atque itaque sint excepturi, eveniet quia vel eum 
                            beatae modi magni voluptatem. Consequuntur velit corrupti eveniet molestiae 
                            quisquam excepturi provident eius quibusdam quaerat.
                        </Text>
                        <TouchableOpacity
                            style       =   {ModalStyle.botton}
                            onPress={onClose}
                        >
                            <Text style =   {ModalStyle.txtBtn}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
