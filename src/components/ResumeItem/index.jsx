import React from 'react';
import * as CResumeItem from './style';

const ResumeItem = ({title, Icon, value}) => {
    return (
        <CResumeItem.Container>
            <CResumeItem.Header>
                <CResumeItem.HeaderTitle>
                    {title}
                </CResumeItem.HeaderTitle>
            </CResumeItem.Header>
            <CResumeItem.Total>
                {value}
            </CResumeItem.Total>
        </CResumeItem.Container>
    );
};

export default ResumeItem;