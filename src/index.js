import PAGES from "./models/pageModel.js";
import { onChangePage } from "./routers/router.js";
import { HOME_PAGE_LINK, ABOUT_PAGE_LINK, CREATE_PIC_LINK, LOGIN_PAGE_LINK, ERROR404_PAGE_LINK, SIGNUP_PAGE_LINK } from "./services/domService.js";

// **** האזנה לאירועים ****
// ניתוב דפים

HOME_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.HOME));
ABOUT_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ABOUT));
CREATE_PIC_LINK.addEventListener("click", () => onChangePage(PAGES.CREATE_PIC));
LOGIN_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.LOGIN));
SIGNUP_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.SIGNUP));
ERROR404_PAGE_LINK.addEventListener("click", () => onChangePage(PAGES.ERROR_404));