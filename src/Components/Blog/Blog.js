import React, { useEffect } from 'react';
import image from '../../person 1.png'
import image2 from '../../person 2.png'
import image3 from '../../person 3.png'
const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    return (
        <div style={{ margin: "20%" }} >
            <div className="custom-shadow ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={image} alt='' />
                    <div >
                        <h1 >Will Smith</h1>
                        <h1 >Posted On 20th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style text-red-700 text-center text-3xl">Difference between authentication and authorization ?</h1>
                    <h1 className="sp-style p-10 text-2xl">Authentication is a system to verify a person who is this. Authentication system is changeable by user. In the other side, Authorization means what type of data user can data user can access or use. Authorization system is not changeable by user.</h1>

                </div>

            </div>

            <div className="custom-shadow ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={image2} alt='' />
                    <div >
                        <h1 >Chris Hemsworth.</h1>
                        <h1 >Posted On 10th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style font-bold text-center text-3xl text-red-700">Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <h1 className="sp-style p-10 text-2xl">
                        Firebase provide us real-time database system which is provided by google. Firebase is very easy to use and safe. It is useable from all platform.
                    </h1>
                    <h1 className="sp-style p-10 text-xl">Here some Alternatives of firebase:</h1>
                    <ul className='text-xl sp-style ml-10 p-5 font-bold'>
                        <li>Parse</li>
                        <li>Back4App</li>
                        <li>AWS Amplify</li>
                        <li>Kuzzle</li>
                        <li>Couchbase</li>

                    </ul>
                </div>

            </div>
            <div className="custom-shadow ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={image3} alt='' />
                    <div >
                        <h1 >Leonardo DiCaprio.</h1>
                        <h1 >Posted On 10th August,2021</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style font-bold text-center text-3xl text-red-700">Services of firebase</h1>
                    <ul className="ml-10 p-10 text-xl font-bold">
                        <li>Cloud Firestore</li>
                        <li>Cloud Functions</li>
                        <li>Authentication</li>
                        <li>Hosting</li>
                        <li>Cloud Storage</li>

                        <li>Analytics</li>
                    </ul>

                </div>

            </div>

        </div>
    );
};

export default Blog;