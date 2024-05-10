import React from 'react';
import * as CResume from './style';
import ResumeItem from '../ResumeItem';
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign,
} from "react-icons/fa";

const Resume = () => {
    return (
        <CResume.Container>
            <ResumeItem title={"Entradas"} icon={FaRegArrowAltCircleUp} value={"1000"}/>
            <ResumeItem title={"Saídas"} icon={FaRegArrowAltCircleDown} value={"1000"}/>
            <ResumeItem title={"Total"} icon={FaDollarSign} value={"1000"}/>
        </CResume.Container>
    );
};

export default Resume;