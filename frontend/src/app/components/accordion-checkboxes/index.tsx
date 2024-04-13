import React, { FC } from 'react';
import Accordion from '../../ui/Accordion/Accordion';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import CheckBox from '@/app/ui/CheckBoxes/CheckBox';

interface IAccordionCheckboxes {
    data: {
        title: string;
        options: string[];
    };
}

const AccordionCheckboxes: FC<IAccordionCheckboxes> = ({ data }) => {
    return (
        <Accordion
            className="border-b border-gray-300 py-3"
            title={data.title}
            openIcon={<RiArrowUpSLine />}
            closeIcon={<RiArrowDownSLine />}
        >
            <div className="grid gap-2 py-2">
                {data.options.map((option, index) => (
                    <CheckBox key={index} label={option} />
                ))}
            </div>
        </Accordion>
    );
};

export default AccordionCheckboxes;
