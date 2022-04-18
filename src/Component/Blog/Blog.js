import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <div className='m-3 mb-5'>
                <h1>What Is the Difference Between Authentication and Authorization?</h1>
                <div className='d-flex justify-content-between'>
                    <div className='border border-primary p-2 w-50' >
                        <h4 className='text-center'>Authentication</h4><br />
                        <p>1.Authentication verifies who the user is.</p> <br />
                        <p>2.Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user. </p><br />
                        <p>3.Authentication is the first step of a good identity and access management process. </p><br />
                        <p>4.Authentication is visible to and partially changeable by the user. </p><br />
                        <p>5. Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</p>

                    </div>
                    <div className='border border-primary p-2 w-50'>
                        <h4 className='text-center'>Authorization</h4> <br />
                        <p>1.Authorization determines what resources a user can access.</p><br />
                        <p>2.Authorization works through settings that are implemented and maintained by the organization.</p><br />
                        <p>3.Authorization always takes place after authentication.</p> <br />
                        <p>4.Authorization isn’t visible to or changeable by the user.</p><br />
                        <p>5.Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</p><br />
                    </div>

                </div>
            </div>
            <div className='m-3 mb-5'>
                <h1> Why are you using firebase? What other options do you have to implement authentication?</h1>
                <div className='d-flex justify-content-between'>
                    <div className='border border-primary p-2 w-50'>
                        <h4 className='text-center'>Using firebase :</h4>
                        <p>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, real-time events continue to fire, giving the end-user a responsive experience.<br />
                            Firebase, Backend-as-a-Service (BaaS), is a platform by Google that provides functionalities and helps with the backend development of your Android, iOS, or web and even some products that support Unity3D too.<br />
                            used to store users' data like chat messages, users' details, and other metadata .<br />
                            used to store user-generated content like the profile picture, multimedia messages, etc. used to send notifications.</p>

                    </div>
                    <div className='border border-primary p-2 w-50'>
                        <h4 className='text-center'>other options to implement authentication:</h4>
                        <h5>there are some similar user authentication platforms like firebase: </h5> <br />
                        <li>STYTCH</li>
                        <li>Ory</li>
                        <li>Supabase</li>
                        <li>Okta</li>
                        <li>PingIdentity</li>
                        <li>Keycloak</li>
                        <li>Frontegg</li>
                        <li>Authress</li>
                        <li>Auth0</li>
                        <li>Amazon Cognito</li>
                        <li>OneLogin</li>
                    </div>

                </div>
            </div>

            <div className='m-3 mb-5'>
                <h1>What other services does firebase provide other than authentication ?</h1>
                <div className='d-flex justify-content-between'>
                    <div className='border border-primary p-2 w-50'>
                        <h4 className='text-center'>There are many services without Authentication which Firebase provides, Most useful of them are:</h4>
                        <ul>
                            <li>Cloud Firestore</li>
                            <li>Cloud Functions</li>
                            <li>Authentication</li>
                            <li>Hosting</li>
                            <li>Cloud Storage</li>
                            <li>Google Analytics</li>
                            <li>Predictions</li>
                            <li>Cloud Messaging</li>
                            <li>Dynamic Links</li>
                            <li>Remote Config</li>
                        </ul>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Blog;