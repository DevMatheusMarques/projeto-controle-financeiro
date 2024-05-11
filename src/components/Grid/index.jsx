import React from 'react';
import GridItem from '../GridItem';
import * as CGrid from './style';

const Grid = ({ itens, setItens }) => {
    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };

    return(
        <CGrid.Table>
            <CGrid.Thead>
                <CGrid.Tr>
                    <CGrid.Th width={40}>Descrição</CGrid.Th>
                    <CGrid.Th width={40}>Valor</CGrid.Th>
                    <CGrid.Th width={10} alignCenter>Tipo</CGrid.Th>
                    <CGrid.Th width={10}></CGrid.Th>
                </CGrid.Tr>
            </CGrid.Thead>
            <CGrid.Tbody>
                {itens?.map((item, index) => (
                    <GridItem key={index} item={item} onDelete={onDelete}/>
                ))}
            </CGrid.Tbody>
        </CGrid.Table>
    );
}

export default Grid;