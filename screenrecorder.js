function start(){
    navigator.mediaDevices.getDisplayMedia({
        video:true
    }).then((stream) =>{
    
        const recorder = new MediaRecorder(stream)
    
        recorder.start()
    
        const buffer = []
    
        recorder.addEventListener('dataavailable',(event) =>{
            buffer.push(event.data)
        })
    
        recorder.addEventListener('stop',() => {
            const blob  = new Blob(buffer,{
                type:'video/mp4'
            })
    
            const a = document.createElement('a')
            a.href = URL.createObjectURL(blob)
            a.download = "recording.mp4"
            a.click()
        })
    
        setTimeout(() => {
            recorder.stop()
        },100000)
    })
}

