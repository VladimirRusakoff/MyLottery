import { useRef, useState } from "react";
import { Form, Button, Message } from "semantic-ui-react";
import Layout from "../components/Layout";
import { ethers } from "ethers";

const ShowContact = () => {
    
    const [errorMessage, setErrorMessage] = useState();
    const addressRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        const address = addressRef.current.value;
        console.log("address: ", address);
        setErrorMessage("");
        if (!address) {
            setErrorMessage("Адрес пользователя не заполнен!");
            return;
        }
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const contactFactoryAddress = "0xd3f1553731ed2f96f3f25cae16014b1bb9f6b872";
        //
        
    };

    return ( <Layout>
        <Form error={!!errorMessage} onSubmit={handleSubmit}>
            <Form.Field>
                <label>Введите адрес здесь:</label>
                <input ref={addressRef} placeholder="Прям тут" />
            </Form.Field>
            <Button primary type='submit'>Посмотреть</Button>
            <Message error header = 'Не заполнено поле' content={errorMessage}/>
        </Form>
    </Layout> );
}

export default ShowContact;