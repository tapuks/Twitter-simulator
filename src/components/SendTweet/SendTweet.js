import { Fab } from "@material-ui/core"
import AddIcon from "@material-ui/icons/Add"
import moment from 'moment'
import ModalContainer from "../ModalContainer"
import { useState } from "react"
import FormSendTweet from "../FormSendTweet/FormSendTweet"
import { TWEETS_STORAGE } from "../../utils/constants" //COMO NO ES EXPORT DEFAULT VA CON LLAVES

import "./SendTweet.scss"

export default function SendTweet(props) {
    const {setInfoProps, allTweets} = props
    

    const [isOpenModal, setIsOpenModal]=useState(false)

    const openModal=()=> {
        setIsOpenModal(true)
    }

    const closeModal=()=> {
        setIsOpenModal(false)
    }

    const sendTweet=(e, formValue)=> {
        e.preventDefault()
        const {name, tweet} = formValue
        let allTweetsArray=[]

        if(allTweets) {
            allTweetsArray = allTweets
        }

        if (!name || !tweet) {
         
            setInfoProps({
                open: true,
                text:"WARNING: CAMPOS OBLIGATORIOS"
            })
        }
        else {
            formValue.time = moment()
            allTweetsArray.push(formValue)
            localStorage.setItem(TWEETS_STORAGE, JSON.stringify(allTweetsArray))
            closeModal()
            setInfoProps({open: true, text:"Tweet añadido correctamente"})

        }
        allTweetsArray=[]
    }


    return (
        <div className="send-tweet">
            {/* BOTON CIRCULAR */}
            <Fab 
            className="send-tweet__open-modal" 
            color='primary' 
            aria-label='add'
            onClick={openModal}
            >
                {/* ICONO DEL BOTON */}
                <AddIcon></AddIcon>
            </Fab>
            {/* MODAL */}
            <ModalContainer isOpenModal={isOpenModal} closeModal ={closeModal} children >
                {/* TEXTO DE DENTRO DEL MODAL */}
                <FormSendTweet sendTweet={sendTweet}  />
            </ModalContainer>
        </div>)
}