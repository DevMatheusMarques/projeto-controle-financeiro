import React from 'react';
import * as CGrid from './style';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash,
} from "react-icons/fa";

const GridItem = ({item, onDelete}) => {
    return(
        <CGrid.Tr>
            <CGrid.Td>{item.desc}</CGrid.Td>
            <CGrid.Td>{`R$ ${item.amount}`}</CGrid.Td>
            <CGrid.Td alignCenter>
                {item.expense ? (
                    <FaRegArrowAltCircleDown color={"red"} title={"Valor referente a uma saída"}/>
                ) : (
                    <FaRegArrowAltCircleUp color={"green"} title={"Valor referente a uma entrada"}/>
                )}
                </CGrid.Td>
            <CGrid.Td alignCenter>
                <FaTrash color={"red"} onClick={() => onDelete(item.id)} />
            </CGrid.Td>
        </CGrid.Tr>
    );
}

export default GridItem;