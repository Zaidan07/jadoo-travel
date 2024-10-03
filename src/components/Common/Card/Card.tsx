import React from 'react';
import Text from '../Text/Text';

type CardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const Card: React.FC<CardProps> = ({ icon, title, description }) => {
  return (
    <div className='relative w-[302px] h-[347px] group'>
      {/* Orange Box */}
      <div className='absolute -left-4 bottom-4 w-[100px] h-[100px] bg-[#DF6951] rounded-tl-lg rounded-tr-lg rounded-br-lg z-0 transition-transform duration-300 transform scale-0 group-hover:scale-100'></div>

      <div className='relative z-10 w-[250px] h-[300px] flex flex-col justify-center bg-white rounded-xl group-hover:shadow-lg transition-shadow duration-300 ease-in-out transform scale-95 group-hover:scale-100'>
        <div className='w-[181px] h-[229px] flex flex-col justify-center items-center mx-auto'>
          <div>{icon}</div>

          <div className=''>
            <Text size='h6' variant='primary' className='font-semibold text-center mb-[15px]'>
              {title}
            </Text>
          </div>

          <div>
            <Text size='p' variant='secondary' className='text-center text-[15px] w-[181px] h-[78px]'>
              {description}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
