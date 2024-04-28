import { Form, Input, Button } from "semantic-ui-react";
import Layout from "../components/Layout";
import { useState } from "react";

const AddContact = () => {
    const [telegram, setTelegram] = useState("");
    const [discord, setDiscord] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
    }

    return ( <Layout>
        <Form onSubmit={handleSubmit}>
            <Form.Group widths='equal'>
                <Form.Field
                    control={Input}
                    label='Telegram'
                    value={telegram}
                    onChange={(event) => setTelegram(event.target.value)}
                    placeholder='Введите здесь'
                />
                <Form.Field
                    control={Input}
                    label='Discord'
                    value={discord}
                    onChange={(event) => setDiscord(event.target.value)}
                    placeholder='Введите здесь'
                />
            </Form.Group>
            <Button primary>Сохранить</Button>
        </Form>
    </Layout> );
}

export default AddContact;