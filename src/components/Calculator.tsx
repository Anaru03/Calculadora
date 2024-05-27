"use client";

import React from 'react';
import Display from '@/components/Display';
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
