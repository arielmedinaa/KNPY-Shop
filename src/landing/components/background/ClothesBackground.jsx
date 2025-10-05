import React from 'react'
import ClothesField from '../ClothesField';

const ClothesBackground = ({ children, className = "" }) => {
    return (
        <div className={`relative ${className}`}>
            <ClothesField />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}

export default ClothesBackground