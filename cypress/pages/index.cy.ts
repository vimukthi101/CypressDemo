import {Base} from '../pages/base.cy'
import {HomePage} from "../pages/homePage.cy";
import {FormSubmitPage} from "../pages/formSubmitPage.cy";
import {BootstrapListBoxPage} from "../pages/bootstrapListBoxPage.cy";
import {CheckBoxPage} from "../pages/checkBoxPage.cy";
import {DragAndDropSlider} from "../pages/dragAndDropSlider.cy";
import {AlertBoxPage} from "../pages/alertBoxPage.cy";
import {DropDownPage} from "../pages/dropDownPage.cy";
import {ShadowDom} from "../pages/shadowDom.cy";
import {TableSearch} from "../pages/tableSearch.cy";
import {UploadFileDemo} from "../pages/uploadFileDemo.cy";

export default {
    base : new Base(),
    homePage : new HomePage(),
    formSubmitPage : new FormSubmitPage(),
    bootstrapListBoxPage : new BootstrapListBoxPage(),
    checkBoxPage : new CheckBoxPage(),
    dragAndDropSlider : new DragAndDropSlider(),
    alertBoxPage : new AlertBoxPage(),
    dropDownPage : new DropDownPage(),
    shadowDom : new ShadowDom(),
    tableSearch : new TableSearch(),
    uploadFileDemo : new UploadFileDemo()
}