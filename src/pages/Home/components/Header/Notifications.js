import React from "react";
import { Bell } from "react-feather";
import SvgIcon from "@material-ui/core/SvgIcon";
import IconButton from "@material-ui/core/IconButton";
import { useSelector } from "react-redux";

function Notifications(){
    const account = useSelector((state) => state.account);
    const isAuthenticated = !!account.user;
    return (
        isAuthenticated && (
        <IconButton>
            <SvgIcon>
                <Bell></Bell>
            </SvgIcon>
        </IconButton>
        )
    );
}

export default Notifications;