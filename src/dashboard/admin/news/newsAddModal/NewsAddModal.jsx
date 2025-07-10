import React, { useState } from 'react';
import { GenericInput } from '../../../../shared/components/input/Input';
import { GenericModal } from '../../../../shared/components/modal/Modal';
import { cardData } from '../../../../user/news/utils/cardData';

export const NewsAddModal = ({ save, isOpen, setIsOpen }) => {
  const [addInputText, setAddInputText] = useState({
    img: '',
    name: '',
    date: '',
    comment: '',
    title: '',
    descr: '',
    link: '',
  });

  // inputTextChanger
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddInputText({
      ...addInputText,
      [name]: value,
    });
  };

  // adding
  const handleAdd = () => {
    const newData = {
      id: cardData.length + 1,
      img: '',
      name: addInputText?.name,
      date: addInputText?.date,
      comment: addInputText?.comment,
      title: addInputText?.title,
      descr: addInputText?.descr,
      link: addInputText?.link,
    };

    // request(
    //   { url: '', method: 'post' },
    //   {
    //     newData,
    //   }
    // );

    if (addInputText?.link.length !== 0) {
      save(newData);
      setIsOpen(false);
    }
  };

  return (
    <GenericModal
      title={'Add News'}
      btn_text={'Save'}
      onClick={handleAdd}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      {Object.keys(addInputText).map((value, index) => {
        return (
          <GenericInput
            key={index}
            labelText={value.charAt(0).toUpperCase() + value.slice(1)}
            name={value}
            onChange={(e) => handleInputChange(e)}
            type={value == 'date' ? 'date' : 'text'}
          />
        );
      })}
    </GenericModal>
  );
};

export default NewsAddModal;
