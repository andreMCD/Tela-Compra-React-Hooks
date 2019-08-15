import React from "react";
import ReactDOM from "react-dom";
import { Modal } from "../style/modal";

const SectionModal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <Modal>
          <div className="modalContent">
            <p>Produto Adicionado ao Carrinho!</p>
            <button type="button" onClick={hide}>
              Fechar
            </button>
          </div>
        </Modal>,
        document.body
      )
    : null;

export default SectionModal;
