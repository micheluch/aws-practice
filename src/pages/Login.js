import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

const Login = () => {
    return (
        <Authenticator>
            {({ signOut }) => (
                <div>
                    <h1>Welcome to the Premium Rice Fields</h1>
                    <h3>You are authenticated. This is a premium page lmao</h3>
                    <button onClick={signOut}>Sign TF Out</button>
                </div>
            )}
        </Authenticator>
    );
};

export default Login;