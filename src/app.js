import "./routes/links.js";
import renderSlider from "./pictures/components/renderSlider.js";
import "./pictures/models/picture.js";
import "./users/models/user.js";
import initialData from "./initialData/initialData.js";

window.pictures = initialData().pictures;
renderSlider(pictures, 0);
