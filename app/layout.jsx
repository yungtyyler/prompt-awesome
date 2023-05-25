import '@styles/globals.css';
import Nav from '@components/nav';
import Provider from '@components/Provider';

export const metadata = {
    title: 'Prompt-Awesome',
    description: 'An awesome collection of AI prompts.',
}

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <bod>
                <div className='main'>
                    <div className='gradient' />
                </div>

                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </bod>
        </html>
    );
};

export default RootLayout;