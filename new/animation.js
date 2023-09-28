function act1 ()
{
    const Form = document.getElementById
    (
        'Form'
    );
    Form.style.display = 'block';
    const Page1 = document.querySelector
    (
        '.Page1'
    );
    Page1.style.opacity = 0.2;
}
var a = 0;
function act2 ()
{
    if (a < 100)
    {
        let b = 1 + Math.floor(Math.random() * 3);
        a += b;
        console.log(a);
        let Duck1 = document.querySelector
        (
            '.Duck1'
        );
        Duck1.style.left = 160 + a*11.28 + "px";
        Duck1.style.transition = 0.5;
        let Run1 = document.querySelector
        (
            '.Run1'
        );
        Run1.style.width = 60 + a*11.28 + "px";
    }
    else
    {
        a = 100;
        const win = document.querySelector
        (
            '.win'
        );
        win.style.display = 'block';
        let Page2 = document.querySelector
        (
            '.Page2'
        );
        Page2.style.opacity = 0.2;
    }
}



