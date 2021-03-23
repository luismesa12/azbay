import { useState } from "react";
import db from "../../firebase";
import ContactForm from "./ContactForm"
import firebase from 'firebase/app';
import { Box, Typography, } from '@material-ui/core';

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [msg, setMsg] = useState('');
    const [open, setOpen] = useState(false);
    
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        } 
        setOpen(false);
    };
    const handleName = (e) => {
        setName(e.target.value)
    };
    const handleEmail = (e) => {
        setEmail(e.target.value)
    };
    const handlePhone = (e) => {
        setPhone(e.target.value)
    };
    const handleMsg = (e) => {
        setMsg(e.target.value)
    };

    const sendMsg = async (e) => {
        e.preventDefault();
        const message = { ...{ name, email, phone, msg}, date: firebase.firestore.FieldValue.serverTimestamp() }
        try {
            const messages = db.collection('messages');
            await messages.add(message).then(data => {
                console.log('message sent with id: ', data.id)
                setOpen(true)
            });
            setName('');
            setEmail('');
            setPhone('');
            setMsg('');

        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <Box my={2}>
                <Typography variant="h2" color="initial" align='center'>Contacto</Typography>
            </Box>
            <ContactForm {...{ name, email, phone, msg, handleName, handleEmail, handlePhone, handleMsg, sendMsg,open,handleClose }} />
        </>
    )
}

export default Contact;
