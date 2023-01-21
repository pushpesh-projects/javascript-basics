const status_code = 200

switch(status_code){
    case 200:
        console.log("Success")
        break;
    case 400:
        console.log("Bad request");
        break;
    case 500:
        console.log("Server error");
        break;
    default:
        console.log("Unknown status")
}