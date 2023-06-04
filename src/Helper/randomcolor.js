export const randomColor = () => {
    const colors = (e) => {
    if (e.charAt(0).toLowerCase() === 'a'){
       return '#BB86FC'
    }else if (e.charAt(0).toLowerCase() === 'b'){
        return '#43A7D3'
    }else if (e.charAt(0).toLowerCase() === 'c'){
        return '#73819E'
    }else if (e.charAt(0).toLowerCase() === 'd'){
        return '#03DAC5'
    }else if (e.charAt(0).toLowerCase() === 'e'){
        return '#60CC8A'
    }else if (e.charAt(0).toLowerCase() === 'f'){
        return '#036b64'
    }else if (e.charAt(0).toLowerCase() === 'g'){
        return '#505e2d'
    }else if (e.charAt(0).toLowerCase() === 'h'){
        return '#e30909'
    }else if (e.charAt(0).toLowerCase() === 'i'){
        return '#b05e0c'
    }else if (e.charAt(0).toLowerCase() === 'j'){
        return '#DB5B5B'
    }else if (e.charAt(0).toLowerCase() === 'k'){
        return '#ed5a12'
    }else if (e.charAt(0).toLowerCase() === 'l'){
        return '#900b37'
    }else if (e.charAt(0).toLowerCase() === 'm'){
        return '#ee8109'
    }else if (e.charAt(0).toLowerCase() === 'n'){
        return '#54f0b2'
    }else if (e.charAt(0).toLowerCase() === 'o'){
        return '#03298d'
    }else if (e.charAt(0).toLowerCase() === 'p'){
        return '#89de0a'
    }else if (e.charAt(0).toLowerCase() === 'q'){
        return '#033a01'
    }else if (e.charAt(0).toLowerCase() === 'r'){
        return '#9da6ac'
    }else if (e.charAt(0).toLowerCase() === 's'){
        return '#b39f08'
    }else if (e.charAt(0).toLowerCase() === 't'){
        return '#1b83ed'
    }else if (e.charAt(0).toLowerCase() === 'u'){
        return '#fbbabd'
    }else if (e.charAt(0).toLowerCase() === 'v'){
        return '#f666c7'
    }else if (e.charAt(0).toLowerCase() === 'w'){
        return '#aa8741'
    }else if (e.charAt(0).toLowerCase() === 'x'){
        return '#0eeec8'
    }else if (e.charAt(0).toLowerCase() === 'y'){
        return '#365cf7'
    }else if (e.charAt(0).toLowerCase() === 'z'){
        return '#7bf142'
    }else{
        return '#03DAC5'
    }
    }
    const handleColor = (event) => {
        if(event.toLowerCase() === "fully paid"){
            return '#0BB14B'
        }else if(event.toLowerCase() === "partially paid"){
            return '#FF8900'
        }else if(event.toLowerCase() === "overdue"){
            return '#F80000'
        }else{
            return '#7B7B7B'
        }
    }
    return {colors, handleColor};  
}


