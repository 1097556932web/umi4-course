export function render(oldRender: any) {
    oldRender()
    // fetch("/api/auth").then((auth) => {
    // if (auth?.islogin) {
    //     console.log(oldRender);
    //     setTimeout(() => {
    //         oldRender();
    //     }, 3000);
    // } else {
    //     history.pushState("/loging");
    //     oldRender();
    // }
    // })
}