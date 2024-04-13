import AccordionCheckboxes from '@/app/components/accordion-checkboxes';
import React from 'react';
import { COLOR, GENDER, PRICE, SIZE } from './data';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import Accordion from '@/app/ui/Accordion/Accordion';
import CheckBoxInnerLabel from '@/app/ui/CheckBoxes/CheckBoxInnnerLabel';
import CheckBox from '@/app/ui/CheckBoxes/CheckBox';
import { SiZebratechnologies } from 'react-icons/si';

const FilterShoes = () => {
    return (
        <div className="sticky top-[50px] w-full min-w-52 max-w-64">
            <div>
                <AccordionCheckboxes data={GENDER} />
                <AccordionCheckboxes data={PRICE} />
                <Accordion
                    className="border-b border-gray-300 py-3"
                    title={COLOR.title}
                >
                    {COLOR.options.map((option, index) => (
                        <ul key={index} className="grid grid-cols-3 gap-3 pl-2">
                            {option.map((item, index) => (
                                <li
                                    key={index}
                                    className="jusify-content-center grid gap-1"
                                >
                                    <CheckBox
                                        label={item}
                                        display="grid gap-1 justify-center justify-items-center"
                                        classInput="rounded-full h-7 w-7"
                                        color={item}
                                    />
                                </li>
                            ))}
                        </ul>
                    ))}
                </Accordion>
                <Accordion
                    className="border-b border-gray-300 py-3 "
                    title={SIZE.title}
                >
                    <ul className="grid grid-cols-3 gap-3 pl-2">
                        {SIZE.options.map((option, index) => (
                            <li
                                key={index}
                                className="grid grid-rows-[34px] justify-center"
                            >
                                <CheckBoxInnerLabel
                                    label={option}
                                    classLabel="mr-1 w-fit"
                                    classInput="rounded-md h-7 w-14"
                                />
                            </li>
                        ))}
                    </ul>
                </Accordion>
            </div>
        </div>
    );
};

export default FilterShoes;
