function autoChecker(){
    if (window.localStorage.getItem('computerInfo') != null) {
        console.log("OK")
    }
    else {
        const data = {
            productSub: navigator.productSub,
            userAgent: navigator.userAgent,
            isActive: true
        }
        localStorage.setItem('computerInfo', JSON.stringify(data));
    }
}

autoChecker()

