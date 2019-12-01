import React from "react";
import {
  Modal,
  ModalContent,
  ModalDescription,
  ModalHeader
} from "semantic-ui-react";
import {connect} from "react-redux";

import {closeModal} from "../../store/actions/modalActions";

const actions = {
    closeModal
}

const TestModal = ({closeModal}) => {
  return (
    <Modal closeIcon="close" open={true} onClose={closeModal}>
      <ModalHeader>Test Modal</ModalHeader>
      <ModalContent>
        <ModalDescription>
          <p>Test Modal... nothing to see here</p>
        </ModalDescription>
      </ModalContent>
    </Modal>
  );
};

export default connect(null, actions)(TestModal);
