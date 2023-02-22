import React from "react";

const Home = (props) => {

    return (
        <div className="flex justify-center">
        <div className='mt-5'>
            <img
                { ...props }
            />
        </div>
        </div>
    );
};

export default Home;

