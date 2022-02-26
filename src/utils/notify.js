import { toast } from "react-toastify";

export const notifyError = (message) =>
    toast(message, {
        type: "error",
        theme: "colored",
    });

export const notifySuccess = (message) =>
    toast(message, {
        type: "success",
        theme: "colored",
    });