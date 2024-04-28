import { Form, Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import { useState } from "react";

const Test = () => {
    const [saveNumb, setSaveNumb] = useState();

    function handleRandomNumber() {
        let rand = Math.round(Math.random()*9, 0)
        if (rand == 0) {
            rand = 1 + Math.round(Math.random()*7, 0)
        }
        setSaveNumb(rand)
    }

    return ( <Layout>
        <Form>
            <Form.Field>
                <Button primary type='submit' onClick={handleRandomNumber}>Start Lottery</Button>
            </Form.Field>
            <h2>Number {saveNumb} won!!!</h2>
        </Form>
    </Layout> )
};

export default Test;