import React from 'react';


const StaffTable = (props) => {
    return (
        <tr>
            <td>
                {props.obj.data}
            </td>
            <td>
                {props.obj.comment}
            </td>
            <td>
                {props.obj.time}
            </td>
            <td>
                {props.obj.date}
            </td>
        </tr>
    )
}

export default StaffTable