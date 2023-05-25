import Feed from "@components/Feed";

const Home = () => {
    return (
        <section className='w-full flex-center flex-col'>
            <h1 className='head_text text-center'>Prompts for Days
                <br className='max-md:hidden' />
                <span className='text-center orange_gradient'>Every AI prompt need</span>
            </h1>
            <p className='desc text-center'>
                Prompt-Awesome is an open-source AI prompt collection created by the community to assist you in your creative writing, code projects, and more. 
            </p>

            <Feed />
        </section>
    );
};

export default Home;