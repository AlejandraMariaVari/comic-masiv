import { toast } from "react-toastify";

export const notifyError = (message) =>
    toast(message, {
        type: "error",
        theme: "colored",
        autoClose: 3000,
    });

export const notifySuccess = (message) =>
    toast(message, {
        type: "success",
        theme: "colored",
        autoClose: 2000,
    });