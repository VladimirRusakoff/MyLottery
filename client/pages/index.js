import { useRouter } from "next/router";
import { useState } from "react";
import { Form, Button } from "semantic-ui-react";
import Layout from "../components/Layout";

const Index = () => {
    const router = useRouter();
    const [numb, setNumb] = useState();
    const [disabl, setDisabl] = useState(0);
    const [choose, setChoose] = useState("");

    function handleChooseNumber() {
        setDisabl(1)
        setChoose(`Your choice is the number ${numb}`);
    }

    return (<Layout>
            <h1>
                Choose number for lottery
            </h1> 
            <Form>
                <Form.Field>
                    <Button primary disabled={disabl === 1} type='submit' onClick={() => setNumb(1)}>1</Button>
                    <Button primary disabled={disabl === 1} type='submit' onClick={() => setNumb(2)}>2</Button>
                    <Button primary disabled={disabl === 1} type='submit' onClick={() => setNumb(3)}>3</Button>
                </Form.Field>
                <Form.Field>
                    <Button primary disabled={disabl === 1} type='submit' onClick={() => setNumb(4)}>4</Button>
                    <Button primary disabled={disabl === 1} type='submit' onClick={() => setNumb(5)}>5</Button>
                    <Button primary disabled={disabl === 1} type='submit' onClick={() => setNumb(6)}>6</Button>
                </Form.Field>
                <Form.Field>
                    <Button primary disabled={disabl === 1} type='submit' onClick={() => setNumb(7)}>7</Button>
                    <Button primary disabled={disabl === 1} type='submit' onClick={() => setNumb(8)}>8</Button>
                    <Button primary disabled={disabl === 1} type='submit' onClick={() => setNumb(9)}>9</Button>
                </Form.Field>
                <Form.Field>
                    <h2>Your number is {numb}</h2>
                </Form.Field>
                <Form.Field>
                    <Button primary type='submit' onClick={handleChooseNumber}>Remember number</Button>
                </Form.Field>
                <Form.Field>
                    <h2>{choose}</h2>
                </Form.Field>
            </Form>
        </Layout>
        );
}

export default Index;