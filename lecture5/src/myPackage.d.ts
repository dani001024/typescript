//자바스크립트로 만들어진 패키지를 설치했을 때 타입스크립트에 타입을 정의
interface Config{
    url :string
}
declare module "myPackage"{
    function init(config:Config):boolean
    function exit(code:number):number
}