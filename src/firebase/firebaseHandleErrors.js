import { FormattedMessage } from 'react-intl';

export const FirebaseHandleErrors = ( error ) => {

  switch (error.code) {

    case 'auth/user-disabled':
      error.message = <FormattedMessage id='Firebase.UserDisableMessage'/>
    break;

    case 'auth/popup-closed-by-user':
      error.message = <FormattedMessage id='Firebase.PopupCloseMessage'/>
    break;

    case 'auth/email-already-in-use':
      error.message = <FormattedMessage id='Firebase.EmailAlreadyInUse'/>
    break;

    case 'auth/internal-error':
      error.message = <FormattedMessage id='Firebase.InternalErrorMessage'/>
    break;

    case 'auth/wrong-password':
      error.message = <FormattedMessage id='Firebase.WrongPassword'/>
    break;
    
    case 'auth/user-not-found':
        error.message = <FormattedMessage id='Firebase.UserNotFound'/>
    break;

    case 'auth/missing-email':
        error.message = <FormattedMessage id='Firebase.MissingEmail'/>
    break;

    case 'auth/invalid-email':
        error.message = <FormattedMessage id='Firebase.InvalidEmail'/>
    break;

    case 'auth/too-many-requests':
        error.message = <FormattedMessage id='Firebase.ToManyRequest'/>
    break;

    default:
        error.message = <FormattedMessage id='Firebase.UnknownError'/>

  }

  return error.message;

}