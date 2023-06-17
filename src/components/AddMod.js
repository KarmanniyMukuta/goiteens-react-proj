
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './Pas.css'

import './MainHeader.js'

function AddMod(){
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
const openModal = () => {
  setModalIsOpen(true);
};

const closeModal = () => {
  setModalIsOpen(false);
};




const modalContent = (

    <body class="body_add">
    <div id="container_add">
    <div class="form-wrap">
      <h1>Додати стартап</h1>
      <p>Це займе одну хвилинку</p>
      <form>
        <div class="form-group">
          <label for="first-name">Автор стартапу <i>*</i></label>
          <input type="text" placeholder="ім'я, призвище, побатькові" name="firstName" id="first-name" required></input>
        </div>
        <div class="form-group">
          <label for="email">Контактні данні <i>*</i></label>
          <input type="email" placeholder="Ваша ел.пошта" name="email" id="email" required></input>
        </div>
        <div class="form-group">
          <label for="password">Номер банківської картки <i>*</i></label>
          <input type="password" name="password" id="password" required></input>
        </div>
        <div class="form-group">
          <label for="text">Назва стартапу <i>*</i></label>
          <input type="text" name="text" id="text" required></input>
        </div>
        






        
        <div class="form-group">
          <label for="text">Опис стартапу <i>*</i></label>
          <input type="text" name="text" id="text_d" required></input>
        </div>
        <button type="submit" class="btn">Sign Up</button>
        <p class="bottom-text"><small>Натискаючи кнопку відправити ви погоджуєтесь з нашими умовами <a class="a_add" href="#">Terms & Conditions</a> та <a class="a_add" href="#">Privacy Policy</a>.</small></p>
      </form>
    </div>
    <footer class="footer_add">
      <p>Вже є акаунт? <a class="a_add" href="#">перейди на свою сторінку</a></p>
    </footer>
  </div>
      </body>
   
 
    


 /*<div>
      <h2>Додати стартап</h2>
      <button onClick={closeModal}>Повернутись</button>
      <p>Автор стартапу <i>*</i></p>
      
</div>*/

    
   
  );
  

  
  
  return (
    <div>
      <button onClick={openModal}>Открыть модальное окно</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {modalContent}
        
      </Modal>
      
    </div>
    
  );  

;}
export default AddMod
 
//ИСХОД


