let func = (function() {
    let num = 1;
	return function() {
        alert(num);
        num++;

        if (num > 5) {        
            num = 4;
            alert(num);
            num--;
        }
	}
})();

func();
func();
func();
func();
func();
func();
func();
func();
func();
func();