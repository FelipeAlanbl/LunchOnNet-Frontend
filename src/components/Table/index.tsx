import React from 'react'
import { TableModel } from './style';

function Table({ fields, children }: { fields: string[], children: JSX.Element }) {

  function renderFields(){
    return fields.map((field, index) => <th key={index}>{field}</th>)
  }

  return (
    <TableModel>
      <thead>
        <tr>
          {renderFields()}
        </tr>
      </thead>
        {children}
    </TableModel>
  )
}

export default Table