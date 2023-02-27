import React, {useCallback} from "react";
import {TableHeader} from "./components/TableHeader";
import {TableChildren} from "./components/TableChildren";
import {TItem} from "./types";



export const MagicTable = () => {
  const [list, setList] = React.useState<TItem[]>(
      [...new Array(20)].map((_, index) => ({
        index: index + 1,
        value: Math.floor(Math.random() * 100)
      }))
  );


  const onRemove = useCallback((index: number) => {
    return  setList(list.filter((it) => it.index !== index));
  }, [list]);


  return (
      <div>
        <h2>Magick table</h2>
        <table cellPadding="3" cellSpacing="3">
          <TableHeader />
          <tbody>
          {list.map((it) => (
              <TableChildren key={it.index} item={it} onRemove={onRemove} />
          ))}
          </tbody>
        </table>
      </div>
  );
}