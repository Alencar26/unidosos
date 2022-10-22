import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Alcool = (props) => {

    const { width = 40, height = 40  } = props;

    return (
        <Svg 
            width="25" 
            height="25" 
            viewBox="0 0 25 25" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path 
                d="M24.7206 2.025C24.8657 1.84207 24.9567 1.62216 24.9832 1.39018C25.0097 1.15821 24.9707 0.92345 24.8706 0.7125C24.7693 0.499785 24.61 0.320034 24.4109 0.193971C24.2119 0.0679082 23.9812 0.00066696 23.7456 0H1.24563C1.01003 0.00066696 0.779403 0.0679082 0.580356 0.193971C0.38131 0.320034 0.221944 0.499785 0.120633 0.7125C0.0205622 0.92345 -0.0184263 1.15821 0.00808485 1.39018C0.034596 1.62216 0.125547 1.84207 0.270633 2.025L11.2456 15.75V22.5H4.05813C3.72661 22.5 3.40867 22.6317 3.17425 22.8661C2.93983 23.1005 2.80813 23.4185 2.80813 23.75C2.80813 24.0815 2.93983 24.3995 3.17425 24.6339C3.40867 24.8683 3.72661 25 4.05813 25H20.9331C21.2647 25 21.5826 24.8683 21.817 24.6339C22.0514 24.3995 22.1831 24.0815 22.1831 23.75C22.1831 23.4185 22.0514 23.1005 21.817 22.8661C21.5826 22.6317 21.2647 22.5 20.9331 22.5H13.7456V15.75L24.7206 2.025ZM3.84563 2.5H21.1456L18.1456 6.25H6.89563L3.84563 2.5ZM12.4956 13.3125L8.84563 8.75H16.1456L12.4956 13.3125Z" 
                fill="white"
            />
        </Svg>
    );
}