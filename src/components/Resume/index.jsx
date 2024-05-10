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
            <ResumeItem title={"Entradas"} icon={FaRegArrowAltCircleUp} value={income}/>
            <ResumeItem title={"Saídas"} icon={FaRegArrowAltCircleDown} value={expense}/>
            <ResumeItem title={"Total"} icon={FaDollarSign} value={total}/>
        </CResume.Container>
    );
};

export default Resume;