import React from 'react';
import { Icon } from '@iconify/react';
import { CircularProgress } from '@mui/material';

import classes from './NewsTable.module.css';

export const NewsTable = ({
  data,
  setData,
  setIsLoading,
  isLoading,
  setEditId,
  setIsEditOpen,
}) => {
  //   delete
  const dataDelete = (id) => {
    const filtered = data?.filter((value) => value.id !== id);
    setData(filtered);
    setIsLoading(true);
  };

  // edit
  const handleEdit = (id) => {
    setIsEditOpen(true);
    setEditId(id);
  };

  return (
    <div className={classes['table_wrapper']}>
      <table className={classes['table_container']}>
        <thead>
          <tr className={classes['table_header_box']}>
            {Object.keys(data[0]).map((value) => {
              return (
                <th key={value} className={classes['table_header']}>
                  {value.toUpperCase()}
                </th>
              );
            })}
            <th className={`${classes['table_header']} ${classes['action']}`}>
              ACTION
            </th>
          </tr>
        </thead>
        {isLoading ? (
          <CircularProgress className={classes['loader']} />
        ) : (
          data?.map((value, index) => {
            return (
              <tbody key={value.id}>
                <tr className={classes['table_sections']}>
                  <td className={classes['table_text']}>{index + 1}</td>
                  <td className={classes['table_text']}>img</td>
                  <td className={classes['table_text']}>{value.name}</td>
                  <td className={classes['table_text']}>{value.date}</td>
                  <td className={classes['table_text']}>{value.comment}</td>
                  <td className={classes['table_text']}>
                    {value.title.length > 25 ? (
                      <span>{value.title.slice(0, 25)}...</span>
                    ) : (
                      value.title
                    )}
                  </td>
                  <td className={classes['table_text']}>
                    {value.descr.length > 25 ? (
                      <span>{value.descr.slice(0, 25)}...</span>
                    ) : (
                      value.descr
                    )}
                  </td>
                  <td className={classes['table_text']}>{value.link}</td>
                  <td
                    className={`${classes['table_text']} ${classes['action_icons_box']}`}
                  >
                    <Icon
                      onClick={() => dataDelete(value.id)}
                      className={classes['action_icons']}
                      icon='ph:trash'
                    />
                    <Icon
                      className={classes['action_icons']}
                      icon='ic:baseline-edit'
                      onClick={() => handleEdit(value.id)}
                    />
                  </td>
                </tr>
              </tbody>
            );
          })
        )}
      </table>
    </div>
  );
};

export default NewsTable;
