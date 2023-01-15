import React from 'react';


const StaffTable = (props) => {
    return (
        <tr>
            <td>
                {props.obj.name}
            </td>
            <td>
                {props.obj.comment}
            </td>
            <td>
                {props.obj.createdAt}
            </td>
        </tr>
    )
}

export default StaffTable