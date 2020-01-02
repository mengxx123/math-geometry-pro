import './index.scss'

export const toast = {
    success(text) {
        let txt = document.createTextNode(text)
        var div = document.createElement('DIV')
        div.setAttribute('class', 'ui-toast ui-toast-success')
        div.appendChild(txt)
        document.body.appendChild(div)
        setTimeout(() => {
            document.body.removeChild(div)
        }, 1000)
    },
    error(text) {
        let txt = document.createTextNode(text)
        var div = document.createElement('DIV')
        div.setAttribute('class', 'ui-toast ui-toast-success')
        div.appendChild(txt)
        document.body.appendChild(div)
        setTimeout(() => {
            document.body.removeChild(div)
        }, 1000)
    }
}