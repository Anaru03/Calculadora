import React from 'react';
import Display from './Display';
import Keyboard from '@/components/Keyboard';

const Calculator = () => {
    return (
        <div className="calculator">
            <Display />
            <Keyboard />
        </div>
    );
}

export default Calculator;
