export const FirebaseHandleErrors = ( error ) => {

  switch (error.code) {

    case 'auth/user-disabled':
      error.message = `Sorry, that account was disabled 💀`
    break;

    case 'auth/popup-closed-by-user':
      error.message = `Please don't close the popup so you can sign in with your Google account 🤦‍♂️`
    break;

    case 'auth/email-already-in-use':
      error.message = `That email is already in use `
    break;

    case 'auth/internal-error':
      error.message = `Internal error 😱`
    break;

    case 'auth/wrong-password':
      error.message = `That password was wrong`
    break;
    
    case 'auth/user-not-found':
        error.message = `That email doesn't correspond to any user account`
    break;

    case 'auth/missing-email':
        error.message = `Please insert your email address in the field above ☝️`
    break;

    case 'auth/invalid-email':
        error.message = `Please insert a valid email format. E.g.: name@mail.com`
    break;

    case 'auth/too-many-requests':
        error.message = `You have made too many requests, please try again later`
    break;

    default:
        error.message = `Unknown error 🤷‍♂️`

  }

  return error.message;

}