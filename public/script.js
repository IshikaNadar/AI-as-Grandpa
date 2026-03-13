async function send(){

const message=document.getElementById("msg").value

const res=await fetch("/chat",{
method:"POST",
headers:{"Content-Type":"application/json"},
body:JSON.stringify({message})
})

const data=await res.json()

document.getElementById("reply").innerText=data.reply

speak(data.reply)

}

function speak(text){

const speech=new SpeechSynthesisUtterance(text)

speech.rate=0.9

speech.pitch=0.8

speechSynthesis.speak(speech)

}

function startVoice(){

const recognition=new webkitSpeechRecognition()

recognition.onresult=function(event){

const voiceText=event.results[0][0].transcript

document.getElementById("msg").value=voiceText

send()

}

recognition.start()

}