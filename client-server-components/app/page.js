import React from 'react';
import PostLists from './components/PostLists';
import AddPost from './components/AddPost';

const Home = async () => {
    return (
        <>
            <PostLists />
            <AddPost />
        </>
    );
};

export default Home;
