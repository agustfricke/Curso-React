import React from "react";

const Home = ({ username, es_admin }) => {

    return (
        <div className="flex justify-center">
        <div className='mt-5'>
            <p> { username }</p>
        </div>
        </div>
    );
};

export default Home;

