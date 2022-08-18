import { PerspectiveCamera } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export type ControlerProps = {
    camera: PerspectiveCamera;
    domElement: HTMLElement;
};

export default class _Controler
{
    constructor(props: ControlerProps,

        /** 轨道控制器 */
        private _controler: OrbitControls = new OrbitControls(props.camera, props.domElement)
    )
    {
        this._SetUpControler();
    }

    /** 轨道控制器设置 */
    private _SetUpControler(): void
    {
        //禁止右键点击拖拽轨道相机
        this._controler.enablePan = false;

        //禁止滚轮缩放->使用camera.fov缩放场景
        this._controler.enableZoom = false;

        //启动阻尼->缓动效果
        this._controler.enableDamping = true;
        //阻尼值
        this._controler.dampingFactor = .2;

        //反转操作
        this._controler.rotateSpeed *= -.3;
    }

    /** 更新控制器 */
    public UpdateControler = (): boolean => this._controler.update();

    get controler(): OrbitControls
    {
        return this._controler;
    }
}