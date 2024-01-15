import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import useClipboard from "react-use-clipboard";
import {useState} from "react";
import './speech.css';
 
const Speech = () =>{
    
    const [textToCopy, setTextToCopy] = useState();
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });

    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return null
    }

    return(
        <>
             <div className="containerSpeech">
                <h2 className="TextSpeech">Speech to Text Converter</h2>
                <br/>

                <div className="main-contentSpeech" onClick={() =>  setTextToCopy(transcript)}>
                    {transcript}
                </div>

                <div className="btn-styleSpeech">

                    <button  onClick={setCopied} className="buttonSpeech">
                        {isCopied ? 'Copied!' : 'Copy Text'}
                    </button>
                    <button onClick={startListening} className="buttonSpeech">Start Listening</button>
                    <button onClick={SpeechRecognition.stopListening} className="buttonSpeech">Stop Listening</button>

                </div>

            </div>


        </>

    );
}

export default Speech;