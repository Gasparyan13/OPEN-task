import React, {memo, useCallback, useState} from "react";
import {Props} from "../../types";

export const TableChildren: React.FC<Props> = memo(({ item, onRemove }) => {
  const  [count, setCount] = useState<number>(0)

    const onUpdate = useCallback(() => {
        setCount(count + 1)
    },[count])

    const handleRemove = useCallback(() => {

        const {index} = item
        console.log(index)
        onRemove(index)
    },[item, onRemove])

    return (
        <tr>
            <td>{item.index}</td>
            <td>{item.value}</td>
            <td>{count}</td>
            <td>
                <button onClick={() =>handleRemove()}> remove </button>
            </td>
            <td>
                <button onClick={onUpdate}> update </button>
            </td>
        </tr>
    );
});

