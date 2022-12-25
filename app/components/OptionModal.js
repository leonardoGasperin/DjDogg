import React from 'react';
import { Modal, View, Text, TouchableWithoutFeedback } from 'react-native';
import { modalStyle } from '../../styles/CommonStyles';

const OptionModal = ({visible, currentItem, onClose, onOpt1, onOpt2}) => {
    const {filename} = currentItem
  return (
    <Modal animationType='slide' transparent visible={visible}>
        <View style={modalStyle.container}>
            <Text style={{paddingLeft: 10, paddingTop: 5}}>EXEMPLO MENU</Text>
            <View style={modalStyle.modalContainer}>
                <TouchableWithoutFeedback onPress={onOpt1}>
                    <Text style={modalStyle.optionText}>OPT 1</Text>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={onOpt2}>
                    <Text style={modalStyle.optionText}>OPT 2</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
        <TouchableWithoutFeedback onPress={onClose}>
            <View style={{flex: 1, bottom: '15%'}}/>
        </TouchableWithoutFeedback>
    </Modal>
  );
}

export default OptionModal;