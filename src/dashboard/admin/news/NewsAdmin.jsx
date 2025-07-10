import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { cardData } from '../../../user/news/utils/cardData';
import NewsTable from './newsTable/NewsTable';
import NewsAddModal from './newsAddModal/NewsAddModal';
import NewsEditModal from './newsEditModal/NewEditModal';

import classes from './NewsAdmin.module.css';

export const NewsAdmin = () => {
  const [data, setData] = useState(cardData);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  // save
  const save = (newData) => {
    setData([newData, ...data]);
    setIsLoading(true);
  };

  //   edit
  const edit = (newEditData) => {
    const newEdition = data.map((value) =>
      value.id === editId ? newEditData : value
    );
    setData(newEdition);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [data]);

  return (
    <div className={classes['container']}>
      <h1>News</h1>
      <div className={classes['flex']}>
        <Icon
          onClick={() => setIsOpen(true)}
          className={classes['add_icon']}
          icon='icon-park-solid:add'
        />
        <div className={classes['search_box']}>
          <input
            placeholder='Search Smth'
            className={classes['search_input']}
            type='text'
          />
          <Icon
            className={classes['search_icon']}
            icon='material-symbols:search'
          />
        </div>
      </div>
      <NewsTable
        data={data}
        setData={setData}
        setIsLoading={setIsLoading}
        isLoading={isLoading}
        setIsEditOpen={setIsEditOpen}
        setEditId={setEditId}
      />

      <NewsAddModal save={save} isOpen={isOpen} setIsOpen={setIsOpen} />
      <NewsEditModal
        data={data}
        edit={edit}
        isEditOpen={isEditOpen}
        setIsEditOpen={setIsEditOpen}
        editId={editId}
        setIsLoading={setIsLoading}
      />
    </div>
  );
};
