import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Sos = (props) => {

    const { width = 70, height = 70  } = props;

    return (
            <Svg 
                width={width}
                height={height} 
                viewBox="0 0 70 70" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M8.715 34.9988C6.15563 34.9988 4.0775 33.0563 4.0775 30.6676C4.0775 28.2788 6.15563 26.3319 8.715 26.3319C10.6094 26.3319 12.285 27.3951 13.0069 29.0401C13.4794 30.1294 14.6738 30.5932 15.6669 30.0769C16.16 29.8039 16.5323 29.3553 16.7098 28.8203C16.8874 28.2853 16.8571 27.7031 16.625 27.1894C15.9576 25.6448 14.8524 24.3295 13.4459 23.4058C12.0395 22.4822 10.3933 21.9907 8.71063 21.9919C6.41087 21.9954 4.20668 22.9123 2.58297 24.541C0.959256 26.1696 0.0490192 28.3766 0.0525002 30.6763C0.0559811 32.9761 0.972895 35.1803 2.60153 36.804C4.23017 38.4277 6.43712 39.3379 8.73688 39.3344C11.3225 39.3344 13.405 41.2944 13.405 43.6963C13.405 46.0894 11.3181 48.0451 8.73688 48.0451C6.82063 48.0451 5.1275 46.9688 4.40563 45.3151C3.94188 44.2213 2.73875 43.7576 1.74563 44.2651C0.739375 44.7726 0.315 46.0719 0.783125 47.1526C1.45164 48.7072 2.56152 50.0316 3.97529 50.9616C5.38906 51.8917 7.04461 52.3866 8.73688 52.3851C10.9946 52.3106 13.1349 51.3607 14.7047 49.7363C16.2745 48.1118 17.1507 45.9403 17.1478 43.6813C17.145 41.4224 16.2633 39.2531 14.6895 37.6326C13.1156 36.0121 10.973 35.0676 8.715 34.9988V34.9988Z" 
                    fill="white"
                />
                <Path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M56.7831 34.947C54.2543 34.947 52.1937 33.0089 52.1937 30.6289C52.1937 28.2533 54.2543 26.3152 56.7831 26.3152C58.6687 26.3152 60.34 27.3739 61.0531 29.0145C61.5168 30.0952 62.7068 30.5633 63.6956 30.047C64.6931 29.5395 65.1087 28.2489 64.6406 27.1639C63.9801 25.6286 62.8844 24.3203 61.4888 23.4005C60.0932 22.4807 58.4589 21.9898 56.7875 21.9883C52.0625 21.9883 48.2256 25.8689 48.2256 30.6289C48.2256 35.3977 52.0625 39.2652 56.8268 39.2652C59.3862 39.2652 61.46 41.2164 61.46 43.6008C61.46 45.9939 59.3862 47.9364 56.8268 47.9364C54.9281 47.9364 53.2437 46.8689 52.535 45.2152C52.0625 44.1345 50.8856 43.6708 49.8881 44.1783C48.895 44.6814 48.475 45.972 48.9387 47.0483C49.5999 48.594 50.7001 49.9116 52.1031 50.8378C53.5061 51.7641 55.1501 52.2582 56.8312 52.2589C59.1202 52.2496 61.3121 51.3329 62.9262 49.7099C64.5402 48.0868 65.4447 45.8898 65.4412 43.6008C65.4366 41.3063 64.5228 39.1072 62.8999 37.4852C61.2771 35.8632 59.0775 34.9505 56.7831 34.947V34.947Z" 
                    fill="white"
                />
                <Path 
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d="M32.9393 21.9883H32.6156C28.2231 21.9883 21.9231 25.5145 21.9231 29.8414V44.5108C21.9231 48.8464 28.2231 52.3683 32.6156 52.3683H32.9393C37.3362 52.3683 43.6318 48.8464 43.6318 44.5108V29.8414C43.6362 25.5145 37.3362 21.9883 32.9393 21.9883V21.9883ZM39.5281 43.5439C39.5281 46.2389 35.6125 48.4308 32.8781 48.4308H32.6725C29.9425 48.4308 26.0181 46.2389 26.0181 43.5439V30.8652C26.0181 28.1745 29.9425 25.9783 32.6725 25.9783H32.8781C35.6125 25.9783 39.5281 28.1745 39.5281 30.8652V43.5439Z" 
                    fill="white"
                />
            </Svg>
    );
}