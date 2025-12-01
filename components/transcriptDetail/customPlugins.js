import { Plugin, Events } from "xgplayer";
import { xgIconTips } from "xgplayer/es/plugins/common/iconTools";
import { createApp, unref } from "vue";
import VideoControls from "./VideoControls.client.vue";
export class TmControl extends Plugin {
  // 插件的名称，将作为插件实例的唯一key值
  static get pluginName() {
    return "TmControl";
  }

  static get defaultConfig() {
    return {
      position: Plugin.POSITIONS.CONTROLS_CENTER
    };
  }

  constructor(args) {
    super(args);
    this.vm = null;
    this.id = Date.now();
    this.player = args.player;
    this.dynamicProgressBar = this.player.config.tmControl?.dynamicProgressBar ?? false;
    this.onlyShowProgress = this.player.config.tmControl?.onlyShowProgress ?? true;
    this.showLoading = this.player.config.tmControl?.showLoading ?? true;
  }

  beforePlayerInit() {}

  afterPlayerInit() {}

  afterCreate() {
    const tmControl = this.find(".controls-el");
    // 使用 Vue 组件
    const tmControlComponent = createApp(VideoControls, {
      player: this.player,
      onlyShowProgress: this.onlyShowProgress,
      dynamicProgressBar: this.dynamicProgressBar,
      showLoading: this.showLoading
    });
    this.vm = tmControlComponent.mount(tmControl);
  }

  destroy() {
    super.destroy();
  }

  render() {
    const customBoxClass = this.player.config.tmControl?.customBoxClass || "";
    return `<div class='tm-control-box flex-1 w-full h-5 flex items-center ${customBoxClass}'>
        <div class='controls-el flex-1 h-full'></div>
    </div>`;
  }
}
