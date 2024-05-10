import React from 'react';
import GridItem from '../ResumeItem';
import * as CGrid from './style';

const Grid = ({itens, setItens}) => {
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
                    <GridItem key={index} item={item}/>
                ))}
            </CGrid.Tbody>
        </CGrid.Table>
    );
}

export default Grid;