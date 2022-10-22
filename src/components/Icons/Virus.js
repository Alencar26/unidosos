import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const Virus = (props) => {

    const { width = 40, height = 40  } = props;

    return (
        <Svg 
            width="30" 
            height="30" 
            viewBox="0 0 30 30" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
        >
            <Path 
                d="M17.1461 2.43384L21.8136 4.22634L20.9173 6.56009L19.7498 6.11134L18.8173 8.54259C19.7911 9.12009 20.6223 9.91009 21.2486 10.8501L23.6273 9.79134L23.1186 8.64884L25.4023 7.63259L27.4361 12.2001L25.1523 13.2163L24.6436 12.0751L22.2661 13.1338C22.4186 13.7301 22.4998 14.3563 22.4998 15.0001C22.4998 15.5076 22.4498 16.0038 22.3536 16.4838L24.7836 17.4163L25.2311 16.2501L27.5661 17.1463L25.7736 21.8138L23.4398 20.9176L23.8873 19.7513L21.4573 18.8176C20.8798 19.7913 20.0898 20.6226 19.1498 21.2488L20.2086 23.6276L21.3511 23.1188L22.3673 25.4026L17.7998 27.4363L16.7836 25.1526L17.9248 24.6438L16.8661 22.2663C16.2698 22.4188 15.6436 22.5001 14.9998 22.5001C14.4911 22.5001 13.9948 22.4501 13.5148 22.3526L12.5823 24.7838L13.7498 25.2313L12.8536 27.5663L8.18609 25.7738L9.08234 23.4401L10.2473 23.8876L11.1823 21.4576C10.2086 20.8801 9.37734 20.0901 8.74984 19.1501L6.37109 20.2088L6.87984 21.3513L4.59609 22.3676L2.56234 17.8001L4.84609 16.7838L5.35359 17.9263L7.73234 16.8663C7.58109 16.2701 7.49984 15.6438 7.49984 15.0001C7.49984 14.4926 7.54984 13.9963 7.64609 13.5163L5.21484 12.5838L4.76859 13.7501L2.43359 12.8538L4.22609 8.18759L6.55984 9.08384L6.11109 10.2501L8.54234 11.1838C9.11984 10.2088 9.90984 9.37759 10.8498 8.75009L9.79109 6.37134L8.64859 6.88009L7.63234 4.59634L12.1998 2.56384L13.2161 4.84759L12.0748 5.35634L13.1336 7.73384C13.7298 7.58134 14.3561 7.50009 14.9998 7.50009C15.5073 7.50009 16.0036 7.55009 16.4836 7.64634L17.4148 5.21509L16.2498 4.76884L17.1461 2.43384V2.43384ZM14.9998 10.0001C12.2373 10.0001 9.99984 12.2376 9.99984 15.0001C9.99984 17.7626 12.2373 20.0001 14.9998 20.0001C17.7623 20.0001 19.9998 17.7626 19.9998 15.0001C19.9998 12.2376 17.7623 10.0001 14.9998 10.0001ZM14.3748 16.0826C14.9723 16.4276 15.1773 17.1926 14.8323 17.7901C14.4873 18.3876 13.7223 18.5926 13.1248 18.2476C12.5273 17.9026 12.3223 17.1376 12.6673 16.5401C13.0123 15.9426 13.7773 15.7376 14.3748 16.0826ZM17.4998 13.7501C18.1898 13.7501 18.7498 14.3101 18.7498 15.0001C18.7498 15.6901 18.1898 16.2501 17.4998 16.2501C16.8098 16.2501 16.2498 15.6901 16.2498 15.0001C16.2498 14.3101 16.8098 13.7501 17.4998 13.7501ZM14.8323 12.2101C15.1773 12.8076 14.9723 13.5726 14.3748 13.9176C13.7773 14.2626 13.0123 14.0576 12.6673 13.4601C12.3223 12.8626 12.5273 12.0976 13.1248 11.7526C13.7223 11.4076 14.4873 11.6126 14.8323 12.2101Z" 
                fill="white"
            />
        </Svg>

    );
}
