import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';

function FullOption(props) {
    const [selected, setSelected] = useState(0);
    const [hovered, setHovered] = useState(undefined);
    const data = props.data.map((entry, i) => {
        if (hovered === i) {
            return Object.assign(Object.assign({}, entry), { color: 'grey' });
        }
        return entry;
    });
    const lineWidth = 60;
    return (React.createElement(PieChart, { data: data, radius: PieChart.defaultProps.radius - 6, lineWidth: 60, segmentsStyle: { transition: 'stroke .3s', cursor: 'pointer' }, segmentsShift: (index) => (index === selected ? 6 : 1), animate: true, label: ({ dataEntry }) => Math.round(dataEntry.percentage) + '%', labelPosition: 100 - lineWidth / 2, labelStyle: {
            fill: '#000',
            fontSize: 8,
            fontWeight: 'bold',
            opacity: 0.75,
            pointerEvents: 'none',
        }, onClick: (_, index) => {
            setSelected(index === selected ? undefined : index);
        }, onMouseOver: (_, index) => {
            setHovered(index);
        }, onMouseOut: () => {
            setHovered(undefined);
        } }));
}
export default FullOption;