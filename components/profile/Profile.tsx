import {FC, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import ProfileModal from "./ProfileModal";
import {UISlice} from "../../redux/ui/uiSlice";

const Profile:FC = () => {
    const isShown = useAppSelector((state) => {
        return state.ui.isProfileShown
    });

    const userData = useAppSelector((state) => {
        return {
            username: state.user.username,
            real_name: state.user.real_name,
            email: state.user.email,
            phone_number: state.user.phone_number
        }
    });

    const dispatch = useAppDispatch();

    const handleProfileToggle: () => void = () => {
        dispatch(UISlice.actions.toggleProfileShown());
    }

    return(
        <ProfileModal isShown={isShown} userData={userData} handleClose={handleProfileToggle} />
    )
}

export default Profile;