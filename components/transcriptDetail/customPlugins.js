import { Plugin, Events } from "xgplayer";
import { xgIconTips } from "xgplayer/es/plugins/common/iconTools";
import { createApp, unref } from "vue";
import VideoControls from "./VideoControls.client.vue";
export class TmSubTitleIcon extends Plugin {
  // 插件的名称，将作为插件实例的唯一key值
  static get pluginName() {
    return "tmSubTitleIcon";
  }

  static get defaultConfig() {
    return {
      // 挂载在controls的右侧，如果不指定则默认挂载在播放器根节点上
      position: Plugin.POSITIONS.CONTROLS_RIGHT,
      index: 100
    };
  }

  constructor(args) {
    super(args);
    const config = args.player.config.tmSubTitleIcon;
    this.status = unref(config.show) || false;
    this.handleStatusChange = config.handleStatusChange;
  }
  initIcons() {
    const { icons } = this;
    this.appendChild(".xgplayer-icon", icons.subTitleHide);
    this.appendChild(".xgplayer-icon", icons.subTitleShow);
  }
  registerIcons() {
    const SubTitleShow = `<span class="iconfont icon-shipinzimu text-base sub-title-common"></span>`;
    const SubTitleHide = `<span class="iconfont icon-shipinguanbizimu text-lg sub-title-common"></span>`;
    return {
      subTitleHide: { icon: SubTitleHide, class: "sub-title-hide" },
      subTitleShow: { icon: SubTitleShow, class: "sub-title-show" }
    };
  }
  afterCreate() {
    super.afterCreate();
    this.initIcons();
    this.onClick = () => {
      console.log("当前插件根节点点击事件");
      const textTrack = this.getPlugin("texttrack");
      this.status = !this.status;
      this.handleStatusChange(this.status);
      if (this.status) {
        textTrack.switchOnSubtitle();
        textTrack.subTitles?._onTimeupdate();
        this.animate(true);
      } else {
        textTrack.subTitles.switchOff();
        textTrack.subTitles?._onTimeupdate();
        this.animate(false);
      }
    };
    // 对当前插件根节点绑定click事件
    this.bind(["touchend", "click"], this.onClick);
    this.animate(this.status);
    this.player.on(Events.COMPLETE, () => {
      const textTrack = this.getPlugin("texttrack");
      if (this.status) {
        textTrack.switchOnSubtitle();
        this.animate(true);
      } else {
        textTrack.subTitles.switchOff();
        this.animate(false);
      }
    });
  }

  destroy() {
    super.destroy();
    this.unbind(["touchend", "click"], this.onClick);
  }
  animate(show) {
    if (!this.player) return;
    const { i18nKeys } = this;
    const tipDom = this.find(".xg-tips");
    if (show) {
      this.setAttr("data-state", "show");
      tipDom && this.changeLangTextKey(tipDom, i18nKeys.TM_SUBTITLE_HIDE_TIPS);
    } else {
      this.setAttr("data-state", "hide");
      tipDom && this.changeLangTextKey(tipDom, i18nKeys.TM_SUBTITLE_SHOW_TIPS);
    }
  }
  render() {
    return `
      <xg-icon class='xgplayer-tm-subtitle'>
        <div class="xgplayer-icon">
        </div>
        ${xgIconTips(this, "TM_SUBTITLE_HIDE_TIPS", this.playerConfig.isHideTips)}
      </xg-icon>
      `;
  }
}
export class TmMinimize extends Plugin {
  // 插件的名称，将作为插件实例的唯一key值
  static get pluginName() {
    return "tmMinimize";
  }

  static get defaultConfig() {
    return {
      // 挂载在controls的右侧，如果不指定则默认挂载在播放器根节点上
      position: Plugin.POSITIONS.CONTROLS_RIGHT,
      index: 99
    };
  }

  constructor(args) {
    super(args);
  }
  initIcons() {
    const { icons } = this;
    this.appendChild(".xgplayer-icon", icons.minimize);
  }
  registerIcons() {
    const Minimize = `<span class="iconfont icon-shipinyincang text-base"></span>`;
    return {
      minimize: { icon: Minimize, class: "minimize" }
    };
  }
  afterCreate() {
    super.afterCreate();
    this.initIcons();
    this.handlerMiniClick = this.hook("minimizeClick", () => {});
    this.onClick = () => {
      this.handlerMiniClick();
    };
    // 对当前插件根节点绑定click事件
    this.bind(["touchend", "click"], this.onClick);
    this.animate();
  }

  destroy() {
    super.destroy();
    this.unbind(["touchend", "click"], this.onClick);
  }
  animate() {
    if (!this.player) return;
    const { i18nKeys } = this;
    const tipDom = this.find(".xg-tips");
    this.setAttr("data-state", "show");
    tipDom && this.changeLangTextKey(tipDom, i18nKeys.TM_MINIMIZE_TIPS);
  }
  render() {
    return `
      <xg-icon class='xgplayer-tm-minimize'>
        <div class="xgplayer-icon">
        </div>
        ${xgIconTips(this, "TM_MINIMIZE_TIPS", this.playerConfig.isHideTips)}
      </xg-icon>
      `;
  }
}
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
    this.dynamicProgressBar =
      this.player.config.tmControl?.dynamicProgressBar ?? false;
    this.onlyShowProgress =
      this.player.config.tmControl?.onlyShowProgress ?? true;
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
