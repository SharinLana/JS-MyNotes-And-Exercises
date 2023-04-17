function getSmth(num) {
    return new Promise((resolve, reject) => {
        if (num >= 0) {
            setTimeout(() => {
                resolve(num);
            }, 1000)
        } else {
            reject(new Error('Negative argument'))
        }
    })
}

async function func() {
	try {
        let res1 = await getSmth(-3);
        let res2 = await getSmth(3);
        let res3  = await getSmth(4);
        console.log(res1 + res2 + res3);
    } catch(error) {
        console.log(error)
    }
}

func();