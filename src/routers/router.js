import PAGES from "../models/pageModel.js"
import { HOME_PAGE, ABOUT_PAGE, LOGIN, ERROR_404, CREATE_PIC, SIGNUP } from "../services/domService.js"

export const onChangePage = page => {
    HOME_PAGE.className = "d-none";
    ABOUT_PAGE.className = "d-none";
    CREATE_PIC.className = "d-none";
    LOGIN.className = "d-none";
    ERROR_404.className = "d-none";
    SIGNUP.className ="d-none";
    
    if(page === PAGES.HOME) return (HOME_PAGE.className = "d-block");
    if(page === PAGES.ABOUT) return (ABOUT_PAGE.className = "d-block");
    if(page === PAGES.CREATE_PIC) return (CREATE_PIC.className = "d-block");
    if(page === PAGES.LOGIN) return (LOGIN.className = "d-block");
    if(page === PAGES.SIGNUP) return (SIGNUP.className = "d-block");
    
    return (ERROR_404.className = "d-block");
    
};