import { RiUserSearchLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { createClassesFromArray } from 'src/lib/utils';

const centerElement = ' flex flex-col items-center justify-center';

const Start = () => {
    return (
        <div
            className={createClassesFromArray([
                centerElement,
                'bg-primary',
                'min-w-[calc(100%-108px)]',
                'text-white',
                'md:min-h-screen',
                'min-h-[calc(100vh-70px)]',
            ])}
        >
            <RiUserSearchLine
                style={{ transform: 'scale(8)' }}
                className="text-secondary mb-6"
            />
            <h1 className="text-[calc(1.2vh+1.2vh+1.2vmin)]">
                Search For Someone
            </h1>

            {/* from the below link user will trigger search of another user*/}
            <Link
                to="/founduser"
                className={createClassesFromArray([
                    centerElement,
                    'hover:no-underline',
                    'hover:text-black',
                    'font-medium',
                    'text-black',
                    'text-[1.5em]',
                    'bg-[#FF9F1C]',
                    'w-[8em]',
                    'h-[2.3em]',
                    'mt-[-5px]',
                    'rounded-[30px]',
                ])}
            >
                Start
            </Link>
        </div>
    );
};

export default Start;
