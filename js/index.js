window.onload = function () {
    // open
    var isCorrect = false
    var menuBtn = document.getElementById('menu')
    console.log(menuBtn);
    dialogMenu = document.getElementById('nav_t')
    closeBtn = document.getElementById('cancel')
    scList = document.querySelectorAll('.icon-shoucang1')
    menuBtn.onclick = function () {
        dialogMenu.style.display = 'block'
    }
    closeBtn.onclick = function () {
        dialogMenu.style.display = 'none'
    }
    scList.forEach(i => {
        i.style.color = '#ccc'
        i.style.cursor = 'pointer'
        i.onclick = function () {
            isCorrect = !isCorrect
            var color = this.style.color
            if (isCorrect) {
                if (color === 'rgb(204, 204, 204)') {
                    this.style.color = 'red'
                } else {
                    this.style.color = '#ccc'
                }
            } else {
                if (color === 'rgb(204, 204, 204)') {
                    this.style.color = 'red'
                } else {
                    this.style.color = '#ccc'
                }
            }
        }
    })

}