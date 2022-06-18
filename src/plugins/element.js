import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import * as ElIcons from '@element-plus/icons';

export default (app) => {
    for (const name in ElIcons) {
        /*
         * 以elIcon为前缀的命名规则，是为了适配已经使用属性名添加图标的内置组件，
         * 例如：<el-button icon="el-icon-refresh"></el-button>
         */
        app.component('elIcon' + name, ElIcons[name]);
    }
    app.use(ElementPlus, { size: 'small', zIndex: 3000 });
};
