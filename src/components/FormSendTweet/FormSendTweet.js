import { FormControl, FormGroup, TextField, Button } from '@material-ui/core'
import { useEffect, useState } from 'react'

import './FormSendTweet.scss'

export default function FormSendTweet(props) {
    const {sendTweet}= props

    const [formValue, setFormValue]=useState({'name':'', 'tweet':''})
    const onFormChange=(e)=> {
        setFormValue({
            ...formValue,
            // e.target.name puede ser (name='name' o name='tweet')
            [e.target.name]: e.target.value
        })
    }



    return (
            <div className='form-send-tweet'>
                <h2 className='form-send-tweet__title'>Enviar Tweet</h2>
                <form className='form-send-tweet__form' 
                onSubmit={e => sendTweet(e, formValue)}>
                    <FormControl>
                        <FormGroup>
                            <TextField
                            className="form-send-tweet__form-name"
                            type='text'
                            name='name'
                            onChange={onFormChange}
                            placeholder='Nombre de usuario'
                            margin='normal'
                            />
                        </FormGroup>
                        <FormGroup>
                            <TextField
                            className="form-send-tweet__form-textarea"
                            name='tweet'
                            multiline
                            rows='6'
                            placeholder='Escribe tu Tweet...'
                            onChange={onFormChange}
                            margin='normal'
                            />
                        </FormGroup>
                        <FormGroup className="form-send-tweet__form-submit">
                            <Button type='submit'>Enviar Tweet</Button>
                        </FormGroup>
                    </FormControl>
                </form>
            </div>
        )

}
