import React from 'react';
import { FormGroup, TextInput, TextArea, Button } from 'carbon-components-react';

import Layout from '../../components/Layout';
import { SectionTitle } from '../../styles';

const Contact = ({ user }) => {
    return (
        <Layout user={user}>
            <div>
                <SectionTitle>Contact Me</SectionTitle>
                <FormGroup>
                    <TextInput id="name" labelText="Name" />
                    <TextInput id="email" labelText="E-mail" />
                    <TextArea
                        labelText="Message"
                        placeholder="Your Message here"
                        className="messageBox"
                        id="message"
                    />
                    <Button>Submit</Button>

                </FormGroup>
            </div>
        </Layout>
    );
};

export default Contact;