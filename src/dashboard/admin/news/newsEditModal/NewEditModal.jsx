import React, { useEffect, useState } from 'react';
import { GenericModal } from '../../../../shared/components/modal/Modal';
import { GenericInput } from '../../../../shared/components/input/Input';
import { cardData } from '../../../../user/news/utils/cardData';

export const NewsEditModal = ({
  isEditOpen,
  setIsEditOpen,
  edit,
  editId,
  setIsLoading,
  data,
}) => {
  const [editInputText, setEditInputText] = useState({
    img: '',
    name: '',
    date: '',
    comment: '',
    title: '',
    descr: '',
    link: '',
  });
  const [oneData, setOneData] = useState({});

  // inputTextChanger
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditInputText({
      ...editInputText,
      [name]: value,
    });
  };

  // edit
  const handleEdit = () => {
    const newEditData = {
      id: editId,
      img: editInputText?.img,
      name: editInputText?.name,
      date: editInputText?.date,
      comment: editInputText?.comment,
      title: editInputText?.title,
      descr: editInputText?.descr,
      link: editInputText?.link,
    };

    edit(newEditData);
    setIsEditOpen(false);
    setIsLoading(true);
  };

  useEffect(() => {
    const oneFiltered = data.filter((value) => value.id == editId);
    setOneData(oneFiltered[0]);
  }, [editId]);

  useEffect(() => {
    setEditInputText({
      ...editInputText,
      img: oneData?.img,
      name: oneData?.name,
      date: oneData?.date,
      comment: oneData?.comment,
      title: oneData?.title,
      descr: oneData?.descr,
      link: oneData?.link,
    });
  }, [oneData]);

  return (
    <GenericModal
      title={'Edit News'}
      btn_text={'Save'}
      onClick={handleEdit}
      isOpen={isEditOpen}
      setIsOpen={setIsEditOpen}
    >
      {Object.keys(editInputText).map((value, index) => {
        return (
          <GenericInput
            key={index}
            labelText={value.charAt(0).toUpperCase() + value.slice(1)}
            name={value}
            value={editInputText[value]}
            onChange={(e) => handleInputChange(e)}
            type={value == 'date' ? 'date' : 'text'}
          />
        );
      })}
    </GenericModal>
  );
};

export default NewsEditModal;
