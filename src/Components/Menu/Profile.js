import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../Redux/Slice/UserProfileReducer';

function Profile() {
    let dispatch = useDispatch();
    const user = useSelector((state) => {
        return state.userReducer;
    });


    console.log(user.MyUser.UserName);
    let isLogin = user.MyUser.UserName != "";
    return (
        <>
            <div className="mr-20">
                {isLogin ? `Welcome ${user.MyUser.UserName}! ` : "" }

            </div>
            <div className='mr-20'>
                <button onClick={() => { dispatch(logout()) }} >Logout</button>
            </div>
        </>
    )
}

export default Profile;
