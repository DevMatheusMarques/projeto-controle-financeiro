import React from 'react';
import * as CResume from './style';
import ResumeItem from '../ResumeItem';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = ({income, expense, total}) => {
    return (
        <CResume.Container>
            <ResumeItem title={"Entradas"} Icon={FaRegArrowAltCircleUp} value={income}/>
            <ResumeItem title={"Saídas"} Icon={FaRegArrowAltCircleDown} value={expense}/>
            <ResumeItem title={"Total"} Icon={FaDollarSign} value={total}/>
        </CResume.Container>
    );
};

export default Resume;