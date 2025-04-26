export default function Read(text)
{
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

export function PlayAudio(value){
        const audioUrl = value;
        if (audioUrl) {
          const audio = new Audio(audioUrl);
          audio.play();
        }
}